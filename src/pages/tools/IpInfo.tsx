import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, RefreshCw, Copy, Check } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

interface IpData {
  ip: string
  city: string
  region: string
  country_name: string
  org: string
  timezone: string
  latitude: number
  longitude: number
}

export default function IpInfo() {
  const { t } = useLanguage()
  const translation = t.tools['ip-info']
  const ip = t.ipInfo

  const [data, setData] = useState<IpData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const fetchIp = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('https://ipapi.co/json/')
      if (!res.ok) throw new Error('Failed to fetch')
      const json = await res.json()
      setData(json)
    } catch {
      setError(ip?.error ?? 'Kunde inte hämta IP-information. Kontrollera din internetanslutning.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchIp()
  }, [])

  const copyIp = async () => {
    if (!data?.ip) return
    await navigator.clipboard.writeText(data.ip)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const rows: { label: string; value: string }[] = data ? [
    { label: ip?.ipAddress ?? 'IP-adress', value: data.ip },
    { label: ip?.city ?? 'Stad', value: data.city },
    { label: ip?.region ?? 'Region', value: data.region },
    { label: ip?.country ?? 'Land', value: data.country_name },
    { label: ip?.isp ?? 'Operatör (ISP)', value: data.org },
    { label: ip?.timezone ?? 'Tidszon', value: data.timezone },
    { label: ip?.coordinates ?? 'Koordinater', value: `${data.latitude}, ${data.longitude}` },
  ] : []

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
        {translation?.hint && (
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500 hc:text-gray-300 italic">{translation.hint}</p>
        )}
      </div>

      {loading && (
        <div className="flex items-center justify-center py-12">
          <RefreshCw className="h-6 w-6 animate-spin text-gray-400" />
        </div>
      )}

      {error && (
        <div className="rounded-xl border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-4 text-sm text-red-700 dark:text-red-400">
          {error}
          <button
            onClick={fetchIp}
            className="ml-3 underline hover:no-underline"
          >
            {ip?.retry ?? 'Försök igen'}
          </button>
        </div>
      )}

      {data && !loading && (
        <>
          {/* Big IP display */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-6 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{ip?.yourIp ?? 'Din IP-adress'}</p>
            <p className="text-3xl font-bold font-mono text-gray-900 dark:text-white">{data.ip}</p>
            <div className="mt-3 flex justify-center gap-2">
              <button
                onClick={copyIp}
                className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white px-3 py-1.5 text-xs text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? (ip?.copied ?? 'Kopierat!') : (ip?.copy ?? 'Kopiera')}
              </button>
              <button
                onClick={fetchIp}
                className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white px-3 py-1.5 text-xs text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                {ip?.refresh ?? 'Uppdatera'}
              </button>
            </div>
          </div>

          {/* Details */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black overflow-hidden">
            {rows.map((row, i) => (
              <div
                key={row.label}
                className={`flex items-center justify-between px-4 py-3 ${
                  i > 0 ? 'border-t border-gray-200 dark:border-gray-700 hc:border-gray-600' : ''
                }`}
              >
                <span className="text-sm text-gray-500 dark:text-gray-400 hc:text-gray-300">{row.label}</span>
                <span className="text-sm font-medium text-gray-900 dark:text-white font-mono">{row.value}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
