import { useState, useCallback } from 'react'
import { Copy, Check, RefreshCw } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

const CHARSETS = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
}

function generatePassword(length: number, options: Record<string, boolean>): string {
  let chars = ''
  if (options.uppercase) chars += CHARSETS.uppercase
  if (options.lowercase) chars += CHARSETS.lowercase
  if (options.numbers) chars += CHARSETS.numbers
  if (options.symbols) chars += CHARSETS.symbols
  if (!chars) chars = CHARSETS.lowercase

  const array = new Uint32Array(length)
  crypto.getRandomValues(array)
  return Array.from(array, (n) => chars[n % chars.length]).join('')
}

function getStrength(password: string): { label: string; color: string; width: string } {
  let score = 0
  if (password.length >= 12) score++
  if (password.length >= 20) score++
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++
  if (/\d/.test(password)) score++
  if (/[^a-zA-Z0-9]/.test(password)) score++

  if (score <= 1) return { label: 'Svag', color: 'bg-red-500', width: 'w-1/5' }
  if (score === 2) return { label: 'Okej', color: 'bg-orange-500', width: 'w-2/5' }
  if (score === 3) return { label: 'Bra', color: 'bg-yellow-500', width: 'w-3/5' }
  if (score === 4) return { label: 'Stark', color: 'bg-green-500', width: 'w-4/5' }
  return { label: 'Mycket stark', color: 'bg-green-600', width: 'w-full' }
}

export default function PasswordGenerator() {
  const { t } = useLanguage()
  const translation = t.tools['losenordsgenerator']

  const [length, setLength] = useState(20)
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  })
  const [password, setPassword] = useState(() => generatePassword(20, { uppercase: true, lowercase: true, numbers: true, symbols: true }))
  const [copied, setCopied] = useState(false)

  const regenerate = useCallback(() => {
    setPassword(generatePassword(length, options))
    setCopied(false)
  }, [length, options])

  const handleLengthChange = (newLength: number) => {
    setLength(newLength)
    setPassword(generatePassword(newLength, options))
    setCopied(false)
  }

  const toggleOption = (key: string) => {
    const next = { ...options, [key]: !options[key as keyof typeof options] }
    const anyOn = Object.values(next).some(Boolean)
    if (!anyOn) return
    setOptions(next)
    setPassword(generatePassword(length, next))
    setCopied(false)
  }

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(password)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const strength = getStrength(password)

  const optionLabels: Record<string, string> = {
    uppercase: 'A-Z',
    lowercase: 'a-z',
    numbers: '0-9',
    symbols: '!@#$',
  }

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

      {/* Generated password */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4">
        <div className="flex items-center gap-2">
          <code className="flex-1 overflow-x-auto whitespace-nowrap rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 px-4 py-3 font-mono text-lg text-gray-900 dark:text-white">
            {password}
          </code>
          <button
            onClick={copyToClipboard}
            className="shrink-0 rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white p-3 text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
            title="Kopiera"
          >
            {copied ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
          </button>
          <button
            onClick={regenerate}
            className="shrink-0 rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white p-3 text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
            title="Generera nytt"
          >
            <RefreshCw className="h-5 w-5" />
          </button>
        </div>

        {/* Strength bar */}
        <div className="mt-3">
          <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 hc:text-gray-200">
            <span>{strength.label}</span>
            <span>{password.length} tecken</span>
          </div>
          <div className="mt-1 h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700 hc:bg-gray-800">
            <div className={`h-full rounded-full transition-all ${strength.color} ${strength.width}`} />
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="space-y-4 rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4">
        {/* Length slider */}
        <div>
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-900 dark:text-white">Längd</label>
            <span className="rounded bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 px-2 py-0.5 text-sm font-mono text-gray-900 dark:text-white">
              {length}
            </span>
          </div>
          <input
            type="range"
            min={4}
            max={64}
            value={length}
            onChange={(e) => handleLengthChange(Number(e.target.value))}
            className="mt-2 w-full accent-blue-500"
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500">
            <span>4</span>
            <span>64</span>
          </div>
        </div>

        {/* Character options */}
        <div className="flex flex-wrap gap-2">
          {Object.entries(optionLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => toggleOption(key)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                options[key as keyof typeof options]
                  ? 'bg-blue-600 text-white hc:bg-white hc:text-black'
                  : 'bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 text-gray-600 dark:text-gray-400 hc:text-gray-400 hc:border hc:border-gray-600'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
