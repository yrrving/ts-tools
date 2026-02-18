import { useState, useRef, useCallback } from 'react'
import { useLanguage } from '../../context/LanguageContext'

interface Point { x: number; y: number }

export default function PixelCounter() {
  const { t } = useLanguage()
  const translation = t.tools['pixelraknare']
  const pt = t.pixelCounter

  const [image, setImage] = useState<HTMLImageElement | null>(null)
  const [imgSize, setImgSize] = useState({ w: 0, h: 0 })
  const [color, setColor] = useState('')
  const [pos, setPos] = useState<Point | null>(null)
  const [measuring, setMeasuring] = useState(false)
  const [startPoint, setStartPoint] = useState<Point | null>(null)
  const [endPoint, setEndPoint] = useState<Point | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleImage = (file: File) => {
    const img = new Image()
    img.onload = () => {
      setImage(img)
      setImgSize({ w: img.width, h: img.height })
      const canvas = canvasRef.current!
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')!
      ctx.drawImage(img, 0, 0)
    }
    img.src = URL.createObjectURL(file)
  }

  const getImageCoords = useCallback((e: React.MouseEvent): Point | null => {
    if (!containerRef.current || !image) return null
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.round(((e.clientX - rect.left) / rect.width) * image.width)
    const y = Math.round(((e.clientY - rect.top) / rect.height) * image.height)
    return { x: Math.max(0, Math.min(image.width - 1, x)), y: Math.max(0, Math.min(image.height - 1, y)) }
  }, [image])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const coords = getImageCoords(e)
    if (!coords || !canvasRef.current) return
    setPos(coords)
    const ctx = canvasRef.current.getContext('2d')!
    const pixel = ctx.getImageData(coords.x, coords.y, 1, 1).data
    const hex = `#${pixel[0].toString(16).padStart(2, '0')}${pixel[1].toString(16).padStart(2, '0')}${pixel[2].toString(16).padStart(2, '0')}`
    setColor(hex)
    if (measuring) setEndPoint(coords)
  }, [getImageCoords, measuring])

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    const coords = getImageCoords(e)
    if (!coords) return
    setMeasuring(true)
    setStartPoint(coords)
    setEndPoint(coords)
  }, [getImageCoords])

  const handleMouseUp = useCallback(() => {
    setMeasuring(false)
  }, [])

  const distance = startPoint && endPoint
    ? Math.round(Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2)))
    : null

  return (
    <div className="mx-auto max-w-3xl space-y-6 py-10">
      <BackLink />

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{translation?.name}</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400 hc:text-gray-200">{translation?.description}</p>
      </div>

      <canvas ref={canvasRef} className="hidden" />

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4 space-y-4">
        {!image ? (
          <div
            onClick={() => inputRef.current?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f?.type.startsWith('image/')) handleImage(f) }}
            className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 hc:border-white p-12 text-center cursor-pointer transition-colors hover:border-blue-400"
          >
            <p className="text-gray-600 dark:text-gray-400 hc:text-gray-300">{pt?.upload || 'Klicka eller dra hit en bild'}</p>
          </div>
        ) : (
          <>
            {/* Info bar */}
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="text-gray-600 dark:text-gray-400 hc:text-gray-300">
                {pt?.dimensions || 'Dimensioner'}: <span className="font-medium text-gray-900 dark:text-white">{imgSize.w} × {imgSize.h}px</span>
              </span>
              <span className="text-gray-600 dark:text-gray-400 hc:text-gray-300">
                {pt?.totalPixels || 'Totalt'}: <span className="font-medium text-gray-900 dark:text-white">{(imgSize.w * imgSize.h).toLocaleString()}px</span>
              </span>
              {pos && (
                <span className="text-gray-600 dark:text-gray-400 hc:text-gray-300">
                  XY: <span className="font-mono font-medium text-gray-900 dark:text-white">{pos.x}, {pos.y}</span>
                </span>
              )}
              {color && (
                <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hc:text-gray-300">
                  <span className="h-4 w-4 rounded border border-gray-300 dark:border-gray-600" style={{ background: color }} />
                  <span className="font-mono font-medium text-gray-900 dark:text-white">{color}</span>
                </span>
              )}
              {distance !== null && distance > 0 && (
                <span className="text-gray-600 dark:text-gray-400 hc:text-gray-300">
                  {pt?.distance || 'Avstånd'}: <span className="font-medium text-gray-900 dark:text-white">{distance}px</span>
                </span>
              )}
            </div>

            {/* Image */}
            <div
              ref={containerRef}
              className="relative cursor-crosshair rounded-lg overflow-hidden"
              onMouseMove={handleMouseMove}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <img src={image.src} className="w-full" alt="" draggable={false} />
              {/* Measurement line overlay */}
              {startPoint && endPoint && (startPoint.x !== endPoint.x || startPoint.y !== endPoint.y) && (
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <line
                    x1={`${(startPoint.x / imgSize.w) * 100}%`}
                    y1={`${(startPoint.y / imgSize.h) * 100}%`}
                    x2={`${(endPoint.x / imgSize.w) * 100}%`}
                    y2={`${(endPoint.y / imgSize.h) * 100}%`}
                    stroke="red"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                </svg>
              )}
            </div>

            <button
              onClick={() => { setImage(null); setStartPoint(null); setEndPoint(null) }}
              className="rounded-lg bg-gray-200 dark:bg-gray-600 hc:bg-gray-900 hc:border hc:border-white px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hc:text-white"
            >
              {pt?.newImage || 'Ny bild'}
            </button>
          </>
        )}

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImage(f) }}
        />
      </div>
    </div>
  )
}
