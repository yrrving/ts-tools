import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

const MONTHS = ['', 'januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december']
const DAYS = ['söndag', 'måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag']

function parseCron(expr: string, lang: { every?: string; at?: string; minute?: string; minutes?: string; hour?: string; hours?: string; day?: string; month?: string; weekday?: string; and?: string; through?: string; past?: string; on?: string; inMonth?: string; onDay?: string }): string {
  const parts = expr.trim().split(/\s+/)
  if (parts.length !== 5) return lang.every ? `❌ ${lang.every}` : '❌ Ange exakt 5 fält'

  const [min, hour, dom, mon, dow] = parts
  const descriptions: string[] = []

  // Minute
  if (min === '*') {
    descriptions.push(lang.every ? `${lang.every} ${lang.minute}` : 'Varje minut')
  } else if (min.includes('/')) {
    const [, step] = min.split('/')
    descriptions.push(lang.every ? `${lang.every} ${step} ${lang.minutes}` : `Var ${step}:e minut`)
  } else if (min.includes(',')) {
    descriptions.push(`${lang.minute || 'Minut'} ${min}`)
  } else {
    descriptions.push(`${lang.at || 'Vid'} ${lang.minute || 'minut'} ${min}`)
  }

  // Hour
  if (hour === '*') {
    descriptions.push(lang.every ? `${lang.every} ${lang.hour?.toLowerCase()}` : 'varje timme')
  } else if (hour.includes('/')) {
    const [, step] = hour.split('/')
    descriptions.push(lang.every ? `${lang.every} ${step} ${lang.hours}` : `var ${step}:e timme`)
  } else if (hour.includes(',')) {
    descriptions.push(`${lang.hour || 'Timme'} ${hour}`)
  } else if (hour.includes('-')) {
    const [from, to] = hour.split('-')
    descriptions.push(`${from}–${to} (${lang.hour || 'timme'})`)
  } else {
    descriptions.push(`${lang.at || 'kl'} ${hour.padStart(2, '0')}:${min === '*' ? '**' : min.padStart(2, '0')}`)
  }

  // Day of month
  if (dom !== '*') {
    if (dom.includes('/')) {
      const [, step] = dom.split('/')
      descriptions.push(`${lang.every || 'var'} ${step}:e ${lang.day || 'dag'}`)
    } else if (dom.includes(',')) {
      descriptions.push(`${lang.onDay || 'dag'} ${dom}`)
    } else {
      descriptions.push(`${lang.onDay || 'den'} ${dom}`)
    }
  }

  // Month
  if (mon !== '*') {
    if (mon.includes(',')) {
      const names = mon.split(',').map((m) => MONTHS[parseInt(m)] || m)
      descriptions.push(`${lang.inMonth || 'i'} ${names.join(', ')}`)
    } else if (mon.includes('-')) {
      const [from, to] = mon.split('-')
      descriptions.push(`${MONTHS[parseInt(from)] || from}–${MONTHS[parseInt(to)] || to}`)
    } else {
      descriptions.push(`${lang.inMonth || 'i'} ${MONTHS[parseInt(mon)] || mon}`)
    }
  }

  // Day of week
  if (dow !== '*') {
    if (dow.includes(',')) {
      const names = dow.split(',').map((d) => DAYS[parseInt(d)] || d)
      descriptions.push(`${lang.on || 'på'} ${names.join(', ')}`)
    } else if (dow.includes('-')) {
      const [from, to] = dow.split('-')
      descriptions.push(`${DAYS[parseInt(from)] || from}–${DAYS[parseInt(to)] || to}`)
    } else {
      descriptions.push(`${lang.on || 'på'} ${DAYS[parseInt(dow)] || dow}`)
    }
  }

  return descriptions.join(', ')
}

const EXAMPLES = [
  { expr: '* * * * *', label: 'Varje minut' },
  { expr: '0 * * * *', label: 'Varje timme' },
  { expr: '0 0 * * *', label: 'Varje dag vid midnatt' },
  { expr: '0 9 * * 1-5', label: 'Vardagar kl 09:00' },
  { expr: '*/15 * * * *', label: 'Var 15:e minut' },
  { expr: '0 0 1 * *', label: 'Första dagen varje månad' },
]

export default function CronParser() {
  const { t } = useLanguage()
  const translation = t.tools['cron-tolkare']
  const ct = t.cronParser

  const [input, setInput] = useState('0 9 * * 1-5')

  const fields = [
    { label: ct?.minute || 'Minut', range: '0–59', symbol: input.trim().split(/\s+/)[0] || '' },
    { label: ct?.hour || 'Timme', range: '0–23', symbol: input.trim().split(/\s+/)[1] || '' },
    { label: ct?.dayOfMonth || 'Dag i månaden', range: '1–31', symbol: input.trim().split(/\s+/)[2] || '' },
    { label: ct?.month || 'Månad', range: '1–12', symbol: input.trim().split(/\s+/)[3] || '' },
    { label: ct?.dayOfWeek || 'Veckodag', range: '0–6', symbol: input.trim().split(/\s+/)[4] || '' },
  ]

  const description = parseCron(input, {
    every: ct?.every,
    at: ct?.at,
    minute: ct?.minuteLabel,
    minutes: ct?.minutesLabel,
    hour: ct?.hourLabel,
    hours: ct?.hoursLabel,
    day: ct?.dayLabel,
    on: ct?.on,
    inMonth: ct?.inMonth,
    onDay: ct?.onDay,
  })

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

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4 space-y-4">
        {/* Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 hc:text-white mb-1">
            {ct?.expression || 'Cron-uttryck'}
          </label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="* * * * *"
            className="w-full rounded-lg border border-gray-200 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-4 py-3 font-mono text-lg text-center text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Field breakdown */}
        <div className="grid grid-cols-5 gap-2">
          {fields.map((f, i) => (
            <div key={i} className="text-center">
              <div className="rounded-lg bg-blue-500/10 dark:bg-blue-500/20 hc:bg-gray-900 hc:border hc:border-blue-400 px-2 py-2">
                <div className="font-mono text-lg font-bold text-blue-600 dark:text-blue-400 hc:text-blue-300">{f.symbol || '—'}</div>
              </div>
              <div className="mt-1 text-xs font-medium text-gray-700 dark:text-gray-300 hc:text-white">{f.label}</div>
              <div className="text-xs text-gray-400 dark:text-gray-500 hc:text-gray-400">{f.range}</div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="rounded-lg bg-gray-100 dark:bg-gray-800 hc:bg-gray-900 hc:border hc:border-white p-4 text-center">
          <div className="text-sm text-gray-500 dark:text-gray-400 hc:text-gray-300 mb-1">{ct?.meaning || 'Betydelse'}</div>
          <div className="text-lg font-medium text-gray-900 dark:text-white">{description}</div>
        </div>

        {/* Examples */}
        <div>
          <div className="text-sm font-medium text-gray-700 dark:text-gray-300 hc:text-white mb-2">{ct?.examples || 'Exempel'}</div>
          <div className="grid grid-cols-2 gap-2">
            {EXAMPLES.map((ex) => (
              <button
                key={ex.expr}
                onClick={() => setInput(ex.expr)}
                className="rounded-lg bg-gray-100 dark:bg-gray-600 hc:bg-gray-900 hc:border hc:border-gray-600 px-3 py-2 text-left transition-colors hover:bg-gray-200 dark:hover:bg-gray-500"
              >
                <div className="font-mono text-sm text-gray-900 dark:text-white">{ex.expr}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 hc:text-gray-300">{ex.label}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
