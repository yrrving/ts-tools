import { useState, useRef, useCallback, useEffect } from 'react'
import { Mic, MicOff } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

const NOTE_NAMES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

function frequencyToNote(freq: number): { note: string; octave: number; cents: number } {
  const semitone = 12 * Math.log2(freq / 440)
  const roundedSemitone = Math.round(semitone)
  const cents = Math.round((semitone - roundedSemitone) * 100)
  const noteIndex = ((roundedSemitone % 12) + 12 + 9) % 12 // A = 0 → shift to C = 0
  const octave = Math.floor((roundedSemitone + 9) / 12) + 4
  return { note: NOTE_NAMES[noteIndex], octave, cents }
}

function autoCorrelate(buffer: Float32Array, sampleRate: number): number {
  let size = buffer.length
  let rms = 0
  for (let i = 0; i < size; i++) rms += buffer[i] * buffer[i]
  rms = Math.sqrt(rms / size)
  if (rms < 0.01) return -1

  // Trim silence
  let r1 = 0, r2 = size - 1
  const threshold = 0.2
  for (let i = 0; i < size / 2; i++) {
    if (Math.abs(buffer[i]) < threshold) { r1 = i; break }
  }
  for (let i = 1; i < size / 2; i++) {
    if (Math.abs(buffer[size - i]) < threshold) { r2 = size - i; break }
  }
  const buf = buffer.slice(r1, r2)
  size = buf.length

  const c = new Float32Array(size)
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i; j++) {
      c[i] += buf[j] * buf[j + i]
    }
  }

  let d = 0
  while (c[d] > c[d + 1]) d++

  let maxVal = -1, maxPos = -1
  for (let i = d; i < size; i++) {
    if (c[i] > maxVal) { maxVal = c[i]; maxPos = i }
  }

  let T0 = maxPos
  // Parabolic interpolation
  if (T0 > 0 && T0 < size - 1) {
    const x1 = c[T0 - 1], x2 = c[T0], x3 = c[T0 + 1]
    const a = (x1 + x3 - 2 * x2) / 2
    const b = (x3 - x1) / 2
    if (a) T0 = T0 - b / (2 * a)
  }

  return sampleRate / T0
}

export default function PitchDetector() {
  const { t } = useLanguage()
  const translation = t.tools['tonhojdsmatare']
  const pt = t.pitchDetector

  const [listening, setListening] = useState(false)
  const [frequency, setFrequency] = useState(0)
  const [note, setNote] = useState('')
  const [octave, setOctave] = useState(0)
  const [cents, setCents] = useState(0)
  const [notSupported, setNotSupported] = useState(false)

  const ctxRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const rafRef = useRef<number>(0)

  const startListening = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const ctx = new AudioContext()
      const analyser = ctx.createAnalyser()
      analyser.fftSize = 4096
      const source = ctx.createMediaStreamSource(stream)
      source.connect(analyser)

      ctxRef.current = ctx
      analyserRef.current = analyser
      streamRef.current = stream
      setListening(true)

      const buffer = new Float32Array(analyser.fftSize)
      const detect = () => {
        analyser.getFloatTimeDomainData(buffer)
        const freq = autoCorrelate(buffer, ctx.sampleRate)
        if (freq > 0 && freq < 5000) {
          setFrequency(Math.round(freq * 10) / 10)
          const info = frequencyToNote(freq)
          setNote(info.note)
          setOctave(info.octave)
          setCents(info.cents)
        }
        rafRef.current = requestAnimationFrame(detect)
      }
      detect()
    } catch {
      setNotSupported(true)
    }
  }, [])

  const stopListening = useCallback(() => {
    cancelAnimationFrame(rafRef.current)
    streamRef.current?.getTracks().forEach((t) => t.stop())
    ctxRef.current?.close()
    setListening(false)
    setFrequency(0)
    setNote('')
  }, [])

  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafRef.current)
      streamRef.current?.getTracks().forEach((t) => t.stop())
      ctxRef.current?.close()
    }
  }, [])

  return (
    <div className="mx-auto max-w-xl space-y-6 py-10">
      <BackLink />

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{translation?.name}</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400 hc:text-gray-200">{translation?.description}</p>
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-6 space-y-6">
        {notSupported ? (
          <p className="text-center text-red-500 dark:text-red-400 hc:text-red-300">
            {pt?.notSupported || 'Mikrofon stöds inte i denna webbläsare'}
          </p>
        ) : (
          <>
            {/* Note display */}
            <div className="text-center">
              {note ? (
                <>
                  <div className="text-8xl font-bold text-gray-900 dark:text-white">{note}<sub className="text-3xl text-gray-500 dark:text-gray-400">{octave}</sub></div>
                  <div className="mt-2 text-2xl font-mono text-gray-600 dark:text-gray-400 hc:text-gray-300">{frequency} Hz</div>
                  {/* Cents indicator */}
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400 hc:text-gray-300">-50</span>
                    <div className="relative h-3 w-48 rounded-full bg-gray-200 dark:bg-gray-800 hc:bg-gray-900">
                      <div className="absolute top-0 left-1/2 h-full w-0.5 bg-gray-400 dark:bg-gray-500" />
                      <div
                        className={`absolute top-0 h-full w-2 rounded-full transition-all ${Math.abs(cents) < 10 ? 'bg-green-500' : Math.abs(cents) < 25 ? 'bg-yellow-500' : 'bg-red-500'}`}
                        style={{ left: `calc(50% + ${(cents / 50) * 50}%)` }}
                      />
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 hc:text-gray-300">+50</span>
                  </div>
                  <div className="mt-1 text-sm text-gray-500 dark:text-gray-400 hc:text-gray-300">
                    {cents > 0 ? '+' : ''}{cents} cents
                  </div>
                </>
              ) : (
                <div className="text-xl text-gray-400 dark:text-gray-500 hc:text-gray-400 py-8">
                  {listening ? (pt?.detecting || 'Lyssnar...') : (pt?.pressStart || 'Tryck för att börja')}
                </div>
              )}
            </div>

            {/* Start/Stop */}
            <div className="flex justify-center">
              {!listening ? (
                <button
                  onClick={startListening}
                  className="flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3 font-medium text-white transition-colors hover:bg-blue-700 hc:bg-white hc:text-black"
                >
                  <Mic className="h-5 w-5" />
                  {pt?.start || 'Starta'}
                </button>
              ) : (
                <button
                  onClick={stopListening}
                  className="flex items-center gap-2 rounded-lg bg-red-600 px-8 py-3 font-medium text-white transition-colors hover:bg-red-700 hc:bg-white hc:text-black"
                >
                  <MicOff className="h-5 w-5" />
                  {pt?.stop || 'Stoppa'}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
