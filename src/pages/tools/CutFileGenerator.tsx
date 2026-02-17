import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Download } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

export default function CutFileGenerator() {
  const { t } = useLanguage()
  const translation = t.tools['skarfilsgenerator']
  const ct = t.cutFileGenerator

  const [image, setImage] = useState<HTMLImageElement | null>(null)
  const [threshold, setThreshold] = useState(128)
  const [offset, setOffset] = useState(2)
  const [svgResult, setSvgResult] = useState('')
  const [previewUrl, setPreviewUrl] = useState('')
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleImage = (file: File) => {
    const img = new Image()
    img.onload = () => {
      setImage(img)
      setSvgResult('')
      setPreviewUrl('')
    }
    img.src = URL.createObjectURL(file)
  }

  const generate = () => {
    if (!image || !canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')!
    const w = image.width
    const h = image.height
    canvas.width = w
    canvas.height = h
    ctx.drawImage(image, 0, 0)
    const imageData = ctx.getImageData(0, 0, w, h)
    const data = imageData.data

    // Create binary mask based on alpha and brightness
    const mask: boolean[][] = []
    for (let y = 0; y < h; y++) {
      mask[y] = []
      for (let x = 0; x < w; x++) {
        const i = (y * w + x) * 4
        const alpha = data[i + 3]
        const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3
        mask[y][x] = alpha > 50 && brightness < threshold
      }
    }

    // Find contour points (simple edge detection)
    const points: { x: number; y: number }[] = []
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        if (!mask[y][x]) continue
        // Check if edge pixel
        const isEdge = x === 0 || x === w - 1 || y === 0 || y === h - 1 ||
          !mask[y - 1]?.[x] || !mask[y + 1]?.[x] || !mask[y][x - 1] || !mask[y][x + 1]
        if (isEdge) {
          points.push({ x, y })
        }
      }
    }

    if (points.length < 3) {
      setSvgResult('')
      return
    }

    // Simplify: sample every Nth point
    const step = Math.max(1, Math.floor(points.length / 500))
    const simplified = points.filter((_, i) => i % step === 0)

    // Sort points by angle from center for a rough contour
    const cx = simplified.reduce((s, p) => s + p.x, 0) / simplified.length
    const cy = simplified.reduce((s, p) => s + p.y, 0) / simplified.length
    simplified.sort((a, b) => Math.atan2(a.y - cy, a.x - cx) - Math.atan2(b.y - cy, b.x - cx))

    // Apply offset
    const offsetPoints = simplified.map((p) => {
      const dx = p.x - cx
      const dy = p.y - cy
      const dist = Math.sqrt(dx * dx + dy * dy)
      const scale = (dist + offset) / dist
      return { x: cx + dx * scale, y: cy + dy * scale }
    })

    // Build SVG path
    const pathData = offsetPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ') + ' Z'

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
  <path d="${pathData}" fill="none" stroke="red" stroke-width="1"/>
</svg>`

    setSvgResult(svg)
    setPreviewUrl(`data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`)
  }

  const downloadSvg = () => {
    const blob = new Blob([svgResult], { type: 'image/svg+xml' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = 'cut-file.svg'
    a.click()
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6 py-10">
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

      <canvas ref={canvasRef} className="hidden" />

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4 space-y-4">
        {/* Upload */}
        <div
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f?.type.startsWith('image/')) handleImage(f) }}
          className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 hc:border-white p-8 text-center cursor-pointer transition-colors hover:border-blue-400"
        >
          {image ? (
            <img src={image.src} className="max-h-48 rounded-lg" alt="" />
          ) : (
            <p className="text-gray-600 dark:text-gray-400 hc:text-gray-300">{ct?.upload || 'Klicka eller dra hit en bild'}</p>
          )}
        </div>
        <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImage(f) }} />

        {image && (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 hc:text-white mb-1">{ct?.threshold || 'Tröskel'}</label>
                <input type="range" min={0} max={255} value={threshold} onChange={(e) => setThreshold(Number(e.target.value))} className="w-full accent-blue-500" />
                <div className="text-xs text-gray-500 text-right">{threshold}</div>
              </div>
              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 hc:text-white mb-1">{ct?.offset || 'Offset (px)'}</label>
                <input type="range" min={0} max={20} value={offset} onChange={(e) => setOffset(Number(e.target.value))} className="w-full accent-blue-500" />
                <div className="text-xs text-gray-500 text-right">{offset}px</div>
              </div>
            </div>

            <button
              onClick={generate}
              className="w-full rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-blue-700"
            >
              {ct?.generate || 'Generera skärfil'}
            </button>
          </>
        )}

        {previewUrl && (
          <div className="space-y-2">
            <div className="rounded-lg bg-white dark:bg-gray-800 hc:bg-gray-900 p-4 flex justify-center">
              <img src={previewUrl} className="max-h-64" alt="" />
            </div>
            <button
              onClick={downloadSvg}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-green-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-green-700"
            >
              <Download className="h-4 w-4" />
              {ct?.downloadSvg || 'Ladda ner SVG'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
