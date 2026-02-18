import { useState, useEffect } from 'react'
import { Copy, Check } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

const ALGORITHMS = ['SHA-256', 'SHA-384', 'SHA-512', 'SHA-1'] as const
type Algorithm = typeof ALGORITHMS[number]

async function computeHash(text: string, algorithm: Algorithm): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(text)
  const hashBuffer = await crypto.subtle.digest(algorithm, data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
}

export default function HashGenerator() {
  const { t } = useLanguage()
  const translation = t.tools['hash-generator']
  const h = t.hashGenerator

  const [input, setInput] = useState('')
  const [hashes, setHashes] = useState<Record<Algorithm, string>>({
    'SHA-256': '',
    'SHA-384': '',
    'SHA-512': '',
    'SHA-1': '',
  })
  const [copiedAlg, setCopiedAlg] = useState<string | null>(null)

  useEffect(() => {
    if (!input) {
      setHashes({ 'SHA-256': '', 'SHA-384': '', 'SHA-512': '', 'SHA-1': '' })
      return
    }
    let cancelled = false
    Promise.all(
      ALGORITHMS.map(async (alg) => {
        const hash = await computeHash(input, alg)
        return [alg, hash] as const
      })
    ).then((results) => {
      if (cancelled) return
      const next = { ...hashes }
      for (const [alg, hash] of results) {
        next[alg] = hash
      }
      setHashes(next)
    })
    return () => { cancelled = true }
  }, [input])

  const copyHash = async (alg: Algorithm) => {
    if (!hashes[alg]) return
    await navigator.clipboard.writeText(hashes[alg])
    setCopiedAlg(alg)
    setTimeout(() => setCopiedAlg(null), 2000)
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

      {/* Input */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          {h?.input ?? 'Text'}
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={h?.placeholder ?? 'Skriv eller klistra in text att hasha...'}
          rows={4}
          spellCheck={false}
          className="w-full resize-y rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-4 py-3 font-mono text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Hash results */}
      <div className="space-y-3">
        {ALGORITHMS.map((alg) => (
          <div
            key={alg}
            className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4"
          >
            <div className="mb-2 flex items-center justify-between">
              <label className="text-sm font-medium text-gray-900 dark:text-white">
                {alg}
              </label>
              <button
                onClick={() => copyHash(alg)}
                disabled={!hashes[alg]}
                className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white px-3 py-1.5 text-xs text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-40"
              >
                {copiedAlg === alg
                  ? <Check className="h-3.5 w-3.5 text-green-500" />
                  : <Copy className="h-3.5 w-3.5" />}
                {copiedAlg === alg ? (h?.copied ?? 'Kopierat!') : (h?.copy ?? 'Kopiera')}
              </button>
            </div>
            <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-4 py-3 font-mono text-sm text-gray-900 dark:text-white break-all">
              {hashes[alg] || <span className="text-gray-400 dark:text-gray-500">&mdash;</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
