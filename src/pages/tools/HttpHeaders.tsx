import { useState } from 'react'
import { Search, Copy, Check } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

export default function HttpHeaders() {
  const { t } = useLanguage()
  const translation = t.tools['http-headers']
  const ht = t.httpHeaders

  const [url, setUrl] = useState('')
  const [headers, setHeaders] = useState<[string, string][]>([])
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState('')

  const fetchHeaders = async () => {
    let target = url.trim()
    if (!target) return
    if (!target.startsWith('http')) target = 'https://' + target
    setLoading(true)
    setError('')
    setHeaders([])
    setStatus('')
    try {
      // Use a public headers API to avoid CORS
      const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(target)}`
      const res = await fetch(proxyUrl)
      const headerEntries: [string, string][] = []
      res.headers.forEach((value, key) => {
        headerEntries.push([key, value])
      })
      setHeaders(headerEntries)
      setStatus(`${res.status} ${res.statusText}`)
    } catch {
      // Fallback: try direct fetch (may fail with CORS)
      try {
        const res = await fetch(target, { method: 'HEAD', mode: 'cors' })
        const headerEntries: [string, string][] = []
        res.headers.forEach((value, key) => {
          headerEntries.push([key, value])
        })
        setHeaders(headerEntries)
        setStatus(`${res.status} ${res.statusText}`)
      } catch {
        setError(ht?.error || 'Kunde inte hämta headers. CORS kan blockera begäran.')
      }
    } finally {
      setLoading(false)
    }
  }

  const copyAll = async () => {
    const text = headers.map(([k, v]) => `${k}: ${v}`).join('\n')
    await navigator.clipboard.writeText(text)
    setCopied('all')
    setTimeout(() => setCopied(''), 2000)
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6 py-10">
      <BackLink />

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{translation?.name}</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400 hc:text-gray-200">{translation?.description}</p>
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4 space-y-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && fetchHeaders()}
            placeholder={ht?.placeholder || 'https://example.com'}
            className="flex-1 rounded-lg border border-gray-200 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-4 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={fetchHeaders}
            disabled={loading || !url.trim()}
            className="flex items-center gap-2 rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
          >
            <Search className="h-4 w-4" />
            {ht?.fetch || 'Hämta'}
          </button>
        </div>

        {loading && (
          <div className="text-center py-4 text-gray-500 dark:text-gray-400 hc:text-gray-300">{ht?.loading || 'Hämtar...'}</div>
        )}

        {error && (
          <p className="text-sm text-red-500 dark:text-red-400 hc:text-red-300">{error}</p>
        )}

        {headers.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              {status && (
                <span className={`inline-block rounded-lg px-3 py-1 text-sm font-mono font-medium ${
                  status.startsWith('2') ? 'bg-green-500/20 text-green-600 dark:text-green-400 hc:text-green-300' :
                  status.startsWith('3') ? 'bg-blue-500/20 text-blue-600 dark:text-blue-400 hc:text-blue-300' :
                  'bg-red-500/20 text-red-600 dark:text-red-400 hc:text-red-300'
                }`}>
                  {status}
                </span>
              )}
              <button
                onClick={copyAll}
                className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hc:text-gray-300 hover:text-gray-700 dark:hover:text-white"
              >
                {copied === 'all' ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
                {copied === 'all' ? (ht?.copied || 'Kopierat!') : (ht?.copyAll || 'Kopiera alla')}
              </button>
            </div>

            <div className="rounded-lg bg-gray-100 dark:bg-gray-800 hc:bg-gray-900 hc:border hc:border-white overflow-hidden max-h-96 overflow-y-auto">
              {headers.map(([key, value], i) => (
                <div key={i} className="flex border-b border-gray-200 dark:border-gray-700 hc:border-gray-600 last:border-0">
                  <div className="w-1/3 px-3 py-2 text-xs font-medium font-mono text-blue-600 dark:text-blue-400 hc:text-blue-300 truncate">
                    {key}
                  </div>
                  <div className="flex-1 px-3 py-2 text-xs font-mono text-gray-700 dark:text-gray-300 hc:text-gray-200 break-all">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
