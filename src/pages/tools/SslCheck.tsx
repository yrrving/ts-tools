import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ShieldCheck, ShieldAlert, Search } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

interface SslInfo {
  subject: string
  issuer: string
  validFrom: string
  validTo: string
  daysLeft: number
  protocol: string
  valid: boolean
}

export default function SslCheck() {
  const { t } = useLanguage()
  const translation = t.tools['ssl-kontroll']
  const st = t.sslCheck

  const [domain, setDomain] = useState('')
  const [info, setInfo] = useState<SslInfo | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const check = async () => {
    const clean = domain.trim().replace(/^https?:\/\//, '').replace(/\/.*$/, '')
    if (!clean) return
    setLoading(true)
    setError('')
    setInfo(null)
    try {
      // Use a public SSL check API
      const res = await fetch(`https://ssl-checker.io/api/v1/check/${encodeURIComponent(clean)}`)
      if (!res.ok) throw new Error('API error')
      const data = await res.json()
      const validTo = new Date(data.result?.valid_till || data.valid_till || '')
      const daysLeft = Math.ceil((validTo.getTime() - Date.now()) / (1000 * 60 * 60 * 24))
      setInfo({
        subject: data.result?.subject || data.subject || clean,
        issuer: data.result?.issuer || data.issuer || '—',
        validFrom: data.result?.valid_from || data.valid_from || '—',
        validTo: data.result?.valid_till || data.valid_till || '—',
        daysLeft: isNaN(daysLeft) ? 0 : daysLeft,
        protocol: data.result?.protocol || data.protocol || 'TLS',
        valid: daysLeft > 0,
      })
    } catch {
      // Fallback: just try to fetch the site and check if HTTPS works
      try {
        await fetch(`https://${clean}`, { method: 'HEAD', mode: 'no-cors' })
        setInfo({
          subject: clean,
          issuer: st?.unknownIssuer || 'Okänd (CORS-begränsning)',
          validFrom: '—',
          validTo: '—',
          daysLeft: -1,
          protocol: 'HTTPS',
          valid: true,
        })
      } catch {
        setError(st?.error || 'Kunde inte kontrollera SSL-certifikatet. Kontrollera domänen.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto max-w-xl space-y-6 py-10">
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
            onKeyDown={(e) => e.key === 'Enter' && check()}
            placeholder={st?.placeholder || 'example.com'}
            className="flex-1 rounded-lg border border-gray-200 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-4 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={check}
            disabled={loading || !domain.trim()}
            className="flex items-center gap-2 rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
          >
            <Search className="h-4 w-4" />
            {st?.check || 'Kontrollera'}
          </button>
        </div>

        {loading && (
          <div className="text-center py-4 text-gray-500 dark:text-gray-400 hc:text-gray-300">{st?.loading || 'Kontrollerar...'}</div>
        )}

        {error && (
          <p className="text-sm text-red-500 dark:text-red-400 hc:text-red-300">{error}</p>
        )}

        {info && (
          <div className="space-y-4">
            <div className={`flex items-center gap-3 rounded-lg p-4 ${
              info.valid
                ? 'bg-green-50 dark:bg-green-900/20 hc:bg-green-900/40 hc:border hc:border-green-400'
                : 'bg-red-50 dark:bg-red-900/20 hc:bg-red-900/40 hc:border hc:border-red-400'
            }`}>
              {info.valid ? (
                <ShieldCheck className="h-8 w-8 text-green-600 dark:text-green-400 hc:text-green-300" />
              ) : (
                <ShieldAlert className="h-8 w-8 text-red-600 dark:text-red-400 hc:text-red-300" />
              )}
              <div>
                <div className={`font-medium ${info.valid ? 'text-green-800 dark:text-green-300 hc:text-green-200' : 'text-red-800 dark:text-red-300 hc:text-red-200'}`}>
                  {info.valid ? (st?.valid || 'SSL-certifikatet är giltigt') : (st?.invalid || 'SSL-certifikatet är ogiltigt')}
                </div>
                {info.daysLeft > 0 && (
                  <div className="text-sm text-gray-600 dark:text-gray-400 hc:text-gray-300">
                    {info.daysLeft} {st?.daysLeft || 'dagar kvar'}
                  </div>
                )}
              </div>
            </div>

            <div className="divide-y divide-gray-200 dark:divide-gray-600 hc:divide-white">
              {[
                { label: st?.subject || 'Domän', value: info.subject },
                { label: st?.issuer || 'Utfärdare', value: info.issuer },
                { label: st?.validFrom || 'Giltig från', value: info.validFrom },
                { label: st?.validTo || 'Giltig till', value: info.validTo },
                { label: st?.protocol || 'Protokoll', value: info.protocol },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between py-2.5">
                  <span className="text-sm text-gray-600 dark:text-gray-400 hc:text-gray-300">{row.label}</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white text-right max-w-[60%] truncate">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
