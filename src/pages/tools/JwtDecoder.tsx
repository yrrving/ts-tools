import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Copy, Check } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

function decodeJwt(token: string): { header: string; payload: string; signature: string } | null {
  const parts = token.trim().split('.')
  if (parts.length !== 3) return null
  try {
    const header = JSON.stringify(JSON.parse(atob(parts[0].replace(/-/g, '+').replace(/_/g, '/'))), null, 2)
    const payload = JSON.stringify(JSON.parse(atob(parts[1].replace(/-/g, '+').replace(/_/g, '/'))), null, 2)
    return { header, payload, signature: parts[2] }
  } catch {
    return null
  }
}

function formatTimestamp(val: unknown): string | null {
  if (typeof val !== 'number') return null
  if (val < 1000000000 || val > 9999999999) return null
  return new Date(val * 1000).toLocaleString()
}

export default function JwtDecoder() {
  const { t } = useLanguage()
  const translation = t.tools['jwt-dekodare']
  const jt = t.jwtDecoder

  const [input, setInput] = useState('')
  const [copied, setCopied] = useState('')

  const decoded = input.trim() ? decodeJwt(input) : null
  const isValid = input.trim().length > 0 ? decoded !== null : null

  const copyText = async (text: string, key: string) => {
    await navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(''), 2000)
  }

  // Check for exp/iat/nbf timestamps in payload
  let timestamps: { key: string; label: string; value: string }[] = []
  if (decoded) {
    try {
      const payload = JSON.parse(decoded.payload)
      const fields = [
        { key: 'iat', label: jt?.issuedAt || 'Utfärdat' },
        { key: 'exp', label: jt?.expires || 'Utgår' },
        { key: 'nbf', label: jt?.notBefore || 'Ej före' },
      ]
      for (const f of fields) {
        const ts = formatTimestamp(payload[f.key])
        if (ts) timestamps.push({ key: f.key, label: f.label, value: ts })
      }
    } catch { /* ignore */ }
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
        {translation?.hint && (
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500 hc:text-gray-300 italic">{translation.hint}</p>
        )}
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 hc:text-white mb-1">
            {jt?.input || 'JWT-token'}
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={jt?.placeholder || 'Klistra in en JWT-token här...'}
            className="w-full h-24 rounded-lg border border-gray-200 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-4 py-3 font-mono text-sm text-gray-900 dark:text-white placeholder-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {isValid === false && (
            <p className="mt-1 text-sm text-red-500 dark:text-red-400 hc:text-red-300">{jt?.invalid || 'Ogiltig JWT-token'}</p>
          )}
        </div>

        {decoded && (
          <div className="space-y-4">
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hc:text-white">Header</span>
                <button
                  onClick={() => copyText(decoded.header, 'header')}
                  className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hc:text-gray-300 hover:text-gray-700 dark:hover:text-white"
                >
                  {copied === 'header' ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
                </button>
              </div>
              <pre className="rounded-lg bg-blue-50 dark:bg-blue-900/20 hc:bg-gray-900 hc:border hc:border-blue-400 p-3 text-sm font-mono text-blue-800 dark:text-blue-300 hc:text-blue-200 overflow-x-auto">
                {decoded.header}
              </pre>
            </div>

            {/* Payload */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hc:text-white">Payload</span>
                <button
                  onClick={() => copyText(decoded.payload, 'payload')}
                  className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hc:text-gray-300 hover:text-gray-700 dark:hover:text-white"
                >
                  {copied === 'payload' ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
                </button>
              </div>
              <pre className="rounded-lg bg-green-50 dark:bg-green-900/20 hc:bg-gray-900 hc:border hc:border-green-400 p-3 text-sm font-mono text-green-800 dark:text-green-300 hc:text-green-200 overflow-x-auto">
                {decoded.payload}
              </pre>
            </div>

            {/* Timestamps */}
            {timestamps.length > 0 && (
              <div className="rounded-lg bg-gray-100 dark:bg-gray-800 hc:bg-gray-900 hc:border hc:border-white p-3 space-y-1">
                {timestamps.map((ts) => (
                  <div key={ts.key} className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400 hc:text-gray-300">{ts.label} ({ts.key})</span>
                    <span className="font-mono text-gray-900 dark:text-white">{ts.value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Signature */}
            <div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hc:text-white">{jt?.signature || 'Signatur'}</span>
              <div className="mt-1 rounded-lg bg-red-50 dark:bg-red-900/20 hc:bg-gray-900 hc:border hc:border-red-400 p-3">
                <code className="text-xs font-mono text-red-800 dark:text-red-300 hc:text-red-200 break-all">{decoded.signature}</code>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
