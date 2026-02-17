import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Copy, Check } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

export default function OcrTool() {
  const { t } = useLanguage()
  const translation = t.tools['ocr']
  const ot = t.ocrTool

  const [image, setImage] = useState<HTMLImageElement | null>(null)
  const [text, setText] = useState('')
  const [processing, setProcessing] = useState(false)
  const [copied, setCopied] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleImage = (file: File) => {
    const img = new Image()
    img.onload = () => {
      setImage(img)
      setText('')
    }
    img.src = URL.createObjectURL(file)
  }

  const extractText = () => {
    if (!image || !canvasRef.current) return
    setProcessing(true)

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')!
    canvas.width = image.width
    canvas.height = image.height
    ctx.drawImage(image, 0, 0)
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const data = imageData.data

    // Simple brightness-based character recognition
    // Divide image into a grid and map brightness to characters
    const charW = 8
    const charH = 14
    const cols = Math.floor(canvas.width / charW)
    const rows = Math.floor(canvas.height / charH)

    const lines: string[] = []

    for (let row = 0; row < rows; row++) {
      let line = ''
      let trailingSpaces = 0
      for (let col = 0; col < cols; col++) {
        const x0 = col * charW
        const y0 = row * charH
        let totalBrightness = 0
        let darkPixels = 0
        const pixels = charW * charH

        for (let dy = 0; dy < charH; dy++) {
          for (let dx = 0; dx < charW; dx++) {
            const px = x0 + dx
            const py = y0 + dy
            if (px >= canvas.width || py >= canvas.height) continue
            const i = (py * canvas.width + px) * 4
            const brightness = (data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114)
            totalBrightness += brightness
            if (brightness < 128) darkPixels++
          }
        }

        const avgBrightness = totalBrightness / pixels
        const density = darkPixels / pixels

        // Map density to rough characters
        if (density < 0.02) {
          line += ' '
          trailingSpaces++
        } else if (density < 0.08) {
          line += '.'
          trailingSpaces = 0
        } else if (density < 0.15) {
          line += ':'
          trailingSpaces = 0
        } else if (density < 0.25) {
          line += avgBrightness < 100 ? 'x' : 'o'
          trailingSpaces = 0
        } else if (density < 0.4) {
          line += '#'
          trailingSpaces = 0
        } else {
          line += '@'
          trailingSpaces = 0
        }
      }
      // Trim trailing spaces
      if (trailingSpaces > 0) {
        line = line.slice(0, -trailingSpaces)
      }
      lines.push(line)
    }

    // Remove empty lines from top and bottom
    while (lines.length > 0 && lines[0].trim() === '') lines.shift()
    while (lines.length > 0 && lines[lines.length - 1].trim() === '') lines.pop()

    const result = lines.join('\n')
    setText(result || (ot?.noText || 'Ingen text kunde identifieras. Prova en bild med tydlig, mörk text på ljus bakgrund.'))
    setProcessing(false)
  }

  const copyText = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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
            <p className="text-gray-600 dark:text-gray-400 hc:text-gray-300">{ot?.upload || 'Klicka eller dra hit en bild'}</p>
          )}
        </div>
        <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImage(f) }} />

        {image && (
          <button
            onClick={extractText}
            disabled={processing}
            className="w-full rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
          >
            {processing ? (ot?.processing || 'Analyserar...') : (ot?.extract || 'Extrahera text')}
          </button>
        )}

        {text && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600 dark:text-gray-400 hc:text-gray-300">{ot?.result || 'Resultat'}</span>
              <button
                onClick={copyText}
                className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hc:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? (ot?.copied || 'Kopierad!') : (ot?.copy || 'Kopiera')}
              </button>
            </div>
            <pre className="rounded-lg bg-white dark:bg-gray-800 hc:bg-gray-900 hc:border hc:border-gray-700 p-4 text-sm text-gray-900 dark:text-gray-100 hc:text-white font-mono whitespace-pre-wrap overflow-x-auto max-h-64 overflow-y-auto">
              {text}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}
