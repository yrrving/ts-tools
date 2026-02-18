import { useState, useRef } from 'react'
import { Mic, Square, Copy, Check, Trash2 } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

const LANG_OPTIONS = [
  { code: 'sv-SE', label: 'Svenska' },
  { code: 'en-US', label: 'English (US)' },
  { code: 'en-GB', label: 'English (UK)' },
  { code: 'es-ES', label: 'Español' },
  { code: 'fr-FR', label: 'Français' },
  { code: 'de-DE', label: 'Deutsch' },
  { code: 'pt-BR', label: 'Português (BR)' },
  { code: 'pt-PT', label: 'Português (PT)' },
]

export default function SpeechToText() {
  const { t } = useLanguage()
  const translation = t.tools['tal-till-text']
  const stt = t.speechToText

  const [transcript, setTranscript] = useState('')
  const [interim, setInterim] = useState('')
  const [listening, setListening] = useState(false)
  const [lang, setLang] = useState('sv-SE')
  const [copied, setCopied] = useState(false)
  const [supported] = useState(() => 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window)
  const recognitionRef = useRef<ReturnType<typeof createRecognition> | null>(null)

  function createRecognition() {
    const SpeechRecognitionCtor = (window as unknown as Record<string, unknown>).SpeechRecognition || (window as unknown as Record<string, unknown>).webkitSpeechRecognition
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const recognition = new (SpeechRecognitionCtor as any)()
    recognition.continuous = true
    recognition.interimResults = true
    recognition.lang = lang
    return recognition
  }

  const startListening = () => {
    if (!supported) return
    const recognition = createRecognition()
    recognition.lang = lang

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onresult = (event: any) => {
      let finalText = ''
      let interimText = ''
      for (let i = 0; i < event.results.length; i++) {
        const result = event.results[i]
        if (result.isFinal) {
          finalText += result[0].transcript
        } else {
          interimText += result[0].transcript
        }
      }
      if (finalText) {
        setTranscript((prev) => prev + (prev ? ' ' : '') + finalText)
      }
      setInterim(interimText)
    }

    recognition.onerror = () => {
      setListening(false)
    }

    recognition.onend = () => {
      setListening(false)
      setInterim('')
    }

    recognitionRef.current = recognition
    recognition.start()
    setListening(true)
  }

  const stopListening = () => {
    recognitionRef.current?.stop()
    setListening(false)
    setInterim('')
  }

  const copyText = async () => {
    if (!transcript) return
    await navigator.clipboard.writeText(transcript)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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

      {!supported && (
        <div className="rounded-xl border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-4 text-sm text-red-700 dark:text-red-400">
          {stt?.notSupported ?? 'Taligenkänning stöds inte i denna webbläsare. Prova Chrome.'}
        </div>
      )}

      {/* Language */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          {stt?.language ?? 'Språk'}
        </label>
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          disabled={listening}
          className="w-full rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 hc:text-white disabled:opacity-50"
        >
          {LANG_OPTIONS.map((opt) => (
            <option key={opt.code} value={opt.code}>{opt.label}</option>
          ))}
        </select>
      </div>

      {/* Record button */}
      <div className="flex justify-center">
        {!listening ? (
          <button
            onClick={startListening}
            disabled={!supported}
            className="inline-flex items-center gap-2 rounded-full bg-red-500 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-red-600 disabled:opacity-40"
          >
            <Mic className="h-6 w-6" />
            {stt?.start ?? 'Starta inspelning'}
          </button>
        ) : (
          <button
            onClick={stopListening}
            className="inline-flex items-center gap-2 rounded-full bg-gray-600 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-gray-700 animate-pulse"
          >
            <Square className="h-6 w-6" />
            {stt?.stop ?? 'Stoppa'}
          </button>
        )}
      </div>

      {/* Interim */}
      {interim && (
        <p className="text-center text-sm text-gray-400 dark:text-gray-500 italic">{interim}</p>
      )}

      {/* Transcript */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
        <div className="mb-2 flex items-center justify-between">
          <label className="text-sm font-medium text-gray-900 dark:text-white">
            {stt?.transcript ?? 'Transkription'}
          </label>
          <div className="flex gap-2">
            <button
              onClick={copyText}
              disabled={!transcript}
              className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white px-3 py-1.5 text-xs text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-40"
            >
              {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? (stt?.copied ?? 'Kopierat!') : (stt?.copy ?? 'Kopiera')}
            </button>
            <button
              onClick={() => setTranscript('')}
              disabled={!transcript}
              className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white px-3 py-1.5 text-xs text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-40"
            >
              <Trash2 className="h-3.5 w-3.5" />
              {stt?.clear ?? 'Rensa'}
            </button>
          </div>
        </div>
        <div className="min-h-[8rem] rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-4 py-3 text-sm text-gray-900 dark:text-white whitespace-pre-wrap">
          {transcript || <span className="text-gray-400 dark:text-gray-500">{stt?.empty ?? 'Transkription visas här...'}</span>}
        </div>
      </div>
    </div>
  )
}
