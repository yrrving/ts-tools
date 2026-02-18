import { useState, useRef, useCallback } from 'react'
import { Upload, Download } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

function formatSize(bytes: number): string {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
}

function quantizeColor(r: number, g: number, b: number, levels: number): string {
  const step = 256 / levels
  const qr = Math.floor(r / step) * step
  const qg = Math.floor(g / step) * step
  const qb = Math.floor(b / step) * step
  return `rgb(${qr},${qg},${qb})`
}

function generateSvg(
  canvas: HTMLCanvasElement,
  colors: number,
  threshold: number,
  mode: 'bw' | 'color'
): string {
  const ctx = canvas.getContext('2d')!
  const { width, height } = canvas
  const imageData = ctx.getImageData(0, 0, width, height)
  const data = imageData.data

  const rects: { x: number; y: number; w: number; color: string }[] = []

  for (let y = 0; y < height; y++) {
    let runStart = 0
    let runColor = ''

    for (let x = 0; x <= width; x++) {
      let color = ''
      if (x < width) {
        const i = (y * width + x) * 4
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]
        const a = data[i + 3]

        if (a < 128) {
          color = ''
        } else if (mode === 'bw') {
          const gray = 0.299 * r + 0.587 * g + 0.114 * b
          color = gray < threshold ? '#000000' : ''
        } else {
          color = quantizeColor(r, g, b, colors)
        }
      }

      if (color !== runColor) {
        if (runColor && runStart < x) {
          rects.push({ x: runStart, y, w: x - runStart, color: runColor })
        }
        runStart = x
        runColor = color
      }
    }
  }

  // Merge vertically adjacent rects with same x, w, color
  const merged: { x: number; y: number; w: number; h: number; color: string }[] = []
  const used = new Set<number>()

  for (let i = 0; i < rects.length; i++) {
    if (used.has(i)) continue
    const r = rects[i]
    let h = 1
    for (let j = i + 1; j < rects.length; j++) {
      if (used.has(j)) continue
      const s = rects[j]
      if (s.x === r.x && s.w === r.w && s.color === r.color && s.y === r.y + h) {
        h++
        used.add(j)
      }
    }
    merged.push({ ...r, h })
  }

  const svgRects = merged
    .map((r) => `<rect x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}" fill="${r.color}"/>`)
    .join('\n  ')

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">\n  ${svgRects}\n</svg>`
}

