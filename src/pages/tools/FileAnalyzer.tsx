import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Upload } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

function formatSize(bytes: number): string {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  if (bytes < 1024 * 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
  return (bytes / (1024 * 1024 * 1024)).toFixed(2) + ' GB'
}

interface FileInfo {
  name: string
  size: number
  type: string
  lastModified: number
  extension: string
  isImage: boolean
  imageWidth?: number
  imageHeight?: number
  preview?: string
  textPreview?: string
}

export default function FileAnalyzer() {
  const { t } = useLanguage()
  const translation = t.tools['filanalys']
  const fa = t.fileAnalyzer

  const fileRef = useRef<HTMLInputElement>(null)
  const [info, setInfo] = useState<FileInfo | null>(null)

  const analyzeFile = async (file: File) => {
    const ext = file.name.split('.').pop()?.toLowerCase() || ''
    const isImage = file.type.startsWith('image/')
    const isText = file.type.startsWith('text/') || ['json', 'xml', 'csv', 'md', 'js', 'ts', 'html', 'css', 'yml', 'yaml', 'toml', 'svg'].includes(ext)

    const result: FileInfo = {
      name: file.name,
      size: file.size,
      type: file.type || 'unknown',
      lastModified: file.lastModified,
      extension: ext,
      isImage,
    }

    if (isImage) {
      const url = URL.createObjectURL(file)
      const img = new Image()
      await new Promise<void>((resolve) => {
        img.onload = () => {
          result.imageWidth = img.width
          result.imageHeight = img.height
          result.preview = url
          resolve()
        }
        img.onerror = () => resolve()
        img.src = url
      })
    }

    if (isText && file.size < 500_000) {
      try {
        const text = await file.text()
        result.textPreview = text.slice(0, 2000)
      } catch { /* ignore */ }
    }

    setInfo(result)
  }

  const rows: { label: string; value: string }[] = info ? [
    { label: fa?.fileName ?? 'Filnamn', value: info.name },
    { label: fa?.fileSize ?? 'Storlek', value: `${formatSize(info.size)} (${info.size.toLocaleString()} bytes)` },
    { label: fa?.fileType ?? 'MIME-typ', value: info.type },
    { label: fa?.extension ?? 'Filändelse', value: info.extension ? `.${info.extension}` : '—' },
    { label: fa?.modified ?? 'Senast ändrad', value: new Date(info.lastModified).toLocaleString() },
    ...(info.imageWidth ? [{ label: fa?.dimensions ?? 'Dimensioner', value: `${info.imageWidth} × ${info.imageHeight}px` }] : []),
  ] : []

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

      {/* Upload */}
      <div
        onClick={() => fileRef.current?.click()}
        className="cursor-pointer rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-8 text-center transition-colors hover:border-blue-400 dark:hover:border-blue-500"
      >
        <Upload className="mx-auto h-8 w-8 text-gray-400 dark:text-gray-500 hc:text-white" />
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 hc:text-gray-200">
          {fa?.upload ?? 'Klicka eller dra hit en fil'}
        </p>
        <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">{fa?.anyFile ?? 'Alla filtyper stöds'}</p>
        <input
          ref={fileRef}
          type="file"
          className="hidden"
          onChange={(e) => e.target.files?.[0] && analyzeFile(e.target.files[0])}
        />
      </div>

      {info && (
        <>
          {/* Info table */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black overflow-hidden">
            {rows.map((row, i) => (
              <div
                key={row.label}
                className={`flex items-center justify-between px-4 py-3 ${
                  i > 0 ? 'border-t border-gray-200 dark:border-gray-700 hc:border-gray-600' : ''
                }`}
              >
                <span className="text-sm text-gray-500 dark:text-gray-400 hc:text-gray-300">{row.label}</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white font-mono">{row.value}</span>
              </div>
            ))}
          </div>

          {/* Image preview */}
          {info.preview && (
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                {fa?.preview ?? 'Förhandsgranskning'}
              </label>
              <img src={info.preview} alt={info.name} className="max-h-64 rounded-lg" />
            </div>
          )}

          {/* Text preview */}
          {info.textPreview && (
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                {fa?.contentPreview ?? 'Innehåll (förhandsgranskning)'}
              </label>
              <pre className="max-h-64 overflow-auto rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-4 py-3 font-mono text-xs text-gray-900 dark:text-white whitespace-pre-wrap">
                {info.textPreview}
                {info.textPreview.length >= 2000 && '\n...'}
              </pre>
            </div>
          )}
        </>
      )}
    </div>
  )
}
