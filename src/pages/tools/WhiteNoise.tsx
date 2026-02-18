import { useState, useRef, useEffect } from 'react'
import { Play, Square } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

type NoiseType = 'white' | 'pink' | 'brown'

function createNoiseBuffer(ctx: AudioContext, type: NoiseType): AudioBuffer {
  const size = ctx.sampleRate * 2
  const buffer = ctx.createBuffer(1, size, ctx.sampleRate)
  const data = buffer.getChannelData(0)

  if (type === 'white') {
    for (let i = 0; i < size; i++) {
      data[i] = Math.random() * 2 - 1
    }
  } else if (type === 'pink') {
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0
    for (let i = 0; i < size; i++) {
      const white = Math.random() * 2 - 1
      b0 = 0.99886 * b0 + white * 0.0555179
      b1 = 0.99332 * b1 + white * 0.0750759
      b2 = 0.96900 * b2 + white * 0.1538520
      b3 = 0.86650 * b3 + white * 0.3104856
      b4 = 0.55000 * b4 + white * 0.5329522
      b5 = -0.7616 * b5 - white * 0.0168980
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11
      b6 = white * 0.115926
    }
  } else {
    let lastOut = 0
    for (let i = 0; i < size; i++) {
      const white = Math.random() * 2 - 1
      data[i] = (lastOut + 0.02 * white) / 1.02
      lastOut = data[i]
      data[i] *= 3.5
    }
  }

  return buffer
}

export default function WhiteNoise() {
  const { t } = useLanguage()
  const translation = t.tools['vit-brus']
  const wt = t.whiteNoise

  const [playing, setPlaying] = useState(false)
  const [noiseType, setNoiseType] = useState<NoiseType>('white')
  const [volume, setVolume] = useState(0.5)
  const ctxRef = useRef<AudioContext | null>(null)
  const sourceRef = useRef<AudioBufferSourceNode | null>(null)
  const gainRef = useRef<GainNode | null>(null)

  const start = (type: NoiseType) => {
    stop()
    const ctx = new AudioContext()
    const gain = ctx.createGain()
    gain.gain.value = volume
    gain.connect(ctx.destination)

    const source = ctx.createBufferSource()
    source.buffer = createNoiseBuffer(ctx, type)
    source.loop = true
    source.connect(gain)
    source.start()

    ctxRef.current = ctx
    sourceRef.current = source
    gainRef.current = gain
    setPlaying(true)
    setNoiseType(type)
  }

  const stop = () => {
    sourceRef.current?.stop()
    ctxRef.current?.close()
    sourceRef.current = null
    ctxRef.current = null
    gainRef.current = null
    setPlaying(false)
  }

  const changeVolume = (v: number) => {
    setVolume(v)
    if (gainRef.current) gainRef.current.gain.value = v
  }

  const switchType = (type: NoiseType) => {
    if (playing) {
      start(type)
    } else {
      setNoiseType(type)
    }
  }

  useEffect(() => {
    return () => { stop() }
  }, [])

  const types: { key: NoiseType; label: string; color: string }[] = [
    { key: 'white', label: wt?.white || 'Vitt brus', color: 'bg-gray-200 dark:bg-gray-500' },
    { key: 'pink', label: wt?.pink || 'Rosa brus', color: 'bg-pink-300 dark:bg-pink-600' },
    { key: 'brown', label: wt?.brown || 'Brunt brus', color: 'bg-amber-400 dark:bg-amber-700' },
  ]

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

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-6 space-y-6">
        {/* Noise type buttons */}
        <div className="grid grid-cols-3 gap-3">
          {types.map((nt) => (
            <button
              key={nt.key}
              onClick={() => switchType(nt.key)}
              className={`rounded-xl p-4 text-center transition-all ${
                noiseType === nt.key
                  ? 'ring-2 ring-blue-500 hc:ring-white bg-gray-100 dark:bg-gray-600 hc:bg-gray-900'
                  : 'bg-gray-100 dark:bg-gray-600 hc:bg-gray-900 hc:border hc:border-gray-600'
              }`}
            >
              <div className={`mx-auto h-10 w-10 rounded-full ${nt.color} ${playing && noiseType === nt.key ? 'animate-pulse' : ''}`} />
              <div className="mt-2 text-sm font-medium text-gray-900 dark:text-white">{nt.label}</div>
            </button>
          ))}
        </div>

        {/* Volume */}
        <div>
          <div className="flex items-center justify-between text-sm text-gray-700 dark:text-gray-300 hc:text-white mb-2">
            <span>{wt?.volume || 'Volym'}</span>
            <span>{Math.round(volume * 100)}%</span>
          </div>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => changeVolume(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
        </div>

        {/* Play/Stop */}
        <div className="flex justify-center">
          {!playing ? (
            <button
              onClick={() => start(noiseType)}
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3 font-medium text-white transition-colors hover:bg-blue-700 hc:bg-white hc:text-black"
            >
              <Play className="h-5 w-5" />
              {wt?.play || 'Spela'}
            </button>
          ) : (
            <button
              onClick={stop}
              className="flex items-center gap-2 rounded-lg bg-red-600 px-8 py-3 font-medium text-white transition-colors hover:bg-red-700 hc:bg-white hc:text-black"
            >
              <Square className="h-5 w-5" />
              {wt?.stop || 'Stoppa'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
