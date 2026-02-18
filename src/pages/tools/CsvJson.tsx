import { useState } from 'react'
import { Copy, Check, ArrowRightLeft } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

function csvToJson(csv: string): string {
  const lines = csv.trim().split('\n')
  if (lines.length < 2) return '[]'
  const headers = parseCsvLine(lines[0])
  const result = lines.slice(1).filter((l) => l.trim()).map((line) => {
    const values = parseCsvLine(line)
    const obj: Record<string, string> = {}
    headers.forEach((h, i) => { obj[h] = values[i] || '' })
    return obj
  })
  return JSON.stringify(result, null, 2)
}

function parseCsvLine(line: string): string[] {
  const result: string[] = []
  let current = ''
  let inQuotes = false
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"'
        i++
      } else {
        inQuotes = !inQuotes
      }
    } else if ((ch === ',' || ch === ';') && !inQuotes) {
      result.push(current.trim())
      current = ''
    } else {
      current += ch
    }
  }
  result.push(current.trim())
  return result
}

function jsonToCsv(json: string): string {
  const data = JSON.parse(json)
  if (!Array.isArray(data) || data.length === 0) return ''
  const headers = Object.keys(data[0])
  const lines = [headers.join(',')]
  for (const row of data) {
    const values = headers.map((h) => {
      const val = String(row[h] ?? '')
      return val.includes(',') || val.includes('"') || val.includes('\n')
        ? `"${val.replace(/"/g, '""')}"`
        : val
    })
    lines.push(values.join(','))
  }
  return lines.join('\n')
}

type Mode = 'csv-to-json' | 'json-to-csv'

export default function CsvJson() {
  const { t } = useLanguage()
  const translation = t.tools['csv-json']
  const ct = t.csvJson

  const [mode, setMode] = useState<Mode>('csv-to-json')
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const convert = () => {
    setError('')
    try {
      if (mode === 'csv-to-json') {
        setOutput(csvToJson(input))
      } else {
        setOutput(jsonToCsv(input))
      }
    } catch {
      setError(ct?.error || 'Konverteringsfel — kontrollera indata')
      setOutput('')
    }
  }

  const swap = () => {
    setMode(mode === 'csv-to-json' ? 'json-to-csv' : 'csv-to-json')
    setInput(output)
    setOutput('')
    setError('')
  }

  const copy = async () => {
    await navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6 py-10">
      <BackLink />

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{translation?.name}</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400 hc:text-gray-200">{translation?.description}</p>
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4 space-y-4">
        {/* Mode indicator */}
        <div className="flex items-center justify-center gap-3">
          <span className={`text-sm font-medium ${mode === 'csv-to-json' ? 'text-blue-600 dark:text-blue-400 hc:text-blue-300' : 'text-gray-500 dark:text-gray-400 hc:text-gray-300'}`}>CSV</span>
          <button
            onClick={swap}
            className="rounded-lg bg-gray-100 dark:bg-gray-600 hc:bg-gray-900 hc:border hc:border-white p-2 text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-500"
          >
            <ArrowRightLeft className="h-4 w-4" />
          </button>
          <span className={`text-sm font-medium ${mode === 'json-to-csv' ? 'text-blue-600 dark:text-blue-400 hc:text-blue-300' : 'text-gray-500 dark:text-gray-400 hc:text-gray-300'}`}>JSON</span>
        </div>

        {/* Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 hc:text-white mb-1">
            {ct?.input || 'Indata'} ({mode === 'csv-to-json' ? 'CSV' : 'JSON'})
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={mode === 'csv-to-json' ? (ct?.csvPlaceholder || 'namn,ålder,stad\nAnna,28,Stockholm') : (ct?.jsonPlaceholder || '[{"namn":"Anna","ålder":28}]')}
            className="w-full h-40 rounded-lg border border-gray-200 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-4 py-3 font-mono text-sm text-gray-900 dark:text-white placeholder-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Convert button */}
        <button
          onClick={convert}
          disabled={!input.trim()}
          className="w-full rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-3 font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
        >
          {ct?.convert || 'Konvertera'}
        </button>

        {error && (
          <p className="text-sm text-red-500 dark:text-red-400 hc:text-red-300">{error}</p>
        )}

        {/* Output */}
        {output && (
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 hc:text-white">
                {ct?.output || 'Resultat'} ({mode === 'csv-to-json' ? 'JSON' : 'CSV'})
              </label>
              <button
                onClick={copy}
                className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hc:text-gray-300 hover:text-gray-700 dark:hover:text-white"
              >
                {copied ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
                {copied ? (ct?.copied || 'Kopierat!') : (ct?.copy || 'Kopiera')}
              </button>
            </div>
            <pre className="rounded-lg bg-gray-100 dark:bg-gray-800 hc:bg-gray-900 hc:border hc:border-white p-4 font-mono text-sm text-gray-900 dark:text-white overflow-x-auto max-h-64">
              {output}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}
