import { useState } from 'react'
import { Copy, Check, ArrowDownUp } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

type Mode = 'encode' | 'decode'

export default function Base64Encoder() {
  const { t } = useLanguage()
  const translation = t.tools['base64-kodare']
  const b = t.base64

  const [mode, setMode] = useState<Mode>('encode')
  const [input, setInput] = useState('')
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  let output = ''
  if (input) {
    try {
      if (mode === 'encode') {
        output = btoa(unescape(encodeURIComponent(input)))
      } else {
        output = decodeURIComponent(escape(atob(input.trim())))
      }
      if (error) setError('')
    } catch {
      output = ''
      if (!error) setError(mode === 'decode'
        ? (b?.invalidBase64 ?? 'Ogiltig Base64-sträng')
        : (b?.encodingError ?? 'Kunde inte koda texten'))
    }
  } else if (error) {
    setError('')
  }

  const copyToClipboard = async () => {
    if (!output) return
    await navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const swap = () => {
    if (output) {
      setInput(output)
    }
    setMode(mode === 'encode' ? 'decode' : 'encode')
    setError('')
  }

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

      {/* Mode toggle */}
      <div className="flex gap-2">
        <button
          onClick={() => { setMode('encode'); setError('') }}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            mode === 'encode'
              ? 'bg-blue-600 text-white hc:bg-white hc:text-black'
              : 'bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 text-gray-600 dark:text-gray-400 hc:text-gray-400 hc:border hc:border-gray-600'
          }`}
        >
          {b?.encode ?? 'Koda'}
        </button>
        <button
          onClick={() => { setMode('decode'); setError('') }}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            mode === 'decode'
              ? 'bg-blue-600 text-white hc:bg-white hc:text-black'
              : 'bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 text-gray-600 dark:text-gray-400 hc:text-gray-400 hc:border hc:border-gray-600'
          }`}
        >
          {b?.decode ?? 'Avkoda'}
        </button>
      </div>

      {/* Input */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          {mode === 'encode' ? (b?.textInput ?? 'Text') : 'Base64'}
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={mode === 'encode'
            ? (b?.encodePlaceholder ?? 'Skriv text att koda...')
            : (b?.decodePlaceholder ?? 'Klistra in Base64 att avkoda...')}
          rows={5}
          spellCheck={false}
          className="w-full resize-y rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-4 py-3 font-mono text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Swap button */}
      <div className="flex justify-center">
        <button
          onClick={swap}
          disabled={!output}
          className="rounded-full bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white p-2.5 text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-40"
          title={b?.swap ?? 'Byt'}
        >
          <ArrowDownUp className="h-5 w-5" />
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="rounded-xl border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-4 text-sm text-red-700 dark:text-red-400">
          {error}
        </div>
      )}

      {/* Output */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
        <div className="mb-2 flex items-center justify-between">
          <label className="text-sm font-medium text-gray-900 dark:text-white">
            {mode === 'encode' ? 'Base64' : (b?.textOutput ?? 'Text')}
          </label>
          <button
            onClick={copyToClipboard}
            disabled={!output}
            className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white px-3 py-1.5 text-xs text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-40"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? (b?.copied ?? 'Kopierat!') : (b?.copy ?? 'Kopiera')}
          </button>
        </div>
        <pre className="min-h-[5rem] overflow-auto rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-4 py-3 font-mono text-sm text-gray-900 dark:text-white whitespace-pre-wrap break-all">
          {output || '\u00A0'}
        </pre>
      </div>
    </div>
  )
}
