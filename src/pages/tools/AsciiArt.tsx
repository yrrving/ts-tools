import { useState, useRef } from 'react'
import { Copy, Check } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

const CHAR_RAMPS = {
  standard: ' .:-=+*#%@',
  detailed: ' .\'`^",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$',
  blocks: ' ░▒▓█',
}

type RampType = keyof typeof CHAR_RAMPS

export default function AsciiArt() {
  const { t } = useLanguage()
  const translation = t.tools['ascii-konst']
  const at = t.asciiArt

  const [ascii, setAscii] = useState('')
  const [width, setWidth] = useState(80)
  const [rampType, setRampType] = useState<RampType>('standard')
  const [copied, setCopied] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleImage = (file: File) => {
    const img = new Image()
    img.onload = () => {
      const canvas = canvasRef.current!
      const aspectRatio = img.height / img.width
      const cols = width
      const rows = Math.round(cols * aspectRatio * 0.5) // chars are ~2x tall
      canvas.width = cols
      canvas.height = rows
      const ctx = canvas.getContext('2d')!
      ctx.drawImage(img, 0, 0, cols, rows)
      const imageData = ctx.getImageData(0, 0, cols, rows)
      const ramp = CHAR_RAMPS[rampType]

      let result = ''
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = (y * cols + x) * 4
          const r = imageData.data[i]
          const g = imageData.data[i + 1]
          const b = imageData.data[i + 2]
          const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255
          const charIndex = Math.floor(brightness * (ramp.length - 1))
          result += ramp[charIndex]
        }
        result += '\n'
      }
      setAscii(result)
    }
    img.src = URL.createObjectURL(file)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file?.type.startsWith('image/')) handleImage(file)
  }

  const copy = async () => {
    await navigator.clipboard.writeText(ascii)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const ramps: { key: RampType; label: string }[] = [
    { key: 'standard', label: at?.standard || 'Standard' },
    { key: 'detailed', label: at?.detailed || 'Detaljerad' },
    { key: 'blocks', label: at?.blocks || 'Block' },
  ]

  return (
    <div className="mx-auto max-w-4xl space-y-6 py-10">
      <BackLink />

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{translation?.name}</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400 hc:text-gray-200">{translation?.description}</p>
      </div>

      <canvas ref={canvasRef} className="hidden" />

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4 space-y-4">
        {/* Upload area */}
        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 hc:border-white p-8 text-center cursor-pointer transition-colors hover:border-blue-400 dark:hover:border-blue-500"
        >
          <p className="text-gray-600 dark:text-gray-400 hc:text-gray-300">
            {at?.upload || 'Klicka eller dra hit en bild'}
          </p>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImage(f) }}
          />
        </div>

        {/* Settings */}
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400 hc:text-gray-300">{at?.widthLabel || 'Bredd'}</span>
            <input
              type="number"
              min={20}
              max={200}
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
              className="w-20 rounded-lg border border-gray-200 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-2 py-1 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2">
            {ramps.map((r) => (
              <button
                key={r.key}
                onClick={() => setRampType(r.key)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  rampType === r.key
                    ? 'bg-blue-600 text-white hc:bg-white hc:text-black'
                    : 'bg-gray-100 dark:bg-gray-600 hc:bg-gray-900 text-gray-600 dark:text-gray-400 hc:text-gray-400 hc:border hc:border-gray-600'
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>

        {/* Output */}
        {ascii && (
          <div className="space-y-2">
            <div className="flex justify-end">
              <button
                onClick={copy}
                className="flex items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-600 hc:bg-gray-900 hc:border hc:border-white px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-500"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? (at?.copied || 'Kopierat!') : (at?.copy || 'Kopiera')}
              </button>
            </div>
            <pre className="rounded-lg bg-gray-900 p-4 overflow-auto max-h-[500px] text-[6px] leading-[7px] font-mono text-green-400 hc:text-white select-all">
              {ascii}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}
