import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Search, Copy, Check } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

interface DnsRecord {
  name: string
  type: number
  TTL: number
  data: string
}

const RECORD_TYPES = ['A', 'AAAA', 'CNAME', 'MX', 'NS', 'TXT'] as const
type RecordType = typeof RECORD_TYPES[number]

const TYPE_NUMBERS: Record<string, number> = { A: 1, AAAA: 28, CNAME: 5, MX: 15, NS: 2, TXT: 16 }

export default function DnsLookup() {
  const { t } = useLanguage()
  const translation = t.tools['dns-uppslagning']
  const dt = t.dnsLookup

  const [domain, setDomain] = useState('')
  const [recordType, setRecordType] = useState<RecordType>('A')
  const [records, setRecords] = useState<DnsRecord[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState('')

  const lookup = async () => {
    const clean = domain.trim().replace(/^https?:\/\//, '').replace(/\/.*$/, '')
    if (!clean) return
    setLoading(true)
    setError('')
    setRecords([])
    try {
      const res = await fetch(`https://dns.google/resolve?name=${encodeURIComponent(clean)}&type=${TYPE_NUMBERS[recordType]}`)
      const data = await res.json()
      if (data.Answer) {
        setRecords(data.Answer)
      } else {
        setRecords([])
        setError(dt?.noRecords || 'Inga poster hittades')
      }
    } catch {
      setError(dt?.error || 'Kunde inte slå upp domänen')
    } finally {
      setLoading(false)
    }
  }

  const copyValue = async (val: string, key: string) => {
    await navigator.clipboard.writeText(val)
    setCopied(key)
    setTimeout(() => setCopied(''), 2000)
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
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{translation?.name}</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400 hc:text-gray-200">{translation?.description}</p>
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4 space-y-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && lookup()}
            placeholder={dt?.placeholder || 'example.com'}
            className="flex-1 rounded-lg border border-gray-200 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-4 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={lookup}
            disabled={loading || !domain.trim()}
            className="flex items-center gap-2 rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
          >
            <Search className="h-4 w-4" />
            {dt?.search || 'Sök'}
          </button>
        </div>

        <div className="flex gap-2 flex-wrap">
          {RECORD_TYPES.map((rt) => (
            <button
              key={rt}
              onClick={() => setRecordType(rt)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                recordType === rt
                  ? 'bg-blue-600 text-white hc:bg-white hc:text-black'
                  : 'bg-gray-100 dark:bg-gray-600 hc:bg-gray-900 text-gray-600 dark:text-gray-400 hc:text-gray-400 hc:border hc:border-gray-600'
              }`}
            >
              {rt}
            </button>
          ))}
        </div>

        {loading && (
          <div className="text-center py-4 text-gray-500 dark:text-gray-400 hc:text-gray-300">{dt?.loading || 'Söker...'}</div>
        )}

        {error && (
          <p className="text-sm text-red-500 dark:text-red-400 hc:text-red-300">{error}</p>
        )}

        {records.length > 0 && (
          <div className="space-y-2">
            {records.map((r, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-lg bg-gray-100 dark:bg-gray-800 hc:bg-gray-900 hc:border hc:border-gray-700 px-4 py-3"
              >
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-sm text-gray-900 dark:text-white truncate">{r.data}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 hc:text-gray-300 mt-0.5">
                    TTL: {r.TTL}s
                  </div>
                </div>
                <button
                  onClick={() => copyValue(r.data, `r${i}`)}
                  className="shrink-0 ml-2 text-gray-400 hover:text-gray-700 dark:hover:text-white"
                >
                  {copied === `r${i}` ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
