import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Download } from 'lucide-react'
import QRCode from 'qrcode'
import { useLanguage } from '../../context/LanguageContext'

export default function QrCodeTool() {
  const { t } = useLanguage()
  const translation = t.tools['qr-kod']
  const q = t.qrCode

  const [input, setInput] = useState('')
  const [size, setSize] = useState(256)
  const [fgColor, setFgColor] = useState('#000000')
  const [bgColor, setBgColor] = useState('#ffffff')
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hasQr, setHasQr] = useState(false)

  useEffect(() => {
    if (!input || !canvasRef.current) {
      setHasQr(false)
      const ctx = canvasRef.current?.getContext('2d')
      if (ctx) {
        ctx.clearRect(0, 0, size, size)
      }
      return
    }

    QRCode.toCanvas(canvasRef.current, input, {
      width: size,
      margin: 2,
      color: { dark: fgColor, light: bgColor },
    })
      .then(() => setHasQr(true))
      .catch(() => setHasQr(false))
  }, [input, size, fgColor, bgColor])

  const downloadPng = () => {
    if (!canvasRef.current || !hasQr) return
    const link = document.createElement('a')
    link.download = 'qrcode.png'
    link.href = canvasRef.current.toDataURL('image/png')
    link.click()
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
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {translation?.name}
        </h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400 hc:text-gray-200">
          {translation?.description}
        </p>
        {translation?.hint && (
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500 hc:text-gray-300 italic">{translation.hint}</p>
        )}
      </div>

      {/* Input */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          {q?.input ?? 'Text eller URL'}
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={q?.placeholder ?? 'Skriv text eller klistra in en URL...'}
          rows={3}
          spellCheck={false}
          className="w-full resize-y rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Options */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
        <div className="flex flex-wrap items-end gap-4">
          <div>
            <label className="mb-1 block text-xs text-gray-500 dark:text-gray-400">
              {q?.size ?? 'Storlek'}
            </label>
            <select
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 hc:text-white"
            >
              <option value={128}>128px</option>
              <option value={256}>256px</option>
              <option value={512}>512px</option>
              <option value={1024}>1024px</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs text-gray-500 dark:text-gray-400">
              {q?.foreground ?? 'Förgrund'}
            </label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={fgColor}
                onChange={(e) => setFgColor(e.target.value)}
                className="h-9 w-9 cursor-pointer rounded border border-gray-300 dark:border-gray-600 hc:border-white"
              />
              <span className="font-mono text-xs text-gray-500 dark:text-gray-400">{fgColor}</span>
            </div>
          </div>
          <div>
            <label className="mb-1 block text-xs text-gray-500 dark:text-gray-400">
              {q?.background ?? 'Bakgrund'}
            </label>
            <div className="flex items-center gap-2">
              <input
                type="color"
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value)}
                className="h-9 w-9 cursor-pointer rounded border border-gray-300 dark:border-gray-600 hc:border-white"
              />
              <span className="font-mono text-xs text-gray-500 dark:text-gray-400">{bgColor}</span>
            </div>
          </div>
        </div>
      </div>

      {/* QR Output */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
        <div className="mb-2 flex items-center justify-between">
          <label className="text-sm font-medium text-gray-900 dark:text-white">
            {q?.output ?? 'QR-kod'}
          </label>
          <button
            onClick={downloadPng}
            disabled={!hasQr}
            className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white px-3 py-1.5 text-xs text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-40"
          >
            <Download className="h-3.5 w-3.5" />
            {q?.download ?? 'Ladda ner PNG'}
          </button>
        </div>
        <div className="flex justify-center rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 p-6">
          <canvas
            ref={canvasRef}
            width={size}
            height={size}
            className="max-w-full"
            style={{ imageRendering: 'pixelated' }}
          />
        </div>
      </div>
    </div>
  )
}
