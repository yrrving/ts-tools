import { useState, useRef, useCallback, useEffect, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Download, Square, Circle, Pencil, Undo2, Trash2, Upload } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

type Shape =
  | { type: 'rect'; x: number; y: number; w: number; h: number; rx: number }
  | { type: 'circle'; cx: number; cy: number; rx: number; ry: number }
  | { type: 'freehand'; points: { x: number; y: number }[] }

type Tool = 'rect' | 'circle' | 'freehand'

interface ImageRect { x: number; y: number; w: number; h: number }

const CORNER_RADIUS = 20

const binarizeImage = (dataUrl: string): Promise<string> =>
  new Promise((resolve) => {
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')!
      ctx.drawImage(img, 0, 0)
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const d = imageData.data
      for (let i = 0; i < d.length; i += 4) {
        const alpha = d[i + 3] / 255
        const r = d[i] * alpha + 255 * (1 - alpha)
        const g = d[i + 1] * alpha + 255 * (1 - alpha)
        const b = d[i + 2] * alpha + 255 * (1 - alpha)
        const lum = 0.299 * r + 0.587 * g + 0.114 * b
        const v = lum < 128 ? 0 : 255
        d[i] = v; d[i + 1] = v; d[i + 2] = v; d[i + 3] = 255
      }
      ctx.putImageData(imageData, 0, 0)
      resolve(canvas.toDataURL())
    }
    img.src = dataUrl
  })

