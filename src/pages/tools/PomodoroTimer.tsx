import { useState, useRef, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Play, Pause, RotateCcw } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

const WORK_DURATION = 25 * 60 * 1000
const BREAK_DURATION = 5 * 60 * 1000

function formatTime(ms: number): string {
  const m = Math.floor(ms / 60000)
  const s = Math.floor((ms % 60000) / 1000)
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

function playBeep(freq: number = 880) {
  const ctx = new AudioContext()
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.connect(gain)
  gain.connect(ctx.destination)
  osc.frequency.value = freq
  osc.type = 'sine'
  gain.gain.setValueAtTime(0.3, ctx.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4)
  osc.start(ctx.currentTime)
  osc.stop(ctx.currentTime + 0.4)
}

export default function PomodoroTimer() {
  const { t } = useLanguage()
  const translation = t.tools['pomodoro-timer']
  const pt = t.pomodoro

  const [phase, setPhase] = useState<'work' | 'break'>('work')
  const [remaining, setRemaining] = useState(WORK_DURATION)
  const [running, setRunning] = useState(false)
  const [sessions, setSessions] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const endTimeRef = useRef(0)

  const duration = phase === 'work' ? WORK_DURATION : BREAK_DURATION
  const progress = 1 - remaining / duration

  const start = useCallback(() => {
    endTimeRef.current = Date.now() + remaining
    intervalRef.current = setInterval(() => {
      const left = endTimeRef.current - Date.now()
      if (left <= 0) {
        clearInterval(intervalRef.current!)
        playBeep(phase === 'work' ? 660 : 880)
        if (phase === 'work') {
          setSessions((s) => s + 1)
          setPhase('break')
          setRemaining(BREAK_DURATION)
        } else {
          setPhase('work')
          setRemaining(WORK_DURATION)
        }
        setRunning(false)
      } else {
        setRemaining(left)
      }
    }, 100)
    setRunning(true)
  }, [remaining, phase])

  const pause = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setRunning(false)
  }, [])

  const reset = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setRunning(false)
    setPhase('work')
    setRemaining(WORK_DURATION)
    setSessions(0)
  }, [])

  useEffect(() => {
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [])

  const isWork = phase === 'work'

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
        {/* Phase indicator */}
        <div className="text-center">
          <span className={`inline-block rounded-full px-4 py-1.5 text-sm font-medium ${
            isWork
              ? 'bg-red-500/20 text-red-600 dark:text-red-400 hc:text-red-300'
              : 'bg-green-500/20 text-green-600 dark:text-green-400 hc:text-green-300'
          }`}>
            {isWork ? (pt?.work || 'Arbete') : (pt?.break || 'Paus')}
          </span>
        </div>

        {/* Timer display */}
        <div className="text-center">
          <div className="text-7xl font-mono font-bold text-gray-900 dark:text-white tabular-nums">
            {formatTime(remaining)}
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-3 w-full rounded-full bg-gray-200 dark:bg-gray-800 hc:bg-gray-900">
          <div
            className={`h-full rounded-full transition-all ${isWork ? 'bg-red-500 hc:bg-red-400' : 'bg-green-500 hc:bg-green-400'}`}
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3">
          {!running ? (
            <button
              onClick={start}
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 hc:bg-white hc:text-black"
            >
              <Play className="h-5 w-5" />
              {pt?.start || 'Starta'}
            </button>
          ) : (
            <button
              onClick={pause}
              className="flex items-center gap-2 rounded-lg bg-yellow-600 px-6 py-3 font-medium text-white transition-colors hover:bg-yellow-700 hc:bg-white hc:text-black"
            >
              <Pause className="h-5 w-5" />
              {pt?.pause || 'Paus'}
            </button>
          )}
          <button
            onClick={reset}
            className="flex items-center gap-2 rounded-lg bg-gray-200 dark:bg-gray-600 hc:bg-gray-900 hc:border hc:border-white px-6 py-3 font-medium text-gray-700 dark:text-gray-300 hc:text-white transition-colors hover:bg-gray-300 dark:hover:bg-gray-500"
          >
            <RotateCcw className="h-5 w-5" />
            {pt?.reset || 'Nollställ'}
          </button>
        </div>

        {/* Session counter */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400 hc:text-gray-300">
          {pt?.sessions || 'Sessioner'}: <span className="font-bold text-gray-900 dark:text-white">{sessions}</span>
        </div>
      </div>
    </div>
  )
}
