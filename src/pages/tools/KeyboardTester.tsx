import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Trash2 } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

interface KeyEvent {
  key: string
  code: string
  keyCode: number
  location: number
  timestamp: number
}

export default function KeyboardTester() {
  const { t } = useLanguage()
  const translation = t.tools['tangentbordstest']
  const k = t.keyboardTester

  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set())
  const [lastEvent, setLastEvent] = useState<KeyEvent | null>(null)
  const [history, setHistory] = useState<KeyEvent[]>([])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    e.preventDefault()
    setPressedKeys((prev) => new Set(prev).add(e.code))
    const event: KeyEvent = {
      key: e.key,
      code: e.code,
      keyCode: e.keyCode,
      location: e.location,
      timestamp: Date.now(),
    }
    setLastEvent(event)
    setHistory((prev) => [event, ...prev].slice(0, 50))
  }, [])

  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    e.preventDefault()
    setPressedKeys((prev) => {
      const next = new Set(prev)
      next.delete(e.code)
      return next
    })
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [handleKeyDown, handleKeyUp])

  const locationName = (loc: number) => {
    switch (loc) {
      case 0: return k?.standard ?? 'Standard'
      case 1: return k?.left ?? 'Vänster'
      case 2: return k?.right ?? 'Höger'
      case 3: return k?.numpad ?? 'Numpad'
      default: return String(loc)
    }
  }

  const displayKey = (key: string) => {
    if (key === ' ') return 'Space'
    if (key === 'Meta') return '⌘ Cmd'
    if (key === 'Control') return 'Ctrl'
    if (key === 'Alt') return 'Alt'
    if (key === 'Shift') return '⇧ Shift'
    if (key === 'Enter') return '↵ Enter'
    if (key === 'Backspace') return '⌫ Backspace'
    if (key === 'Tab') return '⇥ Tab'
    if (key === 'Escape') return 'Esc'
    if (key === 'ArrowUp') return '↑'
    if (key === 'ArrowDown') return '↓'
    if (key === 'ArrowLeft') return '←'
    if (key === 'ArrowRight') return '→'
    if (key === 'CapsLock') return '⇪ Caps'
    return key
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

      {/* Active keys */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-6">
        <p className="mb-3 text-center text-sm text-gray-500 dark:text-gray-400 hc:text-gray-300">
          {k?.pressAnyKey ?? 'Tryck på valfri tangent...'}
        </p>
        <div className="flex min-h-[4rem] flex-wrap items-center justify-center gap-2">
          {pressedKeys.size > 0 ? (
            [...pressedKeys].map((code) => (
              <span
                key={code}
                className="rounded-lg bg-blue-600 px-4 py-2 text-lg font-bold text-white shadow-lg shadow-blue-600/30 hc:bg-white hc:text-black"
              >
                {displayKey(lastEvent?.code === code ? lastEvent.key : code)}
              </span>
            ))
          ) : (
            <span className="text-3xl text-gray-300 dark:text-gray-600">⌨</span>
          )}
        </div>
      </div>

      {/* Key details */}
      {lastEvent && (
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
          <label className="mb-3 block text-sm font-medium text-gray-900 dark:text-white">
            {k?.lastKey ?? 'Senaste tangent'}
          </label>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: 'key', value: lastEvent.key === ' ' ? '(space)' : lastEvent.key },
              { label: 'code', value: lastEvent.code },
              { label: 'keyCode', value: String(lastEvent.keyCode) },
              { label: k?.location ?? 'plats', value: locationName(lastEvent.location) },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 p-3 text-center"
              >
                <div className="font-mono text-sm font-bold text-gray-900 dark:text-white">
                  {item.value}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 hc:text-gray-300">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* History */}
      {history.length > 0 && (
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
          <div className="mb-3 flex items-center justify-between">
            <label className="text-sm font-medium text-gray-900 dark:text-white">
              {k?.history ?? 'Historik'} ({history.length})
            </label>
            <button
              onClick={() => { setHistory([]); setLastEvent(null) }}
              className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white px-3 py-1.5 text-xs text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <Trash2 className="h-3.5 w-3.5" />
              {k?.clear ?? 'Rensa'}
            </button>
          </div>
          <div className="max-h-48 overflow-auto space-y-1">
            {history.map((event, i) => (
              <div
                key={event.timestamp + '-' + i}
                className="flex items-center justify-between rounded-lg bg-white dark:bg-gray-700 hc:bg-gray-900 px-3 py-1.5 text-xs font-mono"
              >
                <span className="font-bold text-gray-900 dark:text-white">
                  {displayKey(event.key)}
                </span>
                <span className="text-gray-400 dark:text-gray-500">
                  {event.code}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
