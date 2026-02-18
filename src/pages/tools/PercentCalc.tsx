import { useState } from 'react'
import { useLanguage } from '../../context/LanguageContext'

type Mode = 'of' | 'is' | 'change'

export default function PercentCalc() {
  const { t } = useLanguage()
  const translation = t.tools['procent-raknare']
  const pt = t.percentCalc

  const [mode, setMode] = useState<Mode>('of')
  const [a, setA] = useState('')
  const [b, setB] = useState('')

  const getResult = (): string => {
    const na = parseFloat(a)
    const nb = parseFloat(b)
    if (isNaN(na) || isNaN(nb)) return '—'
    if (mode === 'of') return String(parseFloat(((na / 100) * nb).toFixed(10)))
    if (mode === 'is') return nb !== 0 ? String(parseFloat(((na / nb) * 100).toFixed(10))) + '%' : '—'
    return nb !== 0 ? String(parseFloat((((na - nb) / Math.abs(nb)) * 100).toFixed(10))) + '%' : '—'
  }

  const modes: { key: Mode; label: string }[] = [
    { key: 'of', label: pt?.modeOf || 'X% av Y' },
    { key: 'is', label: pt?.modeIs || 'X är ?% av Y' },
    { key: 'change', label: pt?.modeChange || '% förändring' },
  ]

  const labelA = mode === 'of' ? (pt?.percent || 'Procent') : mode === 'is' ? (pt?.value || 'Värde') : (pt?.from || 'Från')
  const labelB = mode === 'of' ? (pt?.value || 'Värde') : mode === 'is' ? (pt?.total || 'Totalt') : (pt?.to || 'Till')

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
        {/* Mode tabs */}
        <div className="flex gap-2">
          {modes.map((m) => (
            <button
              key={m.key}
              onClick={() => { setMode(m.key); setA(''); setB('') }}
              className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                mode === m.key
                  ? 'bg-blue-600 text-white hc:bg-white hc:text-black'
                  : 'bg-gray-100 dark:bg-gray-600 hc:bg-gray-900 text-gray-600 dark:text-gray-400 hc:text-gray-400 hc:border hc:border-gray-600'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 hc:text-white mb-1">{labelA}</label>
            <input
              type="number"
              value={a}
              onChange={(e) => setA(e.target.value)}
              className="w-full rounded-lg border border-gray-200 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-3 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 hc:text-white mb-1">{labelB}</label>
            <input
              type="number"
              value={b}
              onChange={(e) => setB(e.target.value)}
              className="w-full rounded-lg border border-gray-200 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-3 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="0"
            />
          </div>
        </div>

        {/* Result */}
        <div className="rounded-lg bg-gray-100 dark:bg-gray-800 hc:bg-gray-900 hc:border hc:border-white p-4 text-center">
          <div className="text-sm text-gray-500 dark:text-gray-400 hc:text-gray-300">{pt?.result || 'Resultat'}</div>
          <div className="text-3xl font-bold font-mono text-gray-900 dark:text-white mt-1">{getResult()}</div>
        </div>
      </div>
    </div>
  )
}
