import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Copy, Check, Plus, Trash2, Shuffle } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

function randomColor(): string {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
}

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgb(${r}, ${g}, ${b})`
}

function hexToHsl(hex: string): string {
  let r = parseInt(hex.slice(1, 3), 16) / 255
  let g = parseInt(hex.slice(3, 5), 16) / 255
  let b = parseInt(hex.slice(5, 7), 16) / 255
  const max = Math.max(r, g, b), min = Math.min(r, g, b)
  let h = 0, s = 0
  const l = (max + min) / 2
  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6
    else if (max === g) h = ((b - r) / d + 2) / 6
    else h = ((r - g) / d + 4) / 6
  }
  return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`
}

function luminance(hex: string): number {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255
  return 0.299 * r + 0.587 * g + 0.114 * b
}

export default function ColorPalette() {
  const { t } = useLanguage()
  const translation = t.tools['fargpalett']
  const cp = t.colorPalette

  const [colors, setColors] = useState<string[]>([
    '#3b82f6', '#ef4444', '#22c55e', '#f59e0b', '#8b5cf6',
  ])
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null)

  const addColor = () => {
    setColors([...colors, randomColor()])
  }

  const removeColor = (idx: number) => {
    setColors(colors.filter((_, i) => i !== idx))
  }

  const updateColor = (idx: number, color: string) => {
    const next = [...colors]
    next[idx] = color
    setColors(next)
  }

  const randomize = () => {
    setColors(colors.map(() => randomColor()))
  }

  const copyColor = async (hex: string, idx: number) => {
    await navigator.clipboard.writeText(hex)
    setCopiedIdx(idx)
    setTimeout(() => setCopiedIdx(null), 2000)
  }

  const copyAll = async () => {
    await navigator.clipboard.writeText(colors.join('\n'))
    setCopiedIdx(-1)
    setTimeout(() => setCopiedIdx(null), 2000)
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6 py-10">
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

      {/* Actions */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={addColor}
          className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          <Plus className="h-4 w-4" />
          {cp?.addColor ?? 'Lägg till färg'}
        </button>
        <button
          onClick={randomize}
          className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          <Shuffle className="h-4 w-4" />
          {cp?.randomize ?? 'Slumpa'}
        </button>
        <button
          onClick={copyAll}
          className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          {copiedIdx === -1 ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          {copiedIdx === -1 ? (cp?.copied ?? 'Kopierat!') : (cp?.copyAll ?? 'Kopiera alla')}
        </button>
      </div>

      {/* Color preview bar */}
      <div className="flex h-24 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white">
        {colors.map((color, i) => (
          <div
            key={i}
            className="flex-1 transition-colors"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      {/* Color cards */}
      <div className="space-y-3">
        {colors.map((color, i) => (
          <div
            key={i}
            className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4"
          >
            <div className="flex items-center gap-4">
              <input
                type="color"
                value={color}
                onChange={(e) => updateColor(i, e.target.value)}
                className="h-12 w-12 cursor-pointer rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white"
              />
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-sm font-bold text-gray-900 dark:text-white">
                    {color.toUpperCase()}
                  </span>
                  <button
                    onClick={() => copyColor(color, i)}
                    className="rounded p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                  >
                    {copiedIdx === i ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                </div>
                <div className="flex gap-4 text-xs text-gray-500 dark:text-gray-400 font-mono">
                  <span>{hexToRgb(color)}</span>
                  <span>{hexToHsl(color)}</span>
                </div>
              </div>
              <div
                className="hidden sm:flex items-center justify-center h-8 w-20 rounded text-xs font-bold"
                style={{
                  backgroundColor: color,
                  color: luminance(color) > 0.5 ? '#000' : '#fff',
                }}
              >
                Aa
              </div>
              <button
                onClick={() => removeColor(i)}
                disabled={colors.length <= 1}
                className="rounded-lg p-2 text-gray-400 hover:text-red-500 transition-colors disabled:opacity-30"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
