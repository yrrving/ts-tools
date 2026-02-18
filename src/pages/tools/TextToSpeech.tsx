import { useState, useEffect, useRef } from 'react'
import { Play, Square, Pause } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

export default function TextToSpeech() {
  const { t } = useLanguage()
  const translation = t.tools['text-till-tal']
  const tts = t.textToSpeech

  const [text, setText] = useState('')
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [selectedVoice, setSelectedVoice] = useState('')
  const [rate, setRate] = useState(1)
  const [pitch, setPitch] = useState(1)
  const [speaking, setSpeaking] = useState(false)
  const [paused, setPaused] = useState(false)
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null)

  useEffect(() => {
    const loadVoices = () => {
      const v = speechSynthesis.getVoices()
      setVoices(v)
      if (v.length > 0 && !selectedVoice) {
        const def = v.find((voice) => voice.default) || v[0]
        setSelectedVoice(def.voiceURI)
      }
    }
    loadVoices()
    speechSynthesis.addEventListener('voiceschanged', loadVoices)
    return () => speechSynthesis.removeEventListener('voiceschanged', loadVoices)
  }, [])

  const speak = () => {
    if (!text.trim()) return
    speechSynthesis.cancel()

    const utter = new SpeechSynthesisUtterance(text)
    const voice = voices.find((v) => v.voiceURI === selectedVoice)
    if (voice) utter.voice = voice
    utter.rate = rate
    utter.pitch = pitch

    utter.onend = () => { setSpeaking(false); setPaused(false) }
    utter.onerror = () => { setSpeaking(false); setPaused(false) }

    utterRef.current = utter
    speechSynthesis.speak(utter)
    setSpeaking(true)
    setPaused(false)
  }

  const pause = () => {
    speechSynthesis.pause()
    setPaused(true)
  }

  const resume = () => {
    speechSynthesis.resume()
    setPaused(false)
  }

  const stop = () => {
    speechSynthesis.cancel()
    setSpeaking(false)
    setPaused(false)
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

      {/* Text input */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
        <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          {tts?.input ?? 'Text'}
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={tts?.placeholder ?? 'Skriv text som ska läsas upp...'}
          rows={6}
          className="w-full resize-y rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Settings */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4 space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-900 dark:text-white">
            {tts?.voice ?? 'Röst'}
          </label>
          <select
            value={selectedVoice}
            onChange={(e) => setSelectedVoice(e.target.value)}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 hc:text-white"
          >
            {voices.map((v) => (
              <option key={v.voiceURI} value={v.voiceURI}>
                {v.name} ({v.lang})
              </option>
            ))}
          </select>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-sm font-medium text-gray-900 dark:text-white">
              {tts?.speed ?? 'Hastighet'}: {rate.toFixed(1)}x
            </label>
          </div>
          <input
            type="range"
            min={0.5}
            max={2}
            step={0.1}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-sm font-medium text-gray-900 dark:text-white">
              {tts?.pitch ?? 'Tonhöjd'}: {pitch.toFixed(1)}
            </label>
          </div>
          <input
            type="range"
            min={0.5}
            max={2}
            step={0.1}
            value={pitch}
            onChange={(e) => setPitch(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-2">
        {!speaking ? (
          <button
            onClick={speak}
            disabled={!text.trim()}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-40"
          >
            <Play className="h-4 w-4" />
            {tts?.play ?? 'Spela upp'}
          </button>
        ) : (
          <>
            <button
              onClick={paused ? resume : pause}
              className="inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-yellow-600"
            >
              <Pause className="h-4 w-4" />
              {paused ? (tts?.resume ?? 'Fortsätt') : (tts?.pause ?? 'Paus')}
            </button>
            <button
              onClick={stop}
              className="inline-flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-600"
            >
              <Square className="h-4 w-4" />
              {tts?.stop ?? 'Stopp'}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
