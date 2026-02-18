import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

function detectBrowser(ua: string): string {
  if (ua.includes('Firefox/')) return 'Firefox'
  if (ua.includes('Edg/')) return 'Edge'
  if (ua.includes('OPR/') || ua.includes('Opera/')) return 'Opera'
  if (ua.includes('Chrome/') && !ua.includes('Edg/')) return 'Chrome'
  if (ua.includes('Safari/') && !ua.includes('Chrome/')) return 'Safari'
  return 'Unknown'
}

function detectOS(ua: string): string {
  if (ua.includes('Windows NT 10')) return 'Windows 10/11'
  if (ua.includes('Windows NT')) return 'Windows'
  if (ua.includes('Mac OS X')) return 'macOS'
  if (ua.includes('Android')) return 'Android'
  if (ua.includes('iPhone') || ua.includes('iPad')) return 'iOS'
  if (ua.includes('Linux')) return 'Linux'
  if (ua.includes('CrOS')) return 'Chrome OS'
  return 'Unknown'
}

function detectDevice(ua: string): string {
  if (ua.includes('Mobile') || ua.includes('Android') || ua.includes('iPhone')) return 'Mobile'
  if (ua.includes('iPad') || ua.includes('Tablet')) return 'Tablet'
  return 'Desktop'
}

export default function UserAgentInfo() {
  const { t } = useLanguage()
  const translation = t.tools['useragent-info']
  const ut = t.userAgent

  const [copied, setCopied] = useState(false)
  const ua = navigator.userAgent
  const browser = detectBrowser(ua)
  const os = detectOS(ua)
  const device = detectDevice(ua)
  const lang = navigator.language
  const languages = navigator.languages?.join(', ') || lang
  const platform = navigator.platform
  const cookiesEnabled = navigator.cookieEnabled ? (ut?.yes || 'Ja') : (ut?.no || 'Nej')
  const screenRes = `${screen.width} × ${screen.height}`
  const windowSize = `${window.innerWidth} × ${window.innerHeight}`
  const colorDepth = `${screen.colorDepth} bit`
  const pixelRatio = window.devicePixelRatio
  const touchSupport = 'ontouchstart' in window || navigator.maxTouchPoints > 0 ? (ut?.yes || 'Ja') : (ut?.no || 'Nej')
  const cores = navigator.hardwareConcurrency || '—'
  const online = navigator.onLine ? (ut?.yes || 'Ja') : (ut?.no || 'Nej')

  const copy = async () => {
    await navigator.clipboard.writeText(ua)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const rows = [
    { label: ut?.browser || 'Webbläsare', value: browser },
    { label: ut?.os || 'Operativsystem', value: os },
    { label: ut?.device || 'Enhetstyp', value: device },
    { label: ut?.platform || 'Plattform', value: platform },
    { label: ut?.language || 'Språk', value: languages },
    { label: ut?.screen || 'Skärmupplösning', value: screenRes },
    { label: ut?.window || 'Fönsterstorlek', value: windowSize },
    { label: ut?.colorDepth || 'Färgdjup', value: colorDepth },
    { label: ut?.pixelRatio || 'Pixelförhållande', value: String(pixelRatio) },
    { label: ut?.touch || 'Pekskärm', value: touchSupport },
    { label: ut?.cores || 'CPU-kärnor', value: String(cores) },
    { label: ut?.cookies || 'Cookies', value: cookiesEnabled },
    { label: ut?.onlineStatus || 'Online', value: online },
  ]

  return (
    <div className="mx-auto max-w-xl space-y-6 py-10">
      <BackLink />

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{translation?.name}</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400 hc:text-gray-200">{translation?.description}</p>
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4 space-y-4">
        {/* User Agent string */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hc:text-white">User Agent</span>
            <button
              onClick={copy}
              className="flex items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-600 hc:bg-gray-900 hc:border hc:border-white px-2.5 py-1 text-xs text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-500"
            >
              {copied ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
              {copied ? (ut?.copied || 'Kopierat!') : (ut?.copy || 'Kopiera')}
            </button>
          </div>
          <div className="rounded-lg bg-gray-100 dark:bg-gray-800 hc:bg-gray-900 hc:border hc:border-white p-3">
            <code className="text-xs text-gray-700 dark:text-gray-300 hc:text-gray-200 break-all">{ua}</code>
          </div>
        </div>

        {/* Info table */}
        <div className="divide-y divide-gray-200 dark:divide-gray-600 hc:divide-white">
          {rows.map((row) => (
            <div key={row.label} className="flex items-center justify-between py-2.5">
              <span className="text-sm text-gray-600 dark:text-gray-400 hc:text-gray-300">{row.label}</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">{row.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
