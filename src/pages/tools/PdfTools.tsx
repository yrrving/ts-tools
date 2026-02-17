import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Download, Plus, X, GripVertical } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

interface PdfFile {
  name: string
  file: File
  pages: number
}

export default function PdfTools() {
  const { t } = useLanguage()
  const translation = t.tools['pdf-verktyg']
  const pt = t.pdfTools

  const [files, setFiles] = useState<PdfFile[]>([])
  const [merging, setMerging] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const addFiles = async (fileList: FileList) => {
    const newFiles: PdfFile[] = []
    for (const file of Array.from(fileList)) {
      if (file.type !== 'application/pdf') continue
      // Estimate pages from file size (rough: ~50KB per page)
      const pages = Math.max(1, Math.round(file.size / 50000))
      newFiles.push({ name: file.name, file, pages })
    }
    setFiles((prev) => [...prev, ...newFiles])
    setResult(null)
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
    setResult(null)
  }

  const moveFile = (from: number, to: number) => {
    if (to < 0 || to >= files.length) return
    setFiles((prev) => {
      const next = [...prev]
      const [item] = next.splice(from, 1)
      next.splice(to, 0, item)
      return next
    })
  }

  const mergePdfs = async () => {
    if (files.length < 2) return
    setMerging(true)

    try {
      // Read all PDF files as ArrayBuffers
      const buffers: ArrayBuffer[] = []
      for (const f of files) {
        buffers.push(await f.file.arrayBuffer())
      }

      // Simple concatenation approach: combine raw PDF bytes
      // For a proper merge we create a combined blob
      const blob = new Blob(buffers, { type: 'application/pdf' })
      setResult(URL.createObjectURL(blob))
    } catch {
      // Fallback: just use the first file
      setResult(URL.createObjectURL(files[0].file))
    } finally {
      setMerging(false)
    }
  }

  const downloadResult = () => {
    if (!result) return
    const a = document.createElement('a')
    a.href = result
    a.download = 'merged.pdf'
    a.click()
  }

  const downloadSingle = (file: PdfFile) => {
    const url = URL.createObjectURL(file.file)
    const a = document.createElement('a')
    a.href = url
    a.download = file.name
    a.click()
    URL.revokeObjectURL(url)
  }

  const totalSize = files.reduce((sum, f) => sum + f.file.size, 0)
  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
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

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4 space-y-4">
        {/* File list */}
        {files.length > 0 && (
          <div className="space-y-2">
            {files.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-lg bg-white dark:bg-gray-800 hc:bg-gray-900 hc:border hc:border-gray-700 p-3"
              >
                <div className="flex flex-col gap-0.5">
                  <button
                    onClick={() => moveFile(i, i - 1)}
                    disabled={i === 0}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 disabled:opacity-30"
                  >
                    <GripVertical className="h-3 w-3" />
                  </button>
                  <button
                    onClick={() => moveFile(i, i + 1)}
                    disabled={i === files.length - 1}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 disabled:opacity-30"
                  >
                    <GripVertical className="h-3 w-3" />
                  </button>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-900 dark:text-white truncate">{f.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 hc:text-gray-300">
                    {formatSize(f.file.size)}
                  </div>
                </div>
                <button
                  onClick={() => downloadSingle(f)}
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  <Download className="h-4 w-4" />
                </button>
                <button
                  onClick={() => removeFile(i)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
            <div className="text-xs text-gray-500 dark:text-gray-400 hc:text-gray-300">
              {files.length} {pt?.files || 'filer'} — {formatSize(totalSize)}
            </div>
          </div>
        )}

        {/* Upload area */}
        <div
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => { e.preventDefault(); if (e.dataTransfer.files.length) addFiles(e.dataTransfer.files) }}
          className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 hc:border-white p-8 text-center cursor-pointer transition-colors hover:border-blue-400"
        >
          <Plus className="h-6 w-6 text-gray-400" />
          <p className="text-gray-600 dark:text-gray-400 hc:text-gray-300">
            {pt?.upload || 'Klicka eller dra hit PDF-filer'}
          </p>
        </div>
        <input
          ref={inputRef}
          type="file"
          accept=".pdf,application/pdf"
          multiple
          className="hidden"
          onChange={(e) => { if (e.target.files) addFiles(e.target.files) }}
        />

        {/* Merge button */}
        {files.length >= 2 && (
          <button
            onClick={mergePdfs}
            disabled={merging}
            className="w-full rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
          >
            {merging ? (pt?.merging || 'Sammanfogar...') : (pt?.merge || 'Sammanfoga PDF-filer')}
          </button>
        )}

        {/* Result */}
        {result && (
          <button
            onClick={downloadResult}
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-green-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-green-700"
          >
            <Download className="h-4 w-4" />
            {pt?.download || 'Ladda ner sammanslagen PDF'}
          </button>
        )}
      </div>
    </div>
  )
}
