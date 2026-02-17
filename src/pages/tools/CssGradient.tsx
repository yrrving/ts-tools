import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Copy, Check, Plus, X } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

type GradientType = 'linear' | 'radial'

interface ColorStop {
  color: string
  position: number
}

export default function CssGradient() {
  const { t } = useLanguage()
  const translation = t.tools['css-gradient']
  const gt = t.cssGradient

  const [type, setType] = useState<GradientType>('linear')
  const [angle, setAngle] = useState(135)
  const [stops, setStops] = useState<ColorStop[]>([
    { color: '#667eea', position: 0 },
    { color: '#764ba2', position: 100 },
  ])
  const [copied, setCopied] = useState(false)

  const stopsStr = stops.map((s) => `${s.color} ${s.position}%`).join(', ')
  const cssValue = type === 'linear'
    ? `linear-gradient(${angle}deg, ${stopsStr})`
    : `radial-gradient(circle, ${stopsStr})`

  const addStop = () => {
    if (stops.length >= 6) return
    const midPos = Math.round((stops[stops.length - 2]?.position || 0 + stops[stops.length - 1]?.position || 100) / 2)
    setStops([...stops, { color: '#00d2ff', position: midPos }].sort((a, b) => a.position - b.position))
  }

  const removeStop = (index: number) => {
    if (stops.length <= 2) return
    setStops(stops.filter((_, i) => i !== index))
  }

  const updateStop = (index: number, field: 'color' | 'position', value: string | number) => {
    const updated = [...stops]
    if (field === 'color') updated[index].color = value as string
    else updated[index].position = value as number
    setStops(updated)
  }

  const copy = async () => {
    await navigator.clipboard.writeText(`background: ${cssValue};`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const presets = [
    [{ color: '#667eea', position: 0 }, { color: '#764ba2', position: 100 }],
    [{ color: '#f093fb', position: 0 }, { color: '#f5576c', position: 100 }],
    [{ color: '#4facfe', position: 0 }, { color: '#00f2fe', position: 100 }],
    [{ color: '#43e97b', position: 0 }, { color: '#38f9d7', position: 100 }],
    [{ color: '#fa709a', position: 0 }, { color: '#fee140', position: 100 }],
    [{ color: '#a18cd1', position: 0 }, { color: '#fbc2eb', position: 100 }],
  ]

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
        {/* Preview */}
        <div
          className="h-48 rounded-xl border border-gray-200 dark:border-gray-600 hc:border-white"
          style={{ background: cssValue }}
        />

        {/* Type + Angle */}
        <div className="flex gap-4">
          <div className="flex gap-2">
            {(['linear', 'radial'] as GradientType[]).map((g) => (
              <button
                key={g}
                onClick={() => setType(g)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  type === g
                    ? 'bg-blue-600 text-white hc:bg-white hc:text-black'
                    : 'bg-gray-100 dark:bg-gray-600 hc:bg-gray-900 text-gray-600 dark:text-gray-400 hc:text-gray-400 hc:border hc:border-gray-600'
                }`}
              >
                {g === 'linear' ? (gt?.linear || 'Linjär') : (gt?.radial || 'Radiell')}
              </button>
            ))}
          </div>
          {type === 'linear' && (
            <div className="flex items-center gap-2 flex-1">
              <span className="text-sm text-gray-600 dark:text-gray-400 hc:text-gray-300">{gt?.angle || 'Vinkel'}</span>
              <input
                type="range"
                min={0}
                max={360}
                value={angle}
                onChange={(e) => setAngle(Number(e.target.value))}
                className="flex-1 accent-blue-500"
              />
              <span className="text-sm font-mono text-gray-900 dark:text-white w-10 text-right">{angle}°</span>
            </div>
          )}
        </div>

        {/* Color stops */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hc:text-white">{gt?.colors || 'Färger'}</span>
            <button
              onClick={addStop}
              disabled={stops.length >= 6}
              className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hc:text-blue-300 hover:underline disabled:opacity-40"
            >
              <Plus className="h-3 w-3" />
              {gt?.addColor || 'Lägg till'}
            </button>
          </div>
          {stops.map((stop, i) => (
            <div key={i} className="flex items-center gap-2">
              <input
                type="color"
                value={stop.color}
                onChange={(e) => updateStop(i, 'color', e.target.value)}
                className="h-8 w-10 rounded border border-gray-200 dark:border-gray-600 hc:border-white cursor-pointer"
              />
              <input
                type="text"
                value={stop.color}
                onChange={(e) => updateStop(i, 'color', e.target.value)}
                className="w-24 rounded-lg border border-gray-200 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-2 py-1 font-mono text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="range"
                min={0}
                max={100}
                value={stop.position}
                onChange={(e) => updateStop(i, 'position', Number(e.target.value))}
                className="flex-1 accent-blue-500"
              />
              <span className="text-xs font-mono text-gray-500 dark:text-gray-400 w-8">{stop.position}%</span>
              {stops.length > 2 && (
                <button
                  onClick={() => removeStop(i)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Presets */}
        <div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hc:text-white mb-2 block">{gt?.presets || 'Förval'}</span>
          <div className="flex gap-2 flex-wrap">
            {presets.map((preset, i) => {
              const bg = `linear-gradient(135deg, ${preset.map((s) => `${s.color} ${s.position}%`).join(', ')})`
              return (
                <button
                  key={i}
                  onClick={() => setStops(preset.map((s) => ({ ...s })))}
                  className="h-8 w-12 rounded-lg border border-gray-200 dark:border-gray-600 hc:border-white transition-transform hover:scale-110"
                  style={{ background: bg }}
                />
              )
            })}
          </div>
        </div>

        {/* CSS output */}
        <div className="rounded-lg bg-gray-100 dark:bg-gray-800 hc:bg-gray-900 hc:border hc:border-white p-3">
          <div className="flex items-start justify-between gap-2">
            <code className="text-sm font-mono text-gray-900 dark:text-white break-all">
              background: {cssValue};
            </code>
            <button
              onClick={copy}
              className="shrink-0 rounded-lg bg-gray-200 dark:bg-gray-700 hc:bg-gray-800 hc:border hc:border-white p-1.5 text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
