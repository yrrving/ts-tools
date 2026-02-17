import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

interface DiffLine {
  type: 'same' | 'added' | 'removed'
  text: string
}

function computeDiff(a: string, b: string): DiffLine[] {
  const linesA = a.split('\n')
  const linesB = b.split('\n')
  const m = linesA.length
  const n = linesB.length

  // LCS table
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = linesA[i - 1] === linesB[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1])
    }
  }

  // Backtrack
  const result: DiffLine[] = []
  let i = m, j = n
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && linesA[i - 1] === linesB[j - 1]) {
      result.unshift({ type: 'same', text: linesA[i - 1] })
      i--; j--
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      result.unshift({ type: 'added', text: linesB[j - 1] })
      j--
    } else {
      result.unshift({ type: 'removed', text: linesA[i - 1] })
      i--
    }
  }

  return result
}

export default function DiffCompare() {
  const { t } = useLanguage()
  const translation = t.tools['diff-jamforare']
  const dt = t.diffCompare

  const [textA, setTextA] = useState('')
  const [textB, setTextB] = useState('')
  const [diff, setDiff] = useState<DiffLine[] | null>(null)

  const compare = () => {
    setDiff(computeDiff(textA, textB))
  }

  const added = diff?.filter((d) => d.type === 'added').length || 0
  const removed = diff?.filter((d) => d.type === 'removed').length || 0

  return (
    <div className="mx-auto max-w-4xl space-y-6 py-10">
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
        {translation?.hint && (
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500 hc:text-gray-300 italic">{translation.hint}</p>
        )}
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4 space-y-4">
        {/* Two text areas side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 hc:text-white mb-1">
              {dt?.original || 'Original'}
            </label>
            <textarea
              value={textA}
              onChange={(e) => setTextA(e.target.value)}
              placeholder={dt?.placeholderA || 'Klistra in originaltext...'}
              className="w-full h-48 rounded-lg border border-gray-200 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-4 py-3 font-mono text-sm text-gray-900 dark:text-white placeholder-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 hc:text-white mb-1">
              {dt?.modified || 'Ändrad'}
            </label>
            <textarea
              value={textB}
              onChange={(e) => setTextB(e.target.value)}
              placeholder={dt?.placeholderB || 'Klistra in ändrad text...'}
              className="w-full h-48 rounded-lg border border-gray-200 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-4 py-3 font-mono text-sm text-gray-900 dark:text-white placeholder-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button
          onClick={compare}
          disabled={!textA && !textB}
          className="w-full rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-3 font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
        >
          {dt?.compare || 'Jämför'}
        </button>

        {/* Results */}
        {diff && (
          <div className="space-y-3">
            <div className="flex gap-4 text-sm">
              <span className="text-green-600 dark:text-green-400 hc:text-green-300">+{added} {dt?.linesAdded || 'tillagda'}</span>
              <span className="text-red-600 dark:text-red-400 hc:text-red-300">-{removed} {dt?.linesRemoved || 'borttagna'}</span>
            </div>
            <div className="rounded-lg bg-gray-100 dark:bg-gray-800 hc:bg-gray-900 hc:border hc:border-white overflow-hidden max-h-96 overflow-y-auto">
              {diff.map((line, i) => (
                <div
                  key={i}
                  className={`px-4 py-0.5 font-mono text-sm border-l-4 ${
                    line.type === 'added'
                      ? 'bg-green-50 dark:bg-green-900/20 hc:bg-green-900/40 border-green-500 text-green-800 dark:text-green-300 hc:text-green-200'
                      : line.type === 'removed'
                      ? 'bg-red-50 dark:bg-red-900/20 hc:bg-red-900/40 border-red-500 text-red-800 dark:text-red-300 hc:text-red-200'
                      : 'border-transparent text-gray-700 dark:text-gray-300 hc:text-gray-200'
                  }`}
                >
                  <span className="inline-block w-6 text-gray-400 dark:text-gray-500 select-none">
                    {line.type === 'added' ? '+' : line.type === 'removed' ? '-' : ' '}
                  </span>
                  {line.text || '\u00A0'}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