export default function CutFileGenerator() {
  const { t } = useLanguage()
  const translation = t.tools['skarfilsgenerator']
  const ct = t.cutFileGenerator

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [image, setImage] = useState<HTMLImageElement | null>(null)
  const [imageDataUrl, setImageDataUrl] = useState('')
  const [imageRect, setImageRect] = useState<ImageRect>({ x: 0, y: 0, w: 0, h: 0 })
  const [tool, setTool] = useState<Tool>('rect')
  const [shapes, setShapes] = useState<Shape[]>([])
  const [drawing, setDrawing] = useState(false)
  const [drawStart, setDrawStart] = useState({ x: 0, y: 0 })
  const [currentShape, setCurrentShape] = useState<Shape | null>(null)
  const [includeBackground, setIncludeBackground] = useState(false)
  const strokeWidth = 2

  const getCanvasCoords = useCallback((clientX: number, clientY: number) => {
    const canvas = canvasRef.current
    if (!canvas) return { x: 0, y: 0 }
    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY,
    }
  }, [])

  const fitImageToCanvas = useCallback((img: HTMLImageElement, canvasW: number, canvasH: number): ImageRect => {
    const maxW = canvasW * 0.55
    const maxH = canvasH * 0.55
    const scale = Math.min(maxW / img.width, maxH / img.height, 1)
    const w = img.width * scale
    const h = img.height * scale
    return {
      x: (canvasW - w) / 2,
      y: (canvasH - h) / 2,
      w,
      h,
    }
  }, [])

  const redrawCanvas = useCallback((img: HTMLImageElement, imgRect: ImageRect, allShapes: Shape[], active: Shape | null, sw: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    ctx.fillStyle = '#e5e7eb'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(img, imgRect.x, imgRect.y, imgRect.w, imgRect.h)

    const drawShape = (shape: Shape) => {
      ctx.strokeStyle = '#ff0000'
      ctx.lineWidth = sw
      ctx.fillStyle = 'transparent'
      ctx.beginPath()
      if (shape.type === 'rect') {
        if (shape.rx > 0) {
          ctx.roundRect(shape.x, shape.y, shape.w, shape.h, shape.rx)
        } else {
          ctx.rect(shape.x, shape.y, shape.w, shape.h)
        }
      } else if (shape.type === 'circle') {
        ctx.ellipse(shape.cx, shape.cy, Math.abs(shape.rx), Math.abs(shape.ry), 0, 0, Math.PI * 2)
      } else if (shape.type === 'freehand' && shape.points.length > 1) {
        ctx.moveTo(shape.points[0].x, shape.points[0].y)
        for (let i = 1; i < shape.points.length; i++) {
          ctx.lineTo(shape.points[i].x, shape.points[i].y)
        }
      }
      ctx.stroke()
    }

    for (const shape of allShapes) drawShape(shape)
    if (active) drawShape(active)
  }, [])

  const setupCanvas = useCallback((img: HTMLImageElement) => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return
    const size = container.clientWidth
    canvas.width = size
    canvas.height = size
    const rect = fitImageToCanvas(img, size, size)
    setImageRect(rect)
  }, [fitImageToCanvas])

  useLayoutEffect(() => {
    if (image) setupCanvas(image)
  }, [image, setupCanvas])

  useEffect(() => {
    if (image) redrawCanvas(image, imageRect, shapes, currentShape, strokeWidth)
  }, [image, imageRect, shapes, currentShape, strokeWidth, redrawCanvas])

  const handleImage = (file: File) => {
    const reader = new FileReader()
    reader.onload = () => {
      const dataUrl = reader.result as string
      setImageDataUrl(dataUrl)
      const img = new Image()
      img.onload = () => {
        setImage(img)
        setShapes([])
        setCurrentShape(null)
      }
      img.src = dataUrl
    }
    reader.readAsDataURL(file)
  }

  const handlePointerDown = (clientX: number, clientY: number) => {
    if (!image) return
    const pos = getCanvasCoords(clientX, clientY)
    setDrawing(true)
    setDrawStart(pos)
    if (tool === 'freehand') {
      setCurrentShape({ type: 'freehand', points: [pos] })
    } else if (tool === 'rect') {
      setCurrentShape({ type: 'rect', x: pos.x, y: pos.y, w: 0, h: 0, rx: CORNER_RADIUS })
    } else {
      setCurrentShape({ type: 'circle', cx: pos.x, cy: pos.y, rx: 0, ry: 0 })
    }
  }

  const handlePointerMove = (clientX: number, clientY: number) => {
    if (!drawing || !image) return
    const pos = getCanvasCoords(clientX, clientY)
    if (tool === 'freehand') {
      setCurrentShape((prev) => {
        if (!prev || prev.type !== 'freehand') return prev
        return { ...prev, points: [...prev.points, pos] }
      })
    } else if (tool === 'rect') {
      setCurrentShape({
        type: 'rect',
        x: Math.min(drawStart.x, pos.x),
        y: Math.min(drawStart.y, pos.y),
        w: Math.abs(pos.x - drawStart.x),
        h: Math.abs(pos.y - drawStart.y),
        rx: CORNER_RADIUS,
      })
    } else {
      const rx = Math.abs(pos.x - drawStart.x) / 2
      const ry = Math.abs(pos.y - drawStart.y) / 2
      setCurrentShape({
        type: 'circle',
        cx: (drawStart.x + pos.x) / 2,
        cy: (drawStart.y + pos.y) / 2,
        rx,
        ry,
      })
    }
  }

  const handlePointerUp = () => {
    if (!drawing || !currentShape) {
      setDrawing(false)
      return
    }
    setDrawing(false)

    let valid = false
    if (currentShape.type === 'rect') valid = currentShape.w > 2 && currentShape.h > 2
    else if (currentShape.type === 'circle') valid = currentShape.rx > 2 && currentShape.ry > 2
    else if (currentShape.type === 'freehand') valid = currentShape.points.length > 3

    if (valid) {
      if (currentShape.type === 'freehand' && currentShape.points.length > 100) {
        const step = Math.ceil(currentShape.points.length / 100)
        const simplified = currentShape.points.filter((_, i) => i % step === 0 || i === currentShape.points.length - 1)
        setShapes((prev) => [...prev, { ...currentShape, points: simplified }])
      } else {
        setShapes((prev) => [...prev, currentShape])
      }
    }
    setCurrentShape(null)
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => handlePointerDown(e.clientX, e.clientY)
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => handlePointerMove(e.clientX, e.clientY)
  const handleMouseUp = () => handlePointerUp()

  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    handlePointerDown(e.touches[0].clientX, e.touches[0].clientY)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    handlePointerMove(e.touches[0].clientX, e.touches[0].clientY)
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault()
    handlePointerUp()
  }

  const undo = () => {
    setShapes((prev) => prev.slice(0, -1))
  }

  const clearAll = () => {
    setShapes([])
  }

  const exportSvg = async () => {
    if (!image) return
    const canvas = canvasRef.current
    if (!canvas) return

    let ox: number, oy: number, w: number, h: number

    if (includeBackground) {
      ox = 0
      oy = 0
      w = canvas.width
      h = canvas.height
    } else {
      let minX = imageRect.x
      let minY = imageRect.y
      let maxX = imageRect.x + imageRect.w
      let maxY = imageRect.y + imageRect.h

      for (const shape of shapes) {
        if (shape.type === 'rect') {
          minX = Math.min(minX, shape.x)
          minY = Math.min(minY, shape.y)
          maxX = Math.max(maxX, shape.x + shape.w)
          maxY = Math.max(maxY, shape.y + shape.h)
        } else if (shape.type === 'circle') {
          minX = Math.min(minX, shape.cx - shape.rx)
          minY = Math.min(minY, shape.cy - shape.ry)
          maxX = Math.max(maxX, shape.cx + shape.rx)
          maxY = Math.max(maxY, shape.cy + shape.ry)
        } else if (shape.type === 'freehand') {
          for (const p of shape.points) {
            minX = Math.min(minX, p.x)
            minY = Math.min(minY, p.y)
            maxX = Math.max(maxX, p.x)
            maxY = Math.max(maxY, p.y)
          }
        }
      }

      const pad = strokeWidth
      minX -= pad
      minY -= pad
      maxX += pad
      maxY += pad

      ox = minX
      oy = minY
      w = maxX - minX
      h = maxY - minY
    }

    const finalDataUrl = await binarizeImage(imageDataUrl)

    const shapeSvg = shapes.map((shape) => {
      if (shape.type === 'rect') {
        return `    <rect x="${shape.x - ox}" y="${shape.y - oy}" width="${shape.w}" height="${shape.h}" rx="${shape.rx}" fill="none" stroke="red" stroke-width="${strokeWidth}"/>`
      } else if (shape.type === 'circle') {
        return `    <ellipse cx="${shape.cx - ox}" cy="${shape.cy - oy}" rx="${shape.rx}" ry="${shape.ry}" fill="none" stroke="red" stroke-width="${strokeWidth}"/>`
      } else if (shape.type === 'freehand' && shape.points.length > 1) {
        const d = shape.points.map((p, i) => `${i === 0 ? 'M' : 'L'}${(p.x - ox).toFixed(1)},${(p.y - oy).toFixed(1)}`).join(' ')
        return `    <path d="${d}" fill="none" stroke="red" stroke-width="${strokeWidth}"/>`
      }
      return ''
    }).filter(Boolean).join('\n')

    const imgX = imageRect.x - ox
    const imgY = imageRect.y - oy

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <g>
    <image href="${finalDataUrl}" x="${imgX}" y="${imgY}" width="${imageRect.w}" height="${imageRect.h}"/>
${shapeSvg}
  </g>
</svg>`

    const blob = new Blob([svg], { type: 'image/svg+xml' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = 'cut-file.svg'
    a.click()
  }

  const tools: { id: Tool; icon: typeof Square; label: string }[] = [
    { id: 'rect', icon: Square, label: ct?.rect || 'Rektangel' },
    { id: 'circle', icon: Circle, label: ct?.circle || 'Cirkel' },
    { id: 'freehand', icon: Pencil, label: ct?.freehand || 'Frihand' },
  ]

  return (
    <div className="mx-auto max-w-3xl space-y-6 py-10">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:text-gray-900 dark:hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        {t.backToTools}
      </Link>

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{translation?.name}</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400 hc:text-gray-200">{translation?.description}</p>
        {translation?.hint && (
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500 hc:text-gray-300 italic">{translation.hint}</p>
        )}
      </div>

      {/* Upload */}
      {!image && (
        <div
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f?.type.startsWith('image/')) handleImage(f) }}
          className="cursor-pointer rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-12 text-center transition-colors hover:border-blue-400 dark:hover:border-blue-500"
        >
          <Upload className="mx-auto h-8 w-8 text-gray-400 dark:text-gray-500 hc:text-white" />
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 hc:text-gray-200">
            {ct?.upload || 'Klicka eller dra hit en bild'}
          </p>
        </div>
      )}
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImage(f) }} />

      {image && (
        <>
          {/* Toolbar */}
          <div className="flex flex-wrap items-center gap-2 rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-3">
            {tools.map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => setTool(id)}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  tool === id
                    ? 'bg-blue-600 text-white hc:bg-white hc:text-black'
                    : 'bg-white dark:bg-gray-700 hc:bg-gray-900 text-gray-700 dark:text-gray-300 hc:text-white border border-gray-200 dark:border-gray-600 hc:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}

            <div className="mx-1 h-6 w-px bg-gray-300 dark:bg-gray-600" />

            <button
              onClick={undo}
              disabled={shapes.length === 0}
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium bg-white dark:bg-gray-700 hc:bg-gray-900 text-gray-700 dark:text-gray-300 hc:text-white border border-gray-200 dark:border-gray-600 hc:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors disabled:opacity-40"
            >
              <Undo2 className="h-4 w-4" />
              {ct?.undo || 'Ångra'}
            </button>
            <button
              onClick={clearAll}
              disabled={shapes.length === 0}
              className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium bg-white dark:bg-gray-700 hc:bg-gray-900 text-gray-700 dark:text-gray-300 hc:text-white border border-gray-200 dark:border-gray-600 hc:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors disabled:opacity-40"
            >
              <Trash2 className="h-4 w-4" />
              {ct?.clearAll || 'Rensa alla'}
            </button>
          </div>

          {/* Canvas */}
          <div ref={containerRef} className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white">
            <canvas
              ref={canvasRef}
              className="mx-auto block max-w-full cursor-crosshair"
              style={{ touchAction: 'none' }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            />
          </div>

          {/* Export */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4 space-y-4">
            <button
              type="button"
              onClick={() => setIncludeBackground((v) => !v)}
              className={`w-full flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors border ${
                includeBackground
                  ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300'
                  : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hc:text-white hc:bg-gray-900 hc:border-gray-500'
              }`}
            >
              <span>{ct?.includeBackground || 'Inkludera bakgrund'}</span>
              <span className={`inline-flex items-center justify-center h-5 w-5 rounded text-xs font-bold ${
                includeBackground
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-600 text-gray-400 dark:text-gray-500'
              }`}>
                {includeBackground ? '✓' : ''}
              </span>
            </button>
            <button
              onClick={exportSvg}
              disabled={shapes.length === 0}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-green-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-green-700 disabled:opacity-40"
            >
              <Download className="h-4 w-4" />
              {ct?.exportSvg || 'Exportera SVG'}
            </button>
          </div>
        </>
      )}
    </div>
  )
}
