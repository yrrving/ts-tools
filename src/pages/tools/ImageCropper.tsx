import { useState, useRef, useCallback } from 'react'
import { Download } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

interface CropArea {
  x: number
  y: number
  w: number
  h: number
}

const RATIOS = [
  { label: 'Fri', value: 0 },
  { label: '1:1', value: 1 },
  { label: '4:3', value: 4 / 3 },
  { label: '16:9', value: 16 / 9 },
  { label: '3:2', value: 3 / 2 },
]

export default function ImageCropper() {
  const { t } = useLanguage()
  const translation = t.tools['bildbeskärare']
  const ct = t.imageCropper

  const [image, setImage] = useState<HTMLImageElement | null>(null)
  const [crop, setCrop] = useState<CropArea>({ x: 0, y: 0, w: 100, h: 100 })
  const [ratio, setRatio] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [result, setResult] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleImage = (file: File) => {
    const img = new Image()
    img.onload = () => {
      setImage(img)
      const w = 80, h = ratio > 0 ? 80 / ratio : 80
      setCrop({ x: 10, y: 10, w: Math.min(w, 80), h: Math.min(h, 80) })
      setResult('')
    }
    img.src = URL.createObjectURL(file)
  }

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setDragging(true)
    setDragStart({ x, y })
    const w = ratio > 0 ? 0 : 0
    setCrop({ x, y, w, h: w })
  }, [ratio])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragging || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100))
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100))
    let w = x - dragStart.x
    let h = y - dragStart.y
    if (ratio > 0) {
      h = w / ratio
    }
    setCrop({
      x: w >= 0 ? dragStart.x : dragStart.x + w,
      y: h >= 0 ? dragStart.y : dragStart.y + h,
      w: Math.abs(w),
      h: Math.abs(h),
    })
  }, [dragging, dragStart, ratio])

  const handleMouseUp = useCallback(() => {
    setDragging(false)
  }, [])

  const doCrop = () => {
    if (!image || !canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')!
    const sx = (crop.x / 100) * image.width
    const sy = (crop.y / 100) * image.height
    const sw = (crop.w / 100) * image.width
    const sh = (crop.h / 100) * image.height
    canvas.width = Math.round(sw)
    canvas.height = Math.round(sh)
    ctx.drawImage(image, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height)
    setResult(canvas.toDataURL('image/png'))
  }

  const download = () => {
    if (!result) return
    const a = document.createElement('a')
    a.href = result
    a.download = 'cropped.png'
    a.click()
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6 py-10">
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
            <p className="text-gray-600 dark:text-gray-400 hc:text-gray-300">{ct?.upload || 'Klicka eller dra hit en bild'}</p>
          </div>
        ) : (
          <>
            {/* Aspect ratio buttons */}
            <div className="flex gap-2 flex-wrap">
              {RATIOS.map((r) => (
                <button
                  key={r.label}
                  onClick={() => setRatio(r.value)}
                  className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                    ratio === r.value
                      ? 'bg-blue-600 text-white hc:bg-white hc:text-black'
                      : 'bg-gray-100 dark:bg-gray-600 hc:bg-gray-900 text-gray-600 dark:text-gray-400 hc:text-gray-400 hc:border hc:border-gray-600'
                  }`}
                >
                  {r.label === 'Fri' ? (ct?.free || 'Fri') : r.label}
                </button>
              ))}
            </div>

            {/* Image with crop overlay */}
            <div
              ref={containerRef}
              className="relative select-none cursor-crosshair overflow-hidden rounded-lg"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <img src={image.src} className="w-full" alt="" draggable={false} />
              {/* Dim overlay */}
              <div className="absolute inset-0 bg-black/50 pointer-events-none" />
              {/* Crop area (clear) */}
              {crop.w > 0 && crop.h > 0 && (
                <div
                  className="absolute border-2 border-white pointer-events-none"
                  style={{
                    left: `${crop.x}%`,
                    top: `${crop.y}%`,
                    width: `${crop.w}%`,
                    height: `${crop.h}%`,
                    boxShadow: '0 0 0 9999px rgba(0,0,0,0.5)',
                    background: 'transparent',
                  }}
                />
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button
                onClick={doCrop}
                disabled={crop.w < 1 || crop.h < 1}
                className="flex-1 rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
              >
                {ct?.crop || 'Beskär'}
              </button>
              <button
                onClick={() => { setImage(null); setResult('') }}
                className="rounded-lg bg-gray-200 dark:bg-gray-600 hc:bg-gray-900 hc:border hc:border-white px-4 py-2.5 text-gray-700 dark:text-gray-300 hc:text-white"
              >
                {ct?.newImage || 'Ny bild'}
              </button>
            </div>
          </>
        )}

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImage(f) }}
        />

        {/* Result */}
        {result && (
          <div className="space-y-2">
            <img src={result} className="w-full rounded-lg" alt="" />
            <button
              onClick={download}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-green-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-green-700"
            >
              <Download className="h-4 w-4" />
              {ct?.download || 'Ladda ner'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
