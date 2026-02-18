import { useState, useRef, useCallback, useEffect } from 'react'
import { RotateCcw } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

const CREDIT_CARD_WIDTH_CM = 8.56

export default function RulerTool() {
  const { t } = useLanguage()
  const translation = t.tools['linjal']

  const rulerRef = useRef<HTMLDivElement>(null)
  const [pxPerCm, setPxPerCm] = useState(() => {
    const saved = localStorage.getItem('bytebox-ruler-ppcm')
    return saved ? Number(saved) : (window.devicePixelRatio * 96) / 2.54
  })
  const [unit, setUnit] = useState<'cm' | 'inch'>('cm')
  const [calibrating, setCalibrating] = useState(false)
  const [calibWidth, setCalibWidth] = useState(200)
  const [orientation, setOrientation] = useState<'horizontal' | 'vertical'>('horizontal')

  // Measurement state
  const [measuring, setMeasuring] = useState(false)
  const [measureStart, setMeasureStart] = useState(0)
  const [measureEnd, setMeasureEnd] = useState(0)

  const pxPerUnit = unit === 'cm' ? pxPerCm : pxPerCm * 2.54
  const unitLabel = unit === 'cm' ? 'cm' : 'in'
  const rulerLength = orientation === 'horizontal' ? 30 : 20 // units
  const totalPx = rulerLength * pxPerUnit

  const saveCalibration = useCallback(() => {
    const newPxPerCm = calibWidth / CREDIT_CARD_WIDTH_CM
    setPxPerCm(newPxPerCm)
    localStorage.setItem('bytebox-ruler-ppcm', String(newPxPerCm))
    setCalibrating(false)
  }, [calibWidth])

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (calibrating) return
    const rect = rulerRef.current?.getBoundingClientRect()
    if (!rect) return
    const pos = orientation === 'horizontal' ? e.clientX - rect.left : e.clientY - rect.top
    setMeasureStart(pos)
    setMeasureEnd(pos)
    setMeasuring(true)
  }, [calibrating, orientation])

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!measuring) return
    const rect = rulerRef.current?.getBoundingClientRect()
    if (!rect) return
    const pos = orientation === 'horizontal' ? e.clientX - rect.left : e.clientY - rect.top
    setMeasureEnd(pos)
  }, [measuring, orientation])

  const handlePointerUp = useCallback(() => {
    setMeasuring(false)
  }, [])

  useEffect(() => {
    const handleUp = () => setMeasuring(false)
    window.addEventListener('pointerup', handleUp)
    return () => window.removeEventListener('pointerup', handleUp)
  }, [])

  const measurePx = Math.abs(measureEnd - measureStart)
  const measureValue = measurePx / pxPerUnit

  // Generate tick marks
  const ticks: { pos: number; major: boolean; label?: string }[] = []
  const subDivisions = unit === 'cm' ? 10 : 8
  const totalTicks = rulerLength * subDivisions

  for (let i = 0; i <= totalTicks; i++) {
    const pos = (i / subDivisions) * pxPerUnit
    const isMajor = i % subDivisions === 0
    const isHalf = unit === 'cm' ? i % 5 === 0 : i % 4 === 0
    ticks.push({
      pos,
      major: isMajor,
      label: isMajor ? String(i / subDivisions) : undefined,
    })
    if (!isMajor && !isHalf) continue // only render major, half, and minor ticks at appropriate scale
  }

  // For rendering, compute ticks more simply
  const renderTicks: React.ReactNode[] = []
  for (let i = 0; i <= totalTicks; i++) {
    const pos = (i / subDivisions) * pxPerUnit
    const isMajor = i % subDivisions === 0
    const isHalf = unit === 'cm' ? i % 5 === 0 : i % 4 === 0
    const tickHeight = isMajor ? 20 : isHalf ? 14 : 8

    if (orientation === 'horizontal') {
      renderTicks.push(
        <div key={i} className="absolute top-0" style={{ left: pos }}>
          <div
            className="w-px bg-gray-900 dark:bg-gray-100 hc:bg-white"
            style={{ height: tickHeight }}
          />
          {isMajor && (
            <span className="absolute left-1 top-5 text-[10px] text-gray-700 dark:text-gray-300 hc:text-white select-none">
              {i / subDivisions}
            </span>
          )}
        </div>
      )
    } else {
      renderTicks.push(
        <div key={i} className="absolute left-0" style={{ top: pos }}>
          <div
            className="h-px bg-gray-900 dark:bg-gray-100 hc:bg-white"
            style={{ width: tickHeight }}
          />
          {isMajor && (
            <span className="absolute left-6 top-[-6px] text-[10px] text-gray-700 dark:text-gray-300 hc:text-white select-none">
              {i / subDivisions}
            </span>
          )}
        </div>
      )
    }
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6 py-10">
      <BackLink />

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{translation?.name}</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400 hc:text-gray-200">{translation?.description}</p>
        {translation?.hint && (
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500 hc:text-gray-300 italic">{translation.hint}</p>
        )}
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-2">
        <div className="flex rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hc:border-white">
          <button
            onClick={() => setUnit('cm')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              unit === 'cm' ? 'bg-blue-600 text-white' : 'bg-gray-50 dark:bg-gray-800 hc:bg-black text-gray-600 dark:text-gray-400 hc:text-white'
            }`}
          >
            cm
          </button>
          <button
            onClick={() => setUnit('inch')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              unit === 'inch' ? 'bg-blue-600 text-white' : 'bg-gray-50 dark:bg-gray-800 hc:bg-black text-gray-600 dark:text-gray-400 hc:text-white'
            }`}
          >
            inch
          </button>
        </div>

        <button
          onClick={() => setOrientation(orientation === 'horizontal' ? 'vertical' : 'horizontal')}
          className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <RotateCcw className="h-4 w-4" />
          {orientation === 'horizontal' ? 'Vertikal' : 'Horisontell'}
        </button>

        <button
          onClick={() => setCalibrating(!calibrating)}
          className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          Kalibrera
        </button>
      </div>

      {/* Calibration */}
      {calibrating && (
        <div className="rounded-xl border border-yellow-300 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20 hc:bg-black hc:border-white p-4 space-y-3">
          <p className="text-sm text-yellow-800 dark:text-yellow-300 hc:text-white">
            Dra i reglaget tills den gula rutan har samma bredd som ett kreditkort (8.56 cm).
          </p>
          <div
            className="h-14 rounded-lg border-2 border-yellow-400 dark:border-yellow-600 bg-yellow-100 dark:bg-yellow-800/30"
            style={{ width: calibWidth }}
          />
          <input
            type="range"
            min={150}
            max={500}
            value={calibWidth}
            onChange={(e) => setCalibWidth(Number(e.target.value))}
            className="w-full accent-yellow-500"
          />
          <button
            onClick={saveCalibration}
            className="rounded-lg bg-yellow-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-yellow-600"
          >
            Spara kalibrering
          </button>
        </div>
      )}

      {/* Measurement display */}
      {measurePx > 2 && (
        <div className="rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 hc:bg-black hc:border-white p-4 text-center">
          <span className="text-3xl font-bold font-mono text-blue-700 dark:text-blue-300 hc:text-white">
            {measureValue.toFixed(2)} {unitLabel}
          </span>
          <p className="mt-1 text-xs text-blue-500 dark:text-blue-400 hc:text-gray-300">
            {measurePx.toFixed(0)} px
          </p>
        </div>
      )}

      {/* Ruler */}
      <div className="overflow-auto">
        <div
          ref={rulerRef}
          className="relative select-none cursor-crosshair rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-amber-50 dark:bg-gray-800 hc:bg-black"
          style={
            orientation === 'horizontal'
              ? { width: totalPx, height: 60, minWidth: totalPx }
              : { width: 60, height: totalPx }
          }
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
        >
          {renderTicks}

          {/* Measurement overlay */}
          {measurePx > 2 && (
            <div
              className="absolute bg-blue-500/20 border-blue-500"
              style={
                orientation === 'horizontal'
                  ? {
                      left: Math.min(measureStart, measureEnd),
                      top: 0,
                      width: measurePx,
                      height: '100%',
                      borderLeft: '2px solid',
                      borderRight: '2px solid',
                      borderColor: 'rgb(59 130 246)',
                    }
                  : {
                      top: Math.min(measureStart, measureEnd),
                      left: 0,
                      height: measurePx,
                      width: '100%',
                      borderTop: '2px solid',
                      borderBottom: '2px solid',
                      borderColor: 'rgb(59 130 246)',
                    }
              }
            />
          )}
        </div>
      </div>

      <p className="text-xs text-gray-400 dark:text-gray-500 hc:text-gray-300 text-center">
        Klicka och dra p&aring; linjalen f&ouml;r att m&auml;ta. Kalibrera f&ouml;r exakta m&aring;tt.
      </p>
    </div>
  )
}
