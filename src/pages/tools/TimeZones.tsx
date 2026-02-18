import { useState, useEffect } from 'react'
import { Plus, Trash2 } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

const POPULAR_ZONES = [
  'Europe/Stockholm',
  'Europe/London',
  'America/New_York',
  'America/Los_Angeles',
  'Asia/Tokyo',
  'Asia/Shanghai',
  'Asia/Kolkata',
  'Australia/Sydney',
  'Europe/Berlin',
  'Europe/Paris',
  'America/Chicago',
  'America/Sao_Paulo',
  'Asia/Dubai',
  'Pacific/Auckland',
]

function getTimeInZone(zone: string, date: Date): { time: string; date: string; offset: string } {
  const opts: Intl.DateTimeFormatOptions = {
    timeZone: zone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }
  const dateOpts: Intl.DateTimeFormatOptions = {
    timeZone: zone,
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  }
  const offsetOpts: Intl.DateTimeFormatOptions = {
    timeZone: zone,
    timeZoneName: 'shortOffset',
  }

  const time = new Intl.DateTimeFormat('sv-SE', opts).format(date)
  const dateStr = new Intl.DateTimeFormat('en-US', dateOpts).format(date)
  const offsetStr = new Intl.DateTimeFormat('en-US', offsetOpts).format(date)
  const offset = offsetStr.split(' ').pop() || ''

  return { time, date: dateStr, offset }
}

function cityName(zone: string): string {
  return zone.split('/').pop()!.replace(/_/g, ' ')
}

export default function TimeZones() {
  const { t } = useLanguage()
  const translation = t.tools['tidszoner']
  const tz = t.timeZones

  const [zones, setZones] = useState<string[]>([
    'Europe/Stockholm',
    'America/New_York',
    'Asia/Tokyo',
    'Europe/London',
  ])
  const [now, setNow] = useState(new Date())
  const [adding, setAdding] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const addZone = (zone: string) => {
    if (!zones.includes(zone)) {
      setZones([...zones, zone])
    }
    setAdding(false)
  }

  const removeZone = (idx: number) => {
    setZones(zones.filter((_, i) => i !== idx))
  }

  const localZone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const localInfo = getTimeInZone(localZone, now)

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

      {/* Local time */}
      <div className="rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 hc:bg-black hc:border-white p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-blue-900 dark:text-blue-200 hc:text-white">
              {tz?.yourTime ?? 'Din tid'} — {cityName(localZone)}
            </p>
            <p className="text-xs text-blue-600 dark:text-blue-400 hc:text-gray-300">{localInfo.offset}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold font-mono text-blue-900 dark:text-blue-100 hc:text-white">{localInfo.time}</p>
            <p className="text-xs text-blue-600 dark:text-blue-400 hc:text-gray-300">{localInfo.date}</p>
          </div>
        </div>
      </div>

      {/* Zone list */}
      <div className="space-y-2">
        {zones.map((zone, i) => {
          const info = getTimeInZone(zone, now)
          return (
            <div
              key={zone}
              className="flex items-center justify-between rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4"
            >
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">{cityName(zone)}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 hc:text-gray-300">{info.offset} — {info.date}</p>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-xl font-bold font-mono text-gray-900 dark:text-white">{info.time}</p>
                <button
                  onClick={() => removeZone(i)}
                  className="rounded p-1.5 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* Add zone */}
      {adding ? (
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
          <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            {tz?.selectZone ?? 'Välj tidszon'}
          </label>
          <div className="flex flex-wrap gap-2">
            {POPULAR_ZONES.filter((z) => !zones.includes(z)).map((zone) => (
              <button
                key={zone}
                onClick={() => addZone(zone)}
                className="rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                {cityName(zone)}
              </button>
            ))}
          </div>
          <button
            onClick={() => setAdding(false)}
            className="mt-3 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
          >
            {tz?.cancel ?? 'Avbryt'}
          </button>
        </div>
      ) : (
        <button
          onClick={() => setAdding(true)}
          className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          <Plus className="h-4 w-4" />
          {tz?.addZone ?? 'Lägg till tidszon'}
        </button>
      )}
    </div>
  )
}
