import { useState, useRef } from 'react'
import { Upload, Download } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

function formatSize(bytes: number): string {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
}

export default function ImageCompressor() {
  const { t } = useLanguage()
  const translation = t.tools['bildkomprimering']
  const ic = t.imageCompressor

  const fileRef = useRef<HTMLInputElement>(null)
  const [original, setOriginal] = useState<{ url: string; size: number; width: number; height: number; name: string } | null>(null)
  const [compressed, setCompressed] = useState<{ url: string; size: number; width: number; height: number } | null>(null)
  const [quality, setQuality] = useState(0.7)
  const [maxWidth, setMaxWidth] = useState(0)
  const [processing, setProcessing] = useState(false)

  const loadImage = (file: File) => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      setOriginal({ url, size: file.size, width: img.width, height: img.height, name: file.name })
      setCompressed(null)
      setMaxWidth(0)
    }
    img.src = url
  }

  const compress = async () => {
    if (!original) return
    setProcessing(true)

    const img = new Image()
    img.src = original.url
    await new Promise((r) => { img.onload = r })

    let w = img.width
    let h = img.height
    if (maxWidth > 0 && w > maxWidth) {
      h = Math.round(h * (maxWidth / w))
      w = maxWidth
    }

    const canvas = document.createElement('canvas')
    canvas.width = w
    canvas.height = h
    const ctx = canvas.getContext('2d')!
    ctx.drawImage(img, 0, 0, w, h)

    canvas.toBlob(
      (blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob)
          setCompressed({ url, size: blob.size, width: w, height: h })
        }
        setProcessing(false)
      },
      'image/jpeg',
      quality
    )
  }

  const download = () => {
    if (!compressed || !original) return
    const ext = original.name.replace(/\.[^.]+$/, '')
    const link = document.createElement('a')
    link.download = `${ext}-compressed.jpg`
    link.href = compressed.url
    link.click()
  }

  const savings = original && compressed
    ? Math.round((1 - compressed.size / original.size) * 100)
    : 0

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

      {/* Upload */}
      <div
        onClick={() => fileRef.current?.click()}
        className="cursor-pointer rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-8 text-center transition-colors hover:border-blue-400 dark:hover:border-blue-500"
      >
        <Upload className="mx-auto h-8 w-8 text-gray-400 dark:text-gray-500 hc:text-white" />
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 hc:text-gray-200">
          {ic?.upload ?? 'Klicka eller dra hit en bild'}
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
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-gray-900 dark:text-white">
                  {ic?.quality ?? 'Kvalitet'}: {Math.round(quality * 100)}%
                </label>
              </div>
              <input
                type="range"
                min={0.1}
                max={1}
                step={0.05}
                value={quality}
                onChange={(e) => setQuality(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
              <div className="flex justify-between text-xs text-gray-400 dark:text-gray-500">
                <span>{ic?.smaller ?? 'Mindre fil'}</span>
                <span>{ic?.better ?? 'Bättre kvalitet'}</span>
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-900 dark:text-white">
                {ic?.maxWidth ?? 'Max bredd'} (px)
              </label>
              <input
                type="number"
                value={maxWidth || ''}
                onChange={(e) => setMaxWidth(Number(e.target.value))}
                placeholder={`${original.width} (${ic?.original ?? 'original'})`}
                className="w-full rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-4 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <button
              onClick={compress}
              disabled={processing}
              className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
            >
              {processing ? (ic?.processing ?? 'Komprimerar...') : (ic?.compress ?? 'Komprimera')}
            </button>
          </div>

          {/* Comparison */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                {ic?.original ?? 'Original'}
              </label>
              <img src={original.url} alt="Original" className="w-full rounded-lg" />
              <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 space-y-0.5">
                <p>{original.width} x {original.height}px</p>
                <p>{formatSize(original.size)}</p>
              </div>
            </div>

            {compressed && (
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-900 dark:text-white">
                    {ic?.compressed ?? 'Komprimerad'}
                  </label>
                  <span className={`text-xs font-bold ${savings > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {savings > 0 ? `-${savings}%` : `+${Math.abs(savings)}%`}
                  </span>
                </div>
                <img src={compressed.url} alt="Compressed" className="w-full rounded-lg" />
                <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 space-y-0.5">
                  <p>{compressed.width} x {compressed.height}px</p>
                  <p>{formatSize(compressed.size)}</p>
                </div>
                <button
                  onClick={download}
                  className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  <Download className="h-4 w-4" />
                  {ic?.download ?? 'Ladda ner'}
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
