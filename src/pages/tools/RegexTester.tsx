import { useState, useMemo } from 'react'
import { Copy, Check } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

const FLAG_OPTIONS = ['g', 'i', 'm', 's'] as const

interface Match {
  text: string
  index: number
  groups: string[]
}

export default function RegexTester() {
  const { t } = useLanguage()
  const translation = t.tools['regex-testare']
  const r = t.regexTester

  const [pattern, setPattern] = useState('')
  const [flags, setFlags] = useState<Set<string>>(new Set(['g']))
  const [testString, setTestString] = useState('')
  const [copied, setCopied] = useState(false)

  const toggleFlag = (flag: string) => {
    setFlags((prev) => {
      const next = new Set(prev)
      if (next.has(flag)) next.delete(flag)
      else next.add(flag)
      return next
    })
  }

  const { matches, error, highlighted } = useMemo(() => {
    if (!pattern || !testString) return { matches: [], error: '', highlighted: '' }

    try {
      const flagStr = [...flags].sort().join('')
      const regex = new RegExp(pattern, flagStr)
      const found: Match[] = []

      if (flags.has('g')) {
        let m: RegExpExecArray | null
        while ((m = regex.exec(testString)) !== null) {
          found.push({
            text: m[0],
            index: m.index,
            groups: m.slice(1),
          })
          if (m[0].length === 0) regex.lastIndex++
        }
      } else {
        const m = regex.exec(testString)
        if (m) {
          found.push({
            text: m[0],
            index: m.index,
            groups: m.slice(1),
          })
        }
      }

      // Build highlighted string
      let html = ''
      let lastIdx = 0
      for (const match of found) {
        if (match.index > lastIdx) {
          html += escapeHtml(testString.slice(lastIdx, match.index))
        }
        html += `<mark class="bg-yellow-300 dark:bg-yellow-600 text-gray-900 dark:text-white rounded px-0.5">${escapeHtml(match.text)}</mark>`
        lastIdx = match.index + match.text.length
      }
      if (lastIdx < testString.length) {
        html += escapeHtml(testString.slice(lastIdx))
      }

      return { matches: found, error: '', highlighted: html }
    } catch (e) {
      return { matches: [], error: (e as Error).message, highlighted: '' }
    }
  }, [pattern, flags, testString])

  const copyRegex = async () => {
    if (!pattern) return
    const flagStr = [...flags].sort().join('')
    await navigator.clipboard.writeText(`/${pattern}/${flagStr}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6 py-10">
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

      {/* Pattern + flags */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          {r?.pattern ?? 'Mönster'}
        </label>
        <div className="flex gap-2">
          <div className="flex flex-1 items-center rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-3 font-mono text-sm">
            <span className="text-gray-400">/</span>
            <input
              type="text"
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              placeholder={r?.patternPlaceholder ?? 'Skriv regex här...'}
              spellCheck={false}
              className="flex-1 bg-transparent px-1 py-3 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none"
            />
            <span className="text-gray-400">/{[...flags].sort().join('')}</span>
          </div>
          <button
            onClick={copyRegex}
            disabled={!pattern}
            className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white px-3 py-2 text-xs text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-40"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
            {copied ? (r?.copied ?? 'Kopierat!') : (r?.copy ?? 'Kopiera')}
          </button>
        </div>

        {/* Flags */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-xs text-gray-500 dark:text-gray-400">{r?.flags ?? 'Flaggor'}:</span>
          {FLAG_OPTIONS.map((flag) => (
            <button
              key={flag}
              onClick={() => toggleFlag(flag)}
              className={`rounded-md px-2.5 py-1 text-xs font-mono font-medium transition-colors ${
                flags.has(flag)
                  ? 'bg-blue-600 text-white hc:bg-white hc:text-black'
                  : 'bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 text-gray-500 dark:text-gray-400 hc:text-gray-400 hc:border hc:border-gray-600'
              }`}
            >
              {flag}
            </button>
          ))}
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="rounded-xl border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-4 text-sm text-red-700 dark:text-red-400">
          {error}
        </div>
      )}

      {/* Test string */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          {r?.testString ?? 'Teststräng'}
        </label>
        <textarea
          value={testString}
          onChange={(e) => setTestString(e.target.value)}
          placeholder={r?.testPlaceholder ?? 'Skriv text att testa mot...'}
          rows={5}
          spellCheck={false}
          className="w-full resize-y rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-4 py-3 font-mono text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Highlighted result */}
      {highlighted && (
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
          <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            {r?.result ?? 'Resultat'}
          </label>
          <div
            className="overflow-auto rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-4 py-3 font-mono text-sm text-gray-900 dark:text-white whitespace-pre-wrap break-all"
            dangerouslySetInnerHTML={{ __html: highlighted }}
          />
        </div>
      )}

      {/* Matches list */}
      {matches.length > 0 && (
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
          <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            {r?.matches ?? 'Matchningar'} ({matches.length})
          </label>
          <div className="space-y-2">
            {matches.map((m, i) => (
              <div
                key={i}
                className="rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-4 py-2 font-mono text-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 dark:text-white">
                    <span className="text-gray-400 dark:text-gray-500 text-xs mr-2">#{i + 1}</span>
                    &quot;{m.text}&quot;
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500">
                    {r?.index ?? 'index'}: {m.index}
                  </span>
                </div>
                {m.groups.length > 0 && (
                  <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {r?.groups ?? 'Grupper'}: {m.groups.map((g, j) => (
                      <span key={j} className="mr-2">
                        ${j + 1}=&quot;{g}&quot;
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
