import { useState, useRef, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Download, Square, Circle, Pencil, Undo2, Trash2, Upload } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

type Shape =
  | { type: 'rect'; x: number; y: number; w: number; h: number }
  | { type: 'circle'; cx: number; cy: number; rx: number; ry: number }
  | { type: 'freehand'; points: { x: number; y: number }[] }

type Tool = 'rect' | 'circle' | 'freehand'

const CANVAS_PADDING = 60

export default function CutFileGenerator() {
  const { t } = useLanguage()
  const translation = t.tools['skarfilsgenerator']
  const ct = t.cutFileGenerator

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [image, setImage] = useState<HTMLImageElement | null>(null)
  const [imageDataUrl, setImageDataUrl] = useState('')
  const [tool, setTool] = useState<Tool>('rect')
  const [shapes, setShapes] = useState<Shape[]>([])
  const [drawing, setDrawing] = useState(false)
  const [drawStart, setDrawStart] = useState({ x: 0, y: 0 })
  const [currentShape, setCurrentShape] = useState<Shape | null>(null)
  const [strokeWidth, setStrokeWidth] = useState(2)

  const getCanvasCoords = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return { x: 0, y: 0 }
    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    }
  }, [])

  const redrawCanvas = useCallback((img: HTMLImageElement, allShapes: Shape[], active: Shape | null, sw: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw margin background
    ctx.fillStyle = '#e5e7eb'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw image centered with padding
    ctx.drawImage(img, CANVAS_PADDING, CANVAS_PADDING, img.width, img.height)

    const drawShape = (shape: Shape) => {
      ctx.strokeStyle = '#ff0000'
      ctx.lineWidth = sw
      ctx.fillStyle = 'transparent'
      ctx.beginPath()
      if (shape.type === 'rect') {
        ctx.rect(shape.x, shape.y, shape.w, shape.h)
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

  useEffect(() => {
    if (image) redrawCanvas(image, shapes, currentShape, strokeWidth)
  }, [image, shapes, currentShape, strokeWidth, redrawCanvas])

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
        const canvas = canvasRef.current
        if (canvas) {
          canvas.width = img.width + CANVAS_PADDING * 2
          canvas.height = img.height + CANVAS_PADDING * 2
        }
      }
      img.src = dataUrl
    }
    reader.readAsDataURL(file)
  }

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!image) return
    const pos = getCanvasCoords(e)
    setDrawing(true)
    setDrawStart(pos)

    if (tool === 'freehand') {
      setCurrentShape({ type: 'freehand', points: [pos] })
    } else if (tool === 'rect') {
      setCurrentShape({ type: 'rect', x: pos.x, y: pos.y, w: 0, h: 0 })
    } else {
      setCurrentShape({ type: 'circle', cx: pos.x, cy: pos.y, rx: 0, ry: 0 })
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!drawing || !image) return
    const pos = getCanvasCoords(e)

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

  const handleMouseUp = () => {
    if (!drawing || !currentShape) {
      setDrawing(false)
      return
    }
    setDrawing(false)

    // Only add shape if it has meaningful size
    let valid = false
    if (currentShape.type === 'rect') valid = currentShape.w > 2 && currentShape.h > 2
    else if (currentShape.type === 'circle') valid = currentShape.rx > 2 && currentShape.ry > 2
    else if (currentShape.type === 'freehand') valid = currentShape.points.length > 3

    if (valid) {
      // Simplify freehand paths
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

  const undo = () => {
    setShapes((prev) => prev.slice(0, -1))
  }

  const clearAll = () => {
    setShapes([])
  }

  const exportSvg = () => {
    if (!image) return
    const w = image.width + CANVAS_PADDING * 2
    const h = image.height + CANVAS_PADDING * 2

    const shapeSvg = shapes.map((shape) => {
      if (shape.type === 'rect') {
        return `  <rect x="${shape.x}" y="${shape.y}" width="${shape.w}" height="${shape.h}" fill="none" stroke="red" stroke-width="${strokeWidth}"/>`
      } else if (shape.type === 'circle') {
        return `  <ellipse cx="${shape.cx}" cy="${shape.cy}" rx="${shape.rx}" ry="${shape.ry}" fill="none" stroke="red" stroke-width="${strokeWidth}"/>`
      } else if (shape.type === 'freehand' && shape.points.length > 1) {
        const d = shape.points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
        return `  <path d="${d}" fill="none" stroke="red" stroke-width="${strokeWidth}"/>`
      }
      return ''
    }).filter(Boolean).join('\n')

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <image href="${imageDataUrl}" x="${CANVAS_PADDING}" y="${CANVAS_PADDING}" width="${image.width}" height="${image.height}"/>
${shapeSvg}
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

            <div className="mx-1 h-6 w-px bg-gray-300 dark:bg-gray-600" />

            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500 dark:text-gray-400 hc:text-gray-300 whitespace-nowrap">
                {ct?.strokeWidth || 'Linjebredd'}
              </span>
              <input
                type="range"
                min={1}
                max={5}
                value={strokeWidth}
                onChange={(e) => setStrokeWidth(Number(e.target.value))}
                className="w-20 accent-blue-500"
              />
              <span className="text-xs font-mono text-gray-500 dark:text-gray-400 w-4">{strokeWidth}</span>
            </div>
          </div>

          {/* Canvas */}
          <div className="overflow-auto rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white">
            <canvas
              ref={canvasRef}
              className="mx-auto block max-w-full cursor-crosshair"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            />
          </div>

          {/* Export */}
          <button
            onClick={exportSvg}
            disabled={shapes.length === 0}
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-green-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-green-700 disabled:opacity-40"
          >
            <Download className="h-4 w-4" />
            {ct?.exportSvg || 'Exportera SVG'}
          </button>
        </>
      )}
    </div>
  )
}
