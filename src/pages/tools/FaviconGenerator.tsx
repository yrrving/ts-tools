import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Download } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

const SIZES = [16, 32, 48, 64, 128, 180, 192, 512]

export default function FaviconGenerator() {
  const { t } = useLanguage()
  const translation = t.tools['favicon-generator']
  const ft = t.faviconGenerator

  const [image, setImage] = useState<HTMLImageElement | null>(null)
  const [previews, setPreviews] = useState<{ size: number; dataUrl: string }[]>([])
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleImage = (file: File) => {
    const img = new Image()
    img.onload = () => {
      setImage(img)
      generatePreviews(img)
    }
    img.src = URL.createObjectURL(file)
  }

  const generatePreviews = (img: HTMLImageElement) => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    const results: { size: number; dataUrl: string }[] = []
    for (const size of SIZES) {
      canvas.width = size
      canvas.height = size
      ctx.clearRect(0, 0, size, size)
      // Draw image covering the square (crop to center)
      const srcAspect = img.width / img.height
      let sx = 0, sy = 0, sw = img.width, sh = img.height
      if (srcAspect > 1) {
        sw = img.height
        sx = (img.width - sw) / 2
      } else {
        sh = img.width
        sy = (img.height - sh) / 2
      }
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, size, size)
      results.push({ size, dataUrl: canvas.toDataURL('image/png') })
    }
    setPreviews(results)
  }

  const downloadSize = (size: number, dataUrl: string) => {
    const a = document.createElement('a')
    a.href = dataUrl
    a.download = `favicon-${size}x${size}.png`
    a.click()
  }

  const downloadIco = () => {
    // Download the 32x32 as the main favicon.ico (actually png)
    const p = previews.find((p) => p.size === 32)
    if (!p) return
    const a = document.createElement('a')
    a.href = p.dataUrl
    a.download = 'favicon.ico'
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
      </div>

      <canvas ref={canvasRef} className="hidden" />

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4 space-y-4">
        {/* Upload */}
        <div
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f?.type.startsWith('image/')) handleImage(f) }}
          className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 hc:border-white p-8 text-center cursor-pointer transition-colors hover:border-blue-400 dark:hover:border-blue-500"
        >
          {image ? (
            <img src={image.src} className="h-24 w-24 rounded-lg object-cover" alt="" />
          ) : (
            <p className="text-gray-600 dark:text-gray-400 hc:text-gray-300">
              {ft?.upload || 'Klicka eller dra hit en bild'}
            </p>
          )}
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImage(f) }}
          />
        </div>

        {/* Previews */}
        {previews.length > 0 && (
          <div className="space-y-3">
            <button
              onClick={downloadIco}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-blue-700"
            >
              <Download className="h-4 w-4" />
              {ft?.downloadIco || 'Ladda ner favicon.ico'}
            </button>

            <div className="grid grid-cols-4 gap-3">
              {previews.map((p) => (
                <button
                  key={p.size}
                  onClick={() => downloadSize(p.size, p.dataUrl)}
                  className="flex flex-col items-center gap-1 rounded-lg bg-gray-100 dark:bg-gray-800 hc:bg-gray-900 hc:border hc:border-gray-700 p-3 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <img
                    src={p.dataUrl}
                    className="rounded"
                    style={{ width: Math.min(p.size, 64), height: Math.min(p.size, 64), imageRendering: p.size <= 32 ? 'pixelated' : 'auto' }}
                    alt=""
                  />
                  <span className="text-xs font-mono text-gray-600 dark:text-gray-400 hc:text-gray-300">{p.size}×{p.size}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
