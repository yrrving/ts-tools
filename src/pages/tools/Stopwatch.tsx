import { useState, useRef, useCallback } from 'react'
import { Play, Pause, RotateCcw, Flag } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

function formatTime(ms: number): string {
  const minutes = Math.floor(ms / 60000)
  const seconds = Math.floor((ms % 60000) / 1000)
  const centiseconds = Math.floor((ms % 1000) / 10)
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(centiseconds).padStart(2, '0')}`
}

export default function Stopwatch() {
  const { t } = useLanguage()
  const translation = t.tools['stoppur']
  const st = t.stopwatch

  const [elapsed, setElapsed] = useState(0)
  const [running, setRunning] = useState(false)
  const [laps, setLaps] = useState<number[]>([])
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const startTimeRef = useRef(0)
  const elapsedRef = useRef(0)

  const start = useCallback(() => {
    startTimeRef.current = Date.now() - elapsedRef.current
    intervalRef.current = setInterval(() => {
      const now = Date.now() - startTimeRef.current
      elapsedRef.current = now
      setElapsed(now)
    }, 10)
    setRunning(true)
  }, [])

  const stop = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setRunning(false)
  }, [])

  const reset = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setRunning(false)
    setElapsed(0)
    elapsedRef.current = 0
    setLaps([])
  }, [])

  const lap = useCallback(() => {
    setLaps((prev) => [elapsedRef.current, ...prev])
  }, [])

  return (
    <div className="mx-auto max-w-xl space-y-6 py-10">
      <BackLink />

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{translation?.name}</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400 hc:text-gray-200">{translation?.description}</p>
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-6 space-y-6">
        {/* Time display */}
        <div className="text-center">
          <div className="text-6xl font-mono font-bold text-gray-900 dark:text-white tabular-nums">
            {formatTime(elapsed)}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3">
          {!running ? (
            <button
              onClick={start}
              className="flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-medium text-white transition-colors hover:bg-green-700 hc:bg-white hc:text-black"
            >
              <Play className="h-5 w-5" />
              {st?.start || 'Start'}
            </button>
          ) : (
            <button
              onClick={stop}
              className="flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-medium text-white transition-colors hover:bg-red-700 hc:bg-white hc:text-black"
            >
              <Pause className="h-5 w-5" />
              {st?.stop || 'Stopp'}
            </button>
          )}
          {running && (
            <button
              onClick={lap}
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 hc:bg-white hc:text-black"
            >
              <Flag className="h-5 w-5" />
              {st?.lap || 'Varv'}
            </button>
          )}
          {(elapsed > 0 && !running) && (
            <button
              onClick={reset}
              className="flex items-center gap-2 rounded-lg bg-gray-200 dark:bg-gray-600 hc:bg-gray-900 hc:border hc:border-white px-6 py-3 font-medium text-gray-700 dark:text-gray-300 hc:text-white transition-colors hover:bg-gray-300 dark:hover:bg-gray-500"
            >
              <RotateCcw className="h-5 w-5" />
              {st?.reset || 'Nollställ'}
            </button>
          )}
        </div>

        {/* Laps */}
        {laps.length > 0 && (
          <div className="space-y-1">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400 hc:text-gray-300">{st?.laps || 'Varv'}</div>
            <div className="max-h-48 overflow-y-auto space-y-1">
              {laps.map((time, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-lg bg-gray-100 dark:bg-gray-800 hc:bg-gray-900 hc:border hc:border-gray-700 px-3 py-2"
                >
                  <span className="text-sm text-gray-600 dark:text-gray-400 hc:text-gray-300">#{laps.length - i}</span>
                  <span className="font-mono text-gray-900 dark:text-white">{formatTime(time)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
