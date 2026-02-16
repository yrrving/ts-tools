import { useState, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Play, RefreshCw } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

interface TestResult {
  downloadMbps: number
  latencyMs: number
  timestamp: Date
}

export default function BandwidthTest() {
  const { t } = useLanguage()
  const translation = t.tools['bandbreddstest']

  const [testing, setTesting] = useState(false)
  const [phase, setPhase] = useState<'idle' | 'latency' | 'download'>('idle')
  const [progress, setProgress] = useState(0)
  const [currentResult, setCurrentResult] = useState<TestResult | null>(null)
  const [history, setHistory] = useState<TestResult[]>([])
  const abortRef = useRef<AbortController | null>(null)

  const measureLatency = async (signal: AbortSignal): Promise<number> => {
    const pings: number[] = []
    for (let i = 0; i < 5; i++) {
      const start = performance.now()
      try {
        await fetch('https://cloudflare.com/cdn-cgi/trace', {
          cache: 'no-store',
          signal,
        })
        pings.push(performance.now() - start)
      } catch {
        // skip failed pings
      }
    }
    if (pings.length === 0) return 0
    pings.sort((a, b) => a - b)
    return pings[Math.floor(pings.length / 2)]
  }

  const measureDownload = async (signal: AbortSignal): Promise<number> => {
    const sizes = [1_000_000, 5_000_000, 10_000_000]
    const results: { bytes: number; ms: number }[] = []

    for (let i = 0; i < sizes.length; i++) {
      setProgress(((i + 1) / sizes.length) * 100)
      const start = performance.now()
      try {
        const res = await fetch(`https://speed.cloudflare.com/__down?bytes=${sizes[i]}`, {
          cache: 'no-store',
          signal,
        })
        const blob = await res.blob()
        const elapsed = performance.now() - start
        results.push({ bytes: blob.size, ms: elapsed })
      } catch {
        break
      }
    }

    if (results.length === 0) return 0
    const totalBytes = results.reduce((sum, r) => sum + r.bytes, 0)
    const totalMs = results.reduce((sum, r) => sum + r.ms, 0)
    return (totalBytes * 8) / (totalMs / 1000) / 1_000_000
  }

  const runTest = useCallback(async () => {
    const controller = new AbortController()
    abortRef.current = controller

    setTesting(true)
    setCurrentResult(null)
    setProgress(0)

    try {
      // Latency
      setPhase('latency')
      const latency = await measureLatency(controller.signal)

      // Download
      setPhase('download')
      const download = await measureDownload(controller.signal)

      const result: TestResult = {
        downloadMbps: download,
        latencyMs: latency,
        timestamp: new Date(),
      }
      setCurrentResult(result)
      setHistory((prev) => [result, ...prev].slice(0, 10))
    } catch {
      // aborted or error
    } finally {
      setTesting(false)
      setPhase('idle')
      setProgress(0)
    }
  }, [])

  const stopTest = () => {
    abortRef.current?.abort()
    setTesting(false)
    setPhase('idle')
  }

  const getSpeedColor = (mbps: number): string => {
    if (mbps >= 100) return 'text-green-500'
    if (mbps >= 50) return 'text-blue-500'
    if (mbps >= 10) return 'text-yellow-500'
    return 'text-red-500'
  }

  const getSpeedRating = (mbps: number): string => {
    if (mbps >= 100) return 'Utmärkt'
    if (mbps >= 50) return 'Bra'
    if (mbps >= 10) return 'OK'
    return 'Långsam'
  }

  // Gauge angle calculation (0-180 degrees)
  const gaugeAngle = currentResult
    ? Math.min(180, (currentResult.downloadMbps / 200) * 180)
    : 0

  return (
    <div className="mx-auto max-w-2xl space-y-6 py-10">
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
        {translation?.hint && (
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500 hc:text-gray-300 italic">{translation.hint}</p>
        )}
      </div>

      {/* Speed gauge / result */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-8 text-center">
        {/* Gauge SVG */}
        <div className="mx-auto mb-4" style={{ width: 200, height: 110 }}>
          <svg viewBox="0 0 200 110" width="200" height="110">
            {/* Background arc */}
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke="currentColor"
              className="text-gray-200 dark:text-gray-700 hc:text-gray-600"
              strokeWidth="12"
              strokeLinecap="round"
            />
            {/* Filled arc */}
            {currentResult && (
              <path
                d="M 20 100 A 80 80 0 0 1 180 100"
                fill="none"
                stroke="currentColor"
                className={getSpeedColor(currentResult.downloadMbps)}
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={`${(gaugeAngle / 180) * 251.3} 251.3`}
              />
            )}
            {/* Needle */}
            {currentResult && (
              <line
                x1="100"
                y1="100"
                x2={100 + 60 * Math.cos(Math.PI - (gaugeAngle * Math.PI) / 180)}
                y2={100 - 60 * Math.sin(Math.PI - (gaugeAngle * Math.PI) / 180)}
                stroke="currentColor"
                className="text-gray-900 dark:text-white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
            {/* Center dot */}
            <circle cx="100" cy="100" r="4" fill="currentColor" className="text-gray-900 dark:text-white" />
            {/* Scale labels */}
            <text x="15" y="108" className="fill-gray-400 text-[9px]">0</text>
            <text x="88" y="18" className="fill-gray-400 text-[9px]">100</text>
            <text x="170" y="108" className="fill-gray-400 text-[9px]">200</text>
          </svg>
        </div>

        {testing ? (
          <div className="space-y-2">
            <RefreshCw className="mx-auto h-6 w-6 animate-spin text-blue-500" />
            <p className="text-sm text-gray-600 dark:text-gray-400 hc:text-gray-200">
              {phase === 'latency' ? 'Mäter latens...' : `Testar nedladdning... ${Math.round(progress)}%`}
            </p>
          </div>
        ) : currentResult ? (
          <div className="space-y-1">
            <p className={`text-4xl font-bold font-mono ${getSpeedColor(currentResult.downloadMbps)}`}>
              {currentResult.downloadMbps.toFixed(1)}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Mbps nedladdning</p>
            <p className={`text-xs font-medium ${getSpeedColor(currentResult.downloadMbps)}`}>
              {getSpeedRating(currentResult.downloadMbps)}
            </p>
          </div>
        ) : (
          <p className="text-gray-400 dark:text-gray-500">Tryck på knappen för att starta testet</p>
        )}
      </div>

      {/* Latency */}
      {currentResult && (
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-sm text-gray-500 dark:text-gray-400 hc:text-gray-300">Latens (ping)</span>
            <span className="text-sm font-medium font-mono text-gray-900 dark:text-white">
              {Math.round(currentResult.latencyMs)} ms
            </span>
          </div>
          <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 dark:border-gray-700 hc:border-gray-600">
            <span className="text-sm text-gray-500 dark:text-gray-400 hc:text-gray-300">Nedladdning</span>
            <span className="text-sm font-medium font-mono text-gray-900 dark:text-white">
              {currentResult.downloadMbps.toFixed(2)} Mbps
            </span>
          </div>
        </div>
      )}

      {/* Start/stop button */}
      <div className="flex justify-center">
        {testing ? (
          <button
            onClick={stopTest}
            className="inline-flex items-center gap-2 rounded-lg bg-red-500 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-red-600"
          >
            Stoppa
          </button>
        ) : (
          <button
            onClick={runTest}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            <Play className="h-4 w-4" />
            {currentResult ? 'Testa igen' : 'Starta test'}
          </button>
        )}
      </div>

      {/* History */}
      {history.length > 1 && (
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 hc:border-gray-600">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white">Historik</h3>
          </div>
          {history.map((result, i) => (
            <div
              key={i}
              className={`flex items-center justify-between px-4 py-2.5 ${
                i > 0 ? 'border-t border-gray-200 dark:border-gray-700 hc:border-gray-600' : ''
              }`}
            >
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {result.timestamp.toLocaleTimeString()}
              </span>
              <div className="flex gap-4 text-xs font-mono">
                <span className="text-gray-500 dark:text-gray-400">{Math.round(result.latencyMs)} ms</span>
                <span className={`font-medium ${getSpeedColor(result.downloadMbps)}`}>
                  {result.downloadMbps.toFixed(1)} Mbps
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
