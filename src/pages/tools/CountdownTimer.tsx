import { useState, useRef, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Play, Pause, RotateCcw } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

function formatTime(ms: number): string {
  if (ms <= 0) return '00:00:00'
  const h = Math.floor(ms / 3600000)
  const m = Math.floor((ms % 3600000) / 60000)
  const s = Math.floor((ms % 60000) / 1000)
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

function playAlarm() {
  const ctx = new AudioContext()
  const playBeep = (time: number, freq: number) => {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.frequency.value = freq
    osc.type = 'sine'
    gain.gain.setValueAtTime(0.3, time)
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.3)
    osc.start(time)
    osc.stop(time + 0.3)
  }
  playBeep(ctx.currentTime, 880)
  playBeep(ctx.currentTime + 0.35, 880)
  playBeep(ctx.currentTime + 0.7, 1100)
}

export default function CountdownTimer() {
  const { t } = useLanguage()
  const translation = t.tools['nedrakningstimer']
  const ct = t.countdown

  const [hours, setHours] = useState('0')
  const [minutes, setMinutes] = useState('5')
  const [seconds, setSeconds] = useState('0')
  const [remaining, setRemaining] = useState(0)
  const [running, setRunning] = useState(false)
  const [done, setDone] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const endTimeRef = useRef(0)

  const totalMs = () => {
    return ((parseInt(hours) || 0) * 3600 + (parseInt(minutes) || 0) * 60 + (parseInt(seconds) || 0)) * 1000
  }

  const start = useCallback(() => {
    const ms = remaining > 0 ? remaining : totalMs()
    if (ms <= 0) return
    endTimeRef.current = Date.now() + ms
    setDone(false)
    intervalRef.current = setInterval(() => {
      const left = endTimeRef.current - Date.now()
      if (left <= 0) {
        clearInterval(intervalRef.current!)
        setRemaining(0)
        setRunning(false)
        setDone(true)
        playAlarm()
      } else {
        setRemaining(left)
      }
    }, 100)
    setRemaining(ms)
    setRunning(true)
  }, [remaining, hours, minutes, seconds])

  const pause = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setRunning(false)
  }, [])

  const reset = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setRunning(false)
    setRemaining(0)
    setDone(false)
  }, [])

  useEffect(() => {
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [])

  const isSetup = !running && remaining === 0 && !done
  const progress = running || remaining > 0 ? remaining / totalMs() : 0

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

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-6 space-y-6">
        {isSetup ? (
          /* Time input */
          <div className="flex items-center justify-center gap-2">
            {[
              { label: ct?.hours || 'Tim', value: hours, set: setHours },
              { label: ct?.minutes || 'Min', value: minutes, set: setMinutes },
              { label: ct?.seconds || 'Sek', value: seconds, set: setSeconds },
            ].map((field, i) => (
              <div key={i} className="text-center">
                <input
                  type="number"
                  min="0"
                  max={i === 0 ? 99 : 59}
                  value={field.value}
                  onChange={(e) => field.set(e.target.value)}
                  className="w-20 rounded-lg border border-gray-200 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-2 py-3 text-center text-2xl font-mono font-bold text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="mt-1 text-xs text-gray-500 dark:text-gray-400 hc:text-gray-300">{field.label}</div>
              </div>
            ))}
          </div>
        ) : (
          /* Countdown display */
          <div className="text-center space-y-3">
            <div className={`text-6xl font-mono font-bold tabular-nums ${done ? 'text-red-500 animate-pulse' : 'text-gray-900 dark:text-white'}`}>
              {formatTime(remaining)}
            </div>
            {!done && (
              <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800 hc:bg-gray-900">
                <div
                  className="h-full rounded-full bg-blue-600 hc:bg-white transition-all"
                  style={{ width: `${Math.max(0, progress * 100)}%` }}
                />
              </div>
            )}
            {done && (
              <div className="text-lg font-medium text-red-500 dark:text-red-400 hc:text-red-300">
                {ct?.finished || 'Tiden är ute!'}
              </div>
            )}
          </div>
        )}

        {/* Controls */}
        <div className="flex items-center justify-center gap-3">
          {!running && !done && (
            <button
              onClick={start}
              disabled={isSetup && totalMs() <= 0}
              className="flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-medium text-white transition-colors hover:bg-green-700 hc:bg-white hc:text-black disabled:opacity-50"
            >
              <Play className="h-5 w-5" />
              {remaining > 0 ? (ct?.resume || 'Fortsätt') : (ct?.start || 'Starta')}
            </button>
          )}
          {running && (
            <button
              onClick={pause}
              className="flex items-center gap-2 rounded-lg bg-yellow-600 px-6 py-3 font-medium text-white transition-colors hover:bg-yellow-700 hc:bg-white hc:text-black"
            >
              <Pause className="h-5 w-5" />
              {ct?.pause || 'Paus'}
            </button>
          )}
          {(remaining > 0 || done) && (
            <button
              onClick={reset}
              className="flex items-center gap-2 rounded-lg bg-gray-200 dark:bg-gray-600 hc:bg-gray-900 hc:border hc:border-white px-6 py-3 font-medium text-gray-700 dark:text-gray-300 hc:text-white transition-colors hover:bg-gray-300 dark:hover:bg-gray-500"
            >
              <RotateCcw className="h-5 w-5" />
              {ct?.reset || 'Nollställ'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
