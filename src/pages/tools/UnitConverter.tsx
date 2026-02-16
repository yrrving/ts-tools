import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowDownUp } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

interface UnitCategory {
  key: string
  units: { id: string; label: string; toBase: (v: number) => number; fromBase: (v: number) => number }[]
}

const categories: UnitCategory[] = [
  {
    key: 'length',
    units: [
      { id: 'mm', label: 'mm', toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
      { id: 'cm', label: 'cm', toBase: (v) => v / 100, fromBase: (v) => v * 100 },
      { id: 'm', label: 'm', toBase: (v) => v, fromBase: (v) => v },
      { id: 'km', label: 'km', toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
      { id: 'in', label: 'inch', toBase: (v) => v * 0.0254, fromBase: (v) => v / 0.0254 },
      { id: 'ft', label: 'foot', toBase: (v) => v * 0.3048, fromBase: (v) => v / 0.3048 },
      { id: 'yd', label: 'yard', toBase: (v) => v * 0.9144, fromBase: (v) => v / 0.9144 },
      { id: 'mi', label: 'mile', toBase: (v) => v * 1609.344, fromBase: (v) => v / 1609.344 },
    ],
  },
  {
    key: 'weight',
    units: [
      { id: 'mg', label: 'mg', toBase: (v) => v / 1_000_000, fromBase: (v) => v * 1_000_000 },
      { id: 'g', label: 'g', toBase: (v) => v / 1000, fromBase: (v) => v * 1000 },
      { id: 'kg', label: 'kg', toBase: (v) => v, fromBase: (v) => v },
      { id: 'ton', label: 'ton', toBase: (v) => v * 1000, fromBase: (v) => v / 1000 },
      { id: 'oz', label: 'oz', toBase: (v) => v * 0.0283495, fromBase: (v) => v / 0.0283495 },
      { id: 'lb', label: 'lb', toBase: (v) => v * 0.453592, fromBase: (v) => v / 0.453592 },
    ],
  },
  {
    key: 'temperature',
    units: [
      { id: 'c', label: '°C', toBase: (v) => v, fromBase: (v) => v },
      { id: 'f', label: '°F', toBase: (v) => (v - 32) * 5 / 9, fromBase: (v) => v * 9 / 5 + 32 },
      { id: 'k', label: 'K', toBase: (v) => v - 273.15, fromBase: (v) => v + 273.15 },
    ],
  },
  {
    key: 'speed',
    units: [
      { id: 'ms', label: 'm/s', toBase: (v) => v, fromBase: (v) => v },
      { id: 'kmh', label: 'km/h', toBase: (v) => v / 3.6, fromBase: (v) => v * 3.6 },
      { id: 'mph', label: 'mph', toBase: (v) => v * 0.44704, fromBase: (v) => v / 0.44704 },
      { id: 'kn', label: 'knop', toBase: (v) => v * 0.514444, fromBase: (v) => v / 0.514444 },
    ],
  },
  {
    key: 'data',
    units: [
      { id: 'b', label: 'B', toBase: (v) => v, fromBase: (v) => v },
      { id: 'kb', label: 'KB', toBase: (v) => v * 1024, fromBase: (v) => v / 1024 },
      { id: 'mb', label: 'MB', toBase: (v) => v * 1024 ** 2, fromBase: (v) => v / 1024 ** 2 },
      { id: 'gb', label: 'GB', toBase: (v) => v * 1024 ** 3, fromBase: (v) => v / 1024 ** 3 },
      { id: 'tb', label: 'TB', toBase: (v) => v * 1024 ** 4, fromBase: (v) => v / 1024 ** 4 },
    ],
  },
]

export default function UnitConverter() {
  const { t } = useLanguage()
  const translation = t.tools['enhetsomvandlare']
  const u = t.unitConverter

  const categoryLabels: Record<string, string> = {
    length: u?.length ?? 'Längd',
    weight: u?.weight ?? 'Vikt',
    temperature: u?.temperature ?? 'Temperatur',
    speed: u?.speed ?? 'Hastighet',
    data: u?.data ?? 'Data',
  }

  const [catIdx, setCatIdx] = useState(0)
  const [fromUnit, setFromUnit] = useState(categories[0].units[2].id) // m
  const [toUnit, setToUnit] = useState(categories[0].units[3].id) // km
  const [value, setValue] = useState('')

  const cat = categories[catIdx]
  const from = cat.units.find((u) => u.id === fromUnit) ?? cat.units[0]
  const to = cat.units.find((u) => u.id === toUnit) ?? cat.units[1]

  const numValue = parseFloat(value)
  const result = !isNaN(numValue) ? to.fromBase(from.toBase(numValue)) : null

  const formatResult = (n: number) => {
    if (Math.abs(n) < 0.000001 && n !== 0) return n.toExponential(6)
    const s = n.toPrecision(10)
    return parseFloat(s).toString()
  }

  const switchCategory = (idx: number) => {
    setCatIdx(idx)
    setFromUnit(categories[idx].units[0].id)
    setToUnit(categories[idx].units[1].id)
    setValue('')
  }

  const swap = () => {
    setFromUnit(toUnit)
    setToUnit(fromUnit)
  }

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
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {translation?.name}
        </h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400 hc:text-gray-200">
          {translation?.description}
        </p>
        {translation?.hint && (
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500 hc:text-gray-300 italic">{translation.hint}</p>
        )}
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((c, i) => (
          <button
            key={c.key}
            onClick={() => switchCategory(i)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              catIdx === i
                ? 'bg-blue-600 text-white hc:bg-white hc:text-black'
                : 'bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 text-gray-600 dark:text-gray-400 hc:text-gray-400 hc:border hc:border-gray-600'
            }`}
          >
            {categoryLabels[c.key]}
          </button>
        ))}
      </div>

      {/* Converter */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4 space-y-4">
        {/* From */}
        <div className="flex gap-3">
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="0"
            className="flex-1 rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-4 py-3 text-lg font-mono text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          />
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className="rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100 hc:text-white"
          >
            {cat.units.map((u) => (
              <option key={u.id} value={u.id}>{u.label}</option>
            ))}
          </select>
        </div>

        {/* Swap */}
        <div className="flex justify-center">
          <button
            onClick={swap}
            className="rounded-full bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white p-2.5 text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            <ArrowDownUp className="h-5 w-5" />
          </button>
        </div>

        {/* To */}
        <div className="flex gap-3">
          <div className="flex-1 rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-4 py-3 text-lg font-mono text-gray-900 dark:text-white min-h-[3rem] flex items-center">
            {result !== null ? formatResult(result) : <span className="text-gray-400 dark:text-gray-500">&mdash;</span>}
          </div>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className="rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100 hc:text-white"
          >
            {cat.units.map((u) => (
              <option key={u.id} value={u.id}>{u.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Formula hint */}
      {result !== null && (
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          {value} {from.label} = {formatResult(result)} {to.label}
        </p>
      )}
    </div>
  )
}