export default function PngToSvg() {
  const { t } = useLanguage()
  const translation = t.tools['png-till-svg']

  const fileRef = useRef<HTMLInputElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [original, setOriginal] = useState<{ url: string; size: number; width: number; height: number; name: string } | null>(null)
  const [svgOutput, setSvgOutput] = useState('')
  const [svgPreviewUrl, setSvgPreviewUrl] = useState('')
  const [mode, setMode] = useState<'bw' | 'color'>('bw')
  const [threshold, setThreshold] = useState(128)
  const [colors, setColors] = useState(4)
  const [processing, setProcessing] = useState(false)
  const [scale, setScale] = useState(1)

  const loadImage = (file: File) => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      setOriginal({ url, size: file.size, width: img.width, height: img.height, name: file.name })
      setSvgOutput('')
      setSvgPreviewUrl('')

      // Auto-scale large images
      const maxDim = 256
      const s = Math.min(1, maxDim / Math.max(img.width, img.height))
      setScale(s)
    }
    img.src = url
  }

  const convert = useCallback(() => {
    if (!original) return
    setProcessing(true)

    const img = new Image()
    img.onload = () => {
      const w = Math.round(img.width * scale)
      const h = Math.round(img.height * scale)

      const canvas = canvasRef.current || document.createElement('canvas')
      canvas.width = w
      canvas.height = h
      const ctx = canvas.getContext('2d')!
      ctx.drawImage(img, 0, 0, w, h)

      const svg = generateSvg(canvas, colors, threshold, mode)
      setSvgOutput(svg)
      const blob = new Blob([svg], { type: 'image/svg+xml' })
      setSvgPreviewUrl(URL.createObjectURL(blob))
      setProcessing(false)
    }
    img.src = original.url
  }, [original, scale, colors, threshold, mode])

  const downloadSvg = () => {
    if (!svgOutput || !original) return
    const blob = new Blob([svgOutput], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.download = original.name.replace(/\.[^.]+$/, '') + '.svg'
    link.href = url
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6 py-10">
      <BackLink />

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{translation?.name}</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400 hc:text-gray-200">{translation?.description}</p>
        {translation?.hint && (
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500 hc:text-gray-300 italic">{translation.hint}</p>
        )}
      </div>

      <canvas ref={canvasRef} className="hidden" />

      {/* Upload */}
      <div
        onClick={() => fileRef.current?.click()}
        className="cursor-pointer rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-8 text-center transition-colors hover:border-blue-400 dark:hover:border-blue-500"
      >
        <Upload className="mx-auto h-8 w-8 text-gray-400 dark:text-gray-500 hc:text-white" />
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 hc:text-gray-200">
          Klicka eller dra hit en PNG-bild
        </p>
        <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">PNG, JPG, WebP</p>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => e.target.files?.[0] && loadImage(e.target.files[0])}
        />
      </div>

      {original && (
        <>
          {/* Settings */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4 space-y-4">
            {/* Mode */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Läge</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setMode('bw')}
                  className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    mode === 'bw'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 text-gray-600 dark:text-gray-400 hc:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  Svartvitt
                </button>
                <button
                  onClick={() => setMode('color')}
                  className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    mode === 'color'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 text-gray-600 dark:text-gray-400 hc:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  Färg
                </button>
              </div>
            </div>

            {/* Threshold (B&W mode) */}
            {mode === 'bw' && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-900 dark:text-white">
                    Tröskel: {threshold}
                  </label>
                </div>
                <input
                  type="range"
                  min={1}
                  max={255}
                  value={threshold}
                  onChange={(e) => setThreshold(Number(e.target.value))}
                  className="w-full accent-blue-600"
                />
                <div className="flex justify-between text-xs text-gray-400 dark:text-gray-500">
                  <span>Mer svart</span>
                  <span>Mer vitt</span>
                </div>
              </div>
            )}

            {/* Colors (color mode) */}
            {mode === 'color' && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-medium text-gray-900 dark:text-white">
                    Antal färger: {colors}
                  </label>
                </div>
                <input
                  type="range"
                  min={2}
                  max={16}
                  value={colors}
                  onChange={(e) => setColors(Number(e.target.value))}
                  className="w-full accent-blue-600"
                />
              </div>
            )}

            {/* Scale */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-gray-900 dark:text-white">
                  Upplösning: {Math.round(original.width * scale)} x {Math.round(original.height * scale)} px
                </label>
              </div>
              <input
                type="range"
                min={0.05}
                max={1}
                step={0.05}
                value={scale}
                onChange={(e) => setScale(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-400 dark:text-gray-500">
                <span>Mindre fil</span>
                <span>Mer detalj</span>
              </div>
            </div>

            <button
              onClick={convert}
              disabled={processing}
              className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
            >
              {processing ? 'Konverterar...' : 'Konvertera till SVG'}
            </button>
          </div>

          {/* Comparison */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Original (PNG)</label>
              <div className="flex items-center justify-center rounded-lg bg-[repeating-conic-gradient(#e5e7eb_0%_25%,#fff_0%_50%)] dark:bg-[repeating-conic-gradient(#374151_0%_25%,#1f2937_0%_50%)] bg-[length:16px_16px] min-h-[120px]">
                <img src={original.url} alt="Original" className="max-w-full max-h-64" />
              </div>
              <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 space-y-0.5">
                <p>{original.width} x {original.height} px</p>
                <p>{formatSize(original.size)}</p>
              </div>
            </div>

            {svgPreviewUrl && (
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-900 dark:text-white">SVG</label>
                  <span className="text-xs font-bold text-green-500">
                    {formatSize(new Blob([svgOutput]).size)}
                  </span>
                </div>
                <div className="flex items-center justify-center rounded-lg bg-[repeating-conic-gradient(#e5e7eb_0%_25%,#fff_0%_50%)] dark:bg-[repeating-conic-gradient(#374151_0%_25%,#1f2937_0%_50%)] bg-[length:16px_16px] min-h-[120px]">
                  <img src={svgPreviewUrl} alt="SVG" className="max-w-full max-h-64" />
                </div>
                <button
                  onClick={downloadSvg}
                  className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  <Download className="h-4 w-4" />
                  Ladda ner SVG
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
