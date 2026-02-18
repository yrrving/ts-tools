import { useState, useRef } from 'react'
import { Plus, Download, X } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

type Layout = '2x1' | '1x2' | '2x2' | '3x1' | '1x3'

const LAYOUTS: { key: Layout; label: string; cols: number; rows: number }[] = [
  { key: '2x1', label: '2×1', cols: 2, rows: 1 },
  { key: '1x2', label: '1×2', cols: 1, rows: 2 },
  { key: '2x2', label: '2×2', cols: 2, rows: 2 },
  { key: '3x1', label: '3×1', cols: 3, rows: 1 },
  { key: '1x3', label: '1×3', cols: 1, rows: 3 },
]

export default function ImageCollage() {
  const { t } = useLanguage()
  const translation = t.tools['bildkollage']
  const ct = t.imageCollage

  const [images, setImages] = useState<string[]>([])
  const [layout, setLayout] = useState<Layout>('2x2')
  const [gap, setGap] = useState(4)
  const [result, setResult] = useState('')
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const addImages = (files: FileList) => {
    Array.from(files).forEach((file) => {
      if (!file.type.startsWith('image/')) return
      const reader = new FileReader()
      reader.onload = () => {
        setImages((prev) => [...prev, reader.result as string])
      }
      reader.readAsDataURL(file)
    })
  }

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
    setResult('')
  }

  const generate = async () => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    const l = LAYOUTS.find((l) => l.key === layout)!
    const slots = l.cols * l.rows
    const cellSize = 400
    const g = gap
    canvas.width = l.cols * cellSize + (l.cols - 1) * g
    canvas.height = l.rows * cellSize + (l.rows - 1) * g
    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const loadImg = (src: string): Promise<HTMLImageElement> =>
      new Promise((resolve) => {
        const img = new Image()
        img.onload = () => resolve(img)
        img.src = src
      })

    for (let i = 0; i < Math.min(slots, images.length); i++) {
      const img = await loadImg(images[i])
      const col = i % l.cols
      const row = Math.floor(i / l.cols)
      const x = col * (cellSize + g)
      const y = row * (cellSize + g)
      // Cover crop
      const srcAspect = img.width / img.height
      let sx = 0, sy = 0, sw = img.width, sh = img.height
      if (srcAspect > 1) { sw = img.height; sx = (img.width - sw) / 2 }
      else { sh = img.width; sy = (img.height - sh) / 2 }
      ctx.drawImage(img, sx, sy, sw, sh, x, y, cellSize, cellSize)
    }
    setResult(canvas.toDataURL('image/jpeg', 0.9))
  }

  const download = () => {
    const a = document.createElement('a')
    a.href = result
    a.download = 'collage.jpg'
    a.click()
  }

  const l = LAYOUTS.find((l) => l.key === layout)!
  const slots = l.cols * l.rows

  return (
    <div className="mx-auto max-w-2xl space-y-6 py-10">
      <BackLink />

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{translation?.name}</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400 hc:text-gray-200">{translation?.description}</p>
      </div>

      <canvas ref={canvasRef} className="hidden" />

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4 space-y-4">
        {/* Layout selector */}
        <div className="flex gap-2 flex-wrap">
          {LAYOUTS.map((l) => (
            <button
              key={l.key}
              onClick={() => setLayout(l.key)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                layout === l.key
                  ? 'bg-blue-600 text-white hc:bg-white hc:text-black'
                  : 'bg-gray-100 dark:bg-gray-600 hc:bg-gray-900 text-gray-600 dark:text-gray-400 hc:text-gray-400 hc:border hc:border-gray-600'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Gap slider */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-400 hc:text-gray-300">{ct?.gap || 'Mellanrum'}</span>
          <input type="range" min={0} max={20} value={gap} onChange={(e) => setGap(Number(e.target.value))} className="flex-1 accent-blue-500" />
          <span className="text-sm font-mono text-gray-900 dark:text-white w-8">{gap}px</span>
        </div>

        {/* Image grid */}
        <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${Math.min(4, images.length + 1)}, 1fr)` }}>
          {images.map((src, i) => (
            <div key={i} className="relative group">
              <img src={src} className="h-24 w-full rounded-lg object-cover" alt="" />
              <button
                onClick={() => removeImage(i)}
                className="absolute top-1 right-1 rounded-full bg-black/60 p-1 text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}
          {images.length < 9 && (
            <button
              onClick={() => inputRef.current?.click()}
              className="h-24 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 hc:border-white flex items-center justify-center text-gray-400 hover:border-blue-400 hover:text-blue-400 transition-colors"
            >
              <Plus className="h-6 w-6" />
            </button>
          )}
        </div>

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => { if (e.target.files) addImages(e.target.files) }}
        />

        <div className="text-xs text-gray-500 dark:text-gray-400 hc:text-gray-300">
          {images.length}/{slots} {ct?.images || 'bilder'}
        </div>

        <button
          onClick={generate}
          disabled={images.length < 2}
          className="w-full rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
        >
          {ct?.generate || 'Skapa kollage'}
        </button>

        {result && (
          <div className="space-y-2">
            <img src={result} className="w-full rounded-lg" alt="" />
            <button
              onClick={download}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-green-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-green-700"
            >
              <Download className="h-4 w-4" />
              {ct?.download || 'Ladda ner'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
