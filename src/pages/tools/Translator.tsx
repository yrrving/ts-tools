import { useState } from 'react'
import { ArrowRightLeft, Copy, Check, RefreshCw } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

const LANGUAGES = [
  { code: 'sv', label: 'Svenska' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'pt', label: 'Português' },
  { code: 'it', label: 'Italiano' },
  { code: 'nl', label: 'Nederlands' },
  { code: 'pl', label: 'Polski' },
  { code: 'ru', label: 'Русский' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
  { code: 'zh', label: '中文' },
  { code: 'ar', label: 'العربية' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'tr', label: 'Türkçe' },
  { code: 'da', label: 'Dansk' },
  { code: 'no', label: 'Norsk' },
  { code: 'fi', label: 'Suomi' },
]

export default function Translator() {
  const { t } = useLanguage()
  const translation = t.tools['oversattare']

  const [sourceLang, setSourceLang] = useState('sv')
  const [targetLang, setTargetLang] = useState('en')
  const [sourceText, setSourceText] = useState('')
  const [translatedText, setTranslatedText] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const translate = async () => {
    if (!sourceText.trim()) return
    setLoading(true)
    setError('')
    setTranslatedText('')

    try {
      const encoded = encodeURIComponent(sourceText)
      const res = await fetch(
        `https://api.mymemory.translated.net/get?q=${encoded}&langpair=${sourceLang}|${targetLang}`
      )
      if (!res.ok) throw new Error('Network error')
      const data = await res.json()

      if (data.responseStatus === 200 && data.responseData?.translatedText) {
        setTranslatedText(data.responseData.translatedText)
      } else {
        throw new Error(data.responseDetails || 'Translation failed')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Kunde inte översätta texten. Försök igen.')
    } finally {
      setLoading(false)
    }
  }

  const swapLanguages = () => {
    setSourceLang(targetLang)
    setTargetLang(sourceLang)
    setSourceText(translatedText)
    setTranslatedText(sourceText)
  }

  const copyResult = async () => {
    if (!translatedText) return
    await navigator.clipboard.writeText(translatedText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      translate()
    }
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6 py-10">
      <BackLink />

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{translation?.name}</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400 hc:text-gray-200">{translation?.description}</p>
        {translation?.hint && (
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500 hc:text-gray-300 italic">{translation.hint}</p>
        )}
      </div>

      {/* Language selection */}
      <div className="flex items-center gap-2">
        <select
          value={sourceLang}
          onChange={(e) => setSourceLang(e.target.value)}
          className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 hc:text-white"
        >
          {LANGUAGES.map((lang) => (
            <option key={lang.code} value={lang.code}>{lang.label}</option>
          ))}
        </select>

        <button
          onClick={swapLanguages}
          className="rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-2.5 text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <ArrowRightLeft className="h-4 w-4" />
        </button>

        <select
          value={targetLang}
          onChange={(e) => setTargetLang(e.target.value)}
          className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 hc:text-white"
        >
          {LANGUAGES.map((lang) => (
            <option key={lang.code} value={lang.code}>{lang.label}</option>
          ))}
        </select>
      </div>

      {/* Source text */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          {LANGUAGES.find((l) => l.code === sourceLang)?.label}
        </label>
        <textarea
          value={sourceText}
          onChange={(e) => setSourceText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Skriv text att översätta..."
          rows={5}
          className="w-full resize-y rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Translate button */}
      <button
        onClick={translate}
        disabled={loading || !sourceText.trim()}
        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? (
          <>
            <RefreshCw className="h-4 w-4 animate-spin" />
            Översätter...
          </>
        ) : (
          'Översätt'
        )}
      </button>

      {/* Error */}
      {error && (
        <div className="rounded-xl border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-4 text-sm text-red-700 dark:text-red-400">
          {error}
        </div>
      )}

      {/* Result */}
      {translatedText && (
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
          <div className="mb-2 flex items-center justify-between">
            <label className="text-sm font-medium text-gray-900 dark:text-white">
              {LANGUAGES.find((l) => l.code === targetLang)?.label}
            </label>
            <button
              onClick={copyResult}
              className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white px-3 py-1.5 text-xs text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? 'Kopierat!' : 'Kopiera'}
            </button>
          </div>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-4 py-3 text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
            {translatedText}
          </div>
        </div>
      )}

      <p className="text-xs text-gray-400 dark:text-gray-500 hc:text-gray-300 text-center">
        Ctrl+Enter f&ouml;r att &ouml;vers&auml;tta. Drivs av MyMemory Translation API.
      </p>
    </div>
  )
}
