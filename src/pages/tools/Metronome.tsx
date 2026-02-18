import { useState, useRef, useCallback, useEffect } from 'react'
import { Play, Square } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

function createClick(ctx: AudioContext, time: number, accent: boolean) {
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.connect(gain)
  gain.connect(ctx.destination)
  osc.frequency.value = accent ? 1000 : 800
  osc.type = 'square'
  gain.gain.setValueAtTime(accent ? 0.4 : 0.25, time)
  gain.gain.exponentialRampToValueAtTime(0.001, time + 0.05)
  osc.start(time)
  osc.stop(time + 0.05)
}

export default function Metronome() {
  const { t } = useLanguage()
  const translation = t.tools['metronom']
  const mt = t.metronome

  const [bpm, setBpm] = useState(120)
  const [playing, setPlaying] = useState(false)
  const [beat, setBeat] = useState(0)
  const audioCtxRef = useRef<AudioContext | null>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const beatRef = useRef(0)
  const tapTimesRef = useRef<number[]>([])

  const startMetronome = useCallback(() => {
    const ctx = new AudioContext()
    audioCtxRef.current = ctx
    beatRef.current = 0
    setBeat(0)

    const interval = 60000 / bpm
    createClick(ctx, ctx.currentTime, true)
    setBeat(1)
    beatRef.current = 1

    intervalRef.current = setInterval(() => {
      beatRef.current = (beatRef.current % 4) + 1
      const accent = beatRef.current === 1
      createClick(ctx, ctx.currentTime, accent)
      setBeat(beatRef.current)
    }, interval)

    setPlaying(true)
  }, [bpm])

  const stopMetronome = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (audioCtxRef.current) audioCtxRef.current.close()
    setPlaying(false)
    setBeat(0)
  }, [])

  const handleBpmChange = (newBpm: number) => {
    setBpm(newBpm)
    if (playing) {
      stopMetronome()
      // Restart with new bpm after state update
      setTimeout(() => {
        const ctx = new AudioContext()
        audioCtxRef.current = ctx
        beatRef.current = 0

        const interval = 60000 / newBpm
        createClick(ctx, ctx.currentTime, true)
        setBeat(1)
        beatRef.current = 1

        intervalRef.current = setInterval(() => {
          beatRef.current = (beatRef.current % 4) + 1
          const accent = beatRef.current === 1
          createClick(ctx, ctx.currentTime, accent)
          setBeat(beatRef.current)
        }, interval)

        setPlaying(true)
      }, 50)
    }
  }

  const tapTempo = () => {
    const now = Date.now()
    tapTimesRef.current.push(now)
    // Keep last 5 taps
    if (tapTimesRef.current.length > 5) tapTimesRef.current.shift()
    if (tapTimesRef.current.length >= 2) {
      const times = tapTimesRef.current
      const intervals = []
      for (let i = 1; i < times.length; i++) {
        intervals.push(times[i] - times[i - 1])
      }
      const avg = intervals.reduce((a, b) => a + b, 0) / intervals.length
      const newBpm = Math.round(60000 / avg)
      if (newBpm >= 40 && newBpm <= 220) {
        handleBpmChange(newBpm)
      }
    }
    // Reset if gap > 2s
    if (tapTimesRef.current.length >= 2) {
      const last = tapTimesRef.current[tapTimesRef.current.length - 1]
      const prev = tapTimesRef.current[tapTimesRef.current.length - 2]
      if (last - prev > 2000) {
        tapTimesRef.current = [now]
      }
    }
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (audioCtxRef.current) audioCtxRef.current.close()
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
        {/* BPM display */}
        <div className="text-center">
          <div className="text-6xl font-mono font-bold text-gray-900 dark:text-white">{bpm}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400 hc:text-gray-300 mt-1">BPM</div>
        </div>

        {/* Beat indicators */}
        <div className="flex items-center justify-center gap-3">
          {[1, 2, 3, 4].map((b) => (
            <div
              key={b}
              className={`h-5 w-5 rounded-full transition-all ${
                beat === b
                  ? b === 1
                    ? 'bg-blue-500 scale-125 hc:bg-white'
                    : 'bg-blue-400 scale-110 hc:bg-gray-300'
                  : 'bg-gray-200 dark:bg-gray-600 hc:bg-gray-800 hc:border hc:border-gray-600'
              }`}
            />
          ))}
        </div>

        {/* BPM slider */}
        <div>
          <input
            type="range"
            min={40}
            max={220}
            value={bpm}
            onChange={(e) => handleBpmChange(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-500 hc:text-gray-400">
            <span>40</span>
            <span>220</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-3">
          {!playing ? (
            <button
              onClick={startMetronome}
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3 font-medium text-white transition-colors hover:bg-blue-700 hc:bg-white hc:text-black"
            >
              <Play className="h-5 w-5" />
              {mt?.start || 'Starta'}
            </button>
          ) : (
            <button
              onClick={stopMetronome}
              className="flex items-center gap-2 rounded-lg bg-red-600 px-8 py-3 font-medium text-white transition-colors hover:bg-red-700 hc:bg-white hc:text-black"
            >
              <Square className="h-5 w-5" />
              {mt?.stop || 'Stoppa'}
            </button>
          )}
          <button
            onClick={tapTempo}
            className="rounded-lg bg-gray-200 dark:bg-gray-600 hc:bg-gray-900 hc:border hc:border-white px-6 py-3 font-medium text-gray-700 dark:text-gray-300 hc:text-white transition-colors hover:bg-gray-300 dark:hover:bg-gray-500"
          >
            {mt?.tapTempo || 'Tap tempo'}
          </button>
        </div>
      </div>
    </div>
  )
}
