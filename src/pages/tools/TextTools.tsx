import { useState } from 'react'
import { Copy, Check, Trash2 } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

type Transform =
  | 'uppercase'
  | 'lowercase'
  | 'capitalize'
  | 'trim'
  | 'remove-duplicates'
  | 'sort-lines'
  | 'reverse-lines'
  | 'remove-empty'

export default function TextTools() {
  const { t } = useLanguage()
  const translation = t.tools['textverktyg']

  const [text, setText] = useState('')
  const [copied, setCopied] = useState(false)

  const chars = text.length
  const charsNoSpaces = text.replace(/\s/g, '').length
  const words = text.trim() ? text.trim().split(/\s+/).length : 0
  const lines = text ? text.split('\n').length : 0

  const apply = (transform: Transform) => {
    switch (transform) {
      case 'uppercase':
        setText(text.toUpperCase())
        break
      case 'lowercase':
        setText(text.toLowerCase())
        break
      case 'capitalize':
        setText(
          text.replace(/\b\w/g, (c) => c.toUpperCase())
        )
        break
      case 'trim':
        setText(
          text
            .split('\n')
            .map((l) => l.trim())
            .join('\n')
            .trim()
        )
        break
      case 'remove-duplicates':
        setText(
          [...new Set(text.split('\n'))].join('\n')
        )
        break
      case 'sort-lines':
        setText(
          text
            .split('\n')
            .sort((a, b) => a.localeCompare(b))
            .join('\n')
        )
        break
      case 'reverse-lines':
        setText(text.split('\n').reverse().join('\n'))
        break
      case 'remove-empty':
        setText(
          text
            .split('\n')
            .filter((l) => l.trim())
            .join('\n')
        )
        break
    }
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const transforms: { key: Transform; label: string }[] = [
    { key: 'uppercase', label: 'ABC' },
    { key: 'lowercase', label: 'abc' },
    { key: 'capitalize', label: 'Abc' },
    { key: 'trim', label: 'Trim' },
    { key: 'remove-empty', label: '⌀ rader' },
    { key: 'remove-duplicates', label: '✕ dubbla' },
    { key: 'sort-lines', label: 'A→Z' },
    { key: 'reverse-lines', label: 'Z→A' },
  ]

  return (
    <div className="mx-auto max-w-2xl space-y-6 py-10">
      <BackLink />

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

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: t.textTools?.characters ?? 'Tecken', value: chars },
          { label: t.textTools?.charactersNoSpaces ?? 'Utan mellanslag', value: charsNoSpaces },
          { label: t.textTools?.words ?? 'Ord', value: words },
          { label: t.textTools?.lines ?? 'Rader', value: lines },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-3 text-center"
          >
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {stat.value}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 hc:text-gray-200">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Textarea */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={t.textTools?.placeholder ?? 'Skriv eller klistra in text här...'}
          rows={10}
          className="w-full resize-y rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
        />

        {/* Actions */}
        <div className="mt-3 flex items-center gap-2">
          <button
            onClick={copyToClipboard}
            disabled={!text}
            className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-40"
          >
            {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
            {copied ? (t.textTools?.copied ?? 'Kopierat!') : (t.textTools?.copy ?? 'Kopiera')}
          </button>
          <button
            onClick={() => setText('')}
            disabled={!text}
            className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-40"
          >
            <Trash2 className="h-4 w-4" />
            {t.textTools?.clear ?? 'Rensa'}
          </button>
        </div>
      </div>

      {/* Transforms */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
        <h2 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
          {t.textTools?.transform ?? 'Transformera'}
        </h2>
        <div className="flex flex-wrap gap-2">
          {transforms.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => apply(key)}
              disabled={!text}
              className="rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-40"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
