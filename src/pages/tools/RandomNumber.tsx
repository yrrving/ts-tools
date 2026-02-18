import { useState } from 'react'
import { Copy, Check, Shuffle } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

export default function RandomNumber() {
  const { t } = useLanguage()
  const translation = t.tools['slumptalsgenerator']
  const rt = t.randomNumber

  const [min, setMin] = useState('1')
  const [max, setMax] = useState('100')
  const [count, setCount] = useState('1')
  const [results, setResults] = useState<number[]>([])
  const [copied, setCopied] = useState(false)

  const generate = () => {
    const lo = parseInt(min) || 0
    const hi = parseInt(max) || 100
    const n = Math.max(1, Math.min(100, parseInt(count) || 1))
    const nums: number[] = []
    for (let i = 0; i < n; i++) {
      nums.push(Math.floor(Math.random() * (hi - lo + 1)) + lo)
    }
    setResults(nums)
    setCopied(false)
  }

  const copy = async () => {
    await navigator.clipboard.writeText(results.join(', '))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mx-auto max-w-xl space-y-6 py-10">
      <BackLink />

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{translation?.name}</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400 hc:text-gray-200">{translation?.description}</p>
        {translation?.hint && (
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500 hc:text-gray-300 italic">{translation.hint}</p>
        )}
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4 space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 hc:text-white mb-1">{rt?.min || 'Min'}</label>
            <input
              type="number"
              value={min}
              onChange={(e) => setMin(e.target.value)}
              className="w-full rounded-lg border border-gray-200 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-3 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 hc:text-white mb-1">{rt?.max || 'Max'}</label>
            <input
              type="number"
              value={max}
              onChange={(e) => setMax(e.target.value)}
              className="w-full rounded-lg border border-gray-200 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-3 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 hc:text-white mb-1">{rt?.count || 'Antal'}</label>
            <input
              type="number"
              value={count}
              onChange={(e) => setCount(e.target.value)}
              min="1"
              max="100"
              className="w-full rounded-lg border border-gray-200 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-3 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button
          onClick={generate}
          className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-3 font-medium text-white transition-colors hover:bg-blue-700"
        >
          <Shuffle className="h-4 w-4" />
          {rt?.generate || 'Generera'}
        </button>

        {results.length > 0 && (
          <div className="rounded-lg bg-gray-100 dark:bg-gray-800 hc:bg-gray-900 hc:border hc:border-white p-4">
            <div className="flex items-start justify-between gap-2">
              <div className="flex flex-wrap gap-2">
                {results.map((n, i) => (
                  <span
                    key={i}
                    className="inline-block rounded-lg bg-blue-500/20 px-3 py-1.5 font-mono text-lg font-bold text-blue-600 dark:text-blue-400 hc:text-blue-300"
                  >
                    {n}
                  </span>
                ))}
              </div>
              <button
                onClick={copy}
                className="shrink-0 rounded-lg bg-gray-200 dark:bg-gray-700 hc:bg-gray-800 hc:border hc:border-white p-2 text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
