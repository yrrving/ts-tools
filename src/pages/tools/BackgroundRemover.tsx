import { useState, useRef } from 'react'
import { Download } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

export default function BackgroundRemover() {
  const { t } = useLanguage()
  const translation = t.tools['bakgrundsborttagare']
  const bt = t.backgroundRemover

  const [image, setImage] = useState<HTMLImageElement | null>(null)
  const [tolerance, setTolerance] = useState(30)
  const [result, setResult] = useState('')
  const [processing, setProcessing] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleImage = (file: File) => {
    const img = new Image()
    img.onload = () => {
      setImage(img)
      setResult('')
    }
    img.src = URL.createObjectURL(file)
  }

  const removeBackground = () => {
    if (!image || !canvasRef.current) return
    setProcessing(true)

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')!
    const w = image.width
    const h = image.height
    canvas.width = w
    canvas.height = h
    ctx.drawImage(image, 0, 0)
    const imageData = ctx.getImageData(0, 0, w, h)
    const data = imageData.data

    // Sample background color from corners
    const corners = [
      0, // top-left
      (w - 1) * 4, // top-right
      ((h - 1) * w) * 4, // bottom-left
      ((h - 1) * w + (w - 1)) * 4, // bottom-right
    ]

    let bgR = 0, bgG = 0, bgB = 0
    let count = 0
    for (const idx of corners) {
      if (data[idx + 3] > 50) { // only count non-transparent corners
        bgR += data[idx]
        bgG += data[idx + 1]
        bgB += data[idx + 2]
        count++
      }
    }

    if (count === 0) {
      setProcessing(false)
      setResult(canvas.toDataURL('image/png'))
      return
    }

    bgR = Math.round(bgR / count)
    bgG = Math.round(bgG / count)
    bgB = Math.round(bgB / count)

    // Flood fill from edges to remove background
    const visited = new Uint8Array(w * h)
    const queue: number[] = []

    const isBackground = (idx: number) => {
      const r = data[idx * 4]
      const g = data[idx * 4 + 1]
      const b = data[idx * 4 + 2]
      const a = data[idx * 4 + 3]
      if (a < 10) return true
      const diff = Math.abs(r - bgR) + Math.abs(g - bgG) + Math.abs(b - bgB)
      return diff < tolerance * 3
    }

    // Seed edges
    for (let x = 0; x < w; x++) {
      if (isBackground(x)) { queue.push(x); visited[x] = 1 }
      const bottom = (h - 1) * w + x
      if (isBackground(bottom)) { queue.push(bottom); visited[bottom] = 1 }
    }
    for (let y = 1; y < h - 1; y++) {
      const left = y * w
      if (isBackground(left)) { queue.push(left); visited[left] = 1 }
      const right = y * w + (w - 1)
      if (isBackground(right)) { queue.push(right); visited[right] = 1 }
    }

    // BFS flood fill
    while (queue.length > 0) {
      const idx = queue.shift()!
      const x = idx % w
      const y = Math.floor(idx / w)

      const neighbors = [
        y > 0 ? idx - w : -1,
        y < h - 1 ? idx + w : -1,
        x > 0 ? idx - 1 : -1,
        x < w - 1 ? idx + 1 : -1,
      ]

      for (const n of neighbors) {
        if (n < 0 || visited[n]) continue
        if (isBackground(n)) {
          visited[n] = 1
          queue.push(n)
        }
      }
    }

    // Set visited pixels to transparent
    for (let i = 0; i < w * h; i++) {
      if (visited[i]) {
        data[i * 4 + 3] = 0 // set alpha to 0
      }
    }

    // Edge smoothing: semi-transparent border pixels
    for (let i = 0; i < w * h; i++) {
      if (visited[i]) continue
      const x = i % w
      const y = Math.floor(i / w)
      // Check if adjacent to a removed pixel
      const hasRemovedNeighbor =
        (x > 0 && visited[i - 1]) ||
        (x < w - 1 && visited[i + 1]) ||
        (y > 0 && visited[i - w]) ||
        (y < h - 1 && visited[i + w])
      if (hasRemovedNeighbor) {
        data[i * 4 + 3] = Math.round(data[i * 4 + 3] * 0.7)
      }
    }

    ctx.putImageData(imageData, 0, 0)
    setResult(canvas.toDataURL('image/png'))
    setProcessing(false)
  }

  const download = () => {
    if (!result) return
    const a = document.createElement('a')
    a.href = result
    a.download = 'no-background.png'
    a.click()
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6 py-10">
      <BackLink />

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
            <p className="text-gray-600 dark:text-gray-400 hc:text-gray-300">{bt?.upload || 'Klicka eller dra hit en bild'}</p>
          )}
        </div>
        <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImage(f) }} />

        {image && (
          <>
            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300 hc:text-white mb-1">{bt?.tolerance || 'Tolerans'}</label>
              <input type="range" min={5} max={80} value={tolerance} onChange={(e) => setTolerance(Number(e.target.value))} className="w-full accent-blue-500" />
              <div className="text-xs text-gray-500 text-right">{tolerance}</div>
            </div>

            <button
              onClick={removeBackground}
              disabled={processing}
              className="w-full rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
            >
              {processing ? (bt?.processing || 'Bearbetar...') : (bt?.remove || 'Ta bort bakgrund')}
            </button>
          </>
        )}

        {result && (
          <div className="space-y-2">
            <div className="rounded-lg p-4 flex justify-center" style={{ background: 'repeating-conic-gradient(#e5e7eb 0% 25%, white 0% 50%) 50% / 20px 20px' }}>
              <img src={result} className="max-h-64" alt="" />
            </div>
            <button
              onClick={download}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-green-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-green-700"
            >
              <Download className="h-4 w-4" />
              {bt?.download || 'Ladda ner PNG'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
