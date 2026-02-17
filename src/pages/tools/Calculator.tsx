import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

function calculate(expression: string): number {
  const tokens: (number | string)[] = []
  let num = ''
  for (let i = 0; i < expression.length; i++) {
    const ch = expression[i]
    if (ch === '-' && (i === 0 || '+-×÷('.includes(expression[i - 1]))) {
      num += ch
    } else if ('0123456789.'.includes(ch)) {
      num += ch
    } else if ('+-×÷'.includes(ch)) {
      if (num) { tokens.push(parseFloat(num)); num = '' }
      tokens.push(ch)
    }
  }
  if (num) tokens.push(parseFloat(num))

  // Handle × and ÷ first
  let i = 1
  while (i < tokens.length) {
    if (tokens[i] === '×' || tokens[i] === '÷') {
      const left = tokens[i - 1] as number
      const right = tokens[i + 1] as number
      const result = tokens[i] === '×' ? left * right : right !== 0 ? left / right : NaN
      tokens.splice(i - 1, 3, result)
    } else {
      i += 2
    }
  }

  // Handle + and -
  let result = tokens[0] as number
  for (let j = 1; j < tokens.length; j += 2) {
    const op = tokens[j] as string
    const val = tokens[j + 1] as number
    if (op === '+') result += val
    else if (op === '-') result -= val
  }

  return result
}

export default function Calculator() {
  const { t } = useLanguage()
  const translation = t.tools['miniraknare']
  const ct = t.calculator

  const [display, setDisplay] = useState('0')
  const [expression, setExpression] = useState('')
  const [newNumber, setNewNumber] = useState(true)

  const handleNumber = (n: string) => {
    if (newNumber) {
      setDisplay(n === '.' ? '0.' : n)
      setNewNumber(false)
    } else {
      if (n === '.' && display.includes('.')) return
      setDisplay(display === '0' && n !== '.' ? n : display + n)
    }
  }

  const handleOperator = (op: string) => {
    setExpression(expression + display + op)
    setNewNumber(true)
  }

  const handleEquals = () => {
    const full = expression + display
    try {
      const result = calculate(full)
      const formatted = isNaN(result) || !isFinite(result)
        ? (ct?.error || 'Fel')
        : String(parseFloat(result.toFixed(10)))
      setDisplay(formatted)
      setExpression('')
      setNewNumber(true)
    } catch {
      setDisplay(ct?.error || 'Fel')
      setExpression('')
      setNewNumber(true)
    }
  }

  const handleClear = () => {
    setDisplay('0')
    setExpression('')
    setNewNumber(true)
  }

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1))
    } else {
      setDisplay('0')
      setNewNumber(true)
    }
  }

  const buttons = [
    { label: 'C', action: handleClear, className: 'bg-red-500/20 text-red-400 dark:text-red-400 hc:text-red-300 hc:border hc:border-red-400' },
    { label: '⌫', action: handleBackspace, className: 'bg-gray-200 dark:bg-gray-600 hc:bg-gray-900 text-gray-700 dark:text-gray-300 hc:text-white hc:border hc:border-white' },
    { label: '%', action: () => { setDisplay(String(parseFloat(display) / 100)); setNewNumber(true) }, className: 'bg-gray-200 dark:bg-gray-600 hc:bg-gray-900 text-gray-700 dark:text-gray-300 hc:text-white hc:border hc:border-white' },
    { label: '÷', action: () => handleOperator('÷'), className: 'bg-blue-500/20 text-blue-400 hc:text-blue-300 hc:border hc:border-blue-400' },
    { label: '7', action: () => handleNumber('7') },
    { label: '8', action: () => handleNumber('8') },
    { label: '9', action: () => handleNumber('9') },
    { label: '×', action: () => handleOperator('×'), className: 'bg-blue-500/20 text-blue-400 hc:text-blue-300 hc:border hc:border-blue-400' },
    { label: '4', action: () => handleNumber('4') },
    { label: '5', action: () => handleNumber('5') },
    { label: '6', action: () => handleNumber('6') },
    { label: '−', action: () => handleOperator('-'), className: 'bg-blue-500/20 text-blue-400 hc:text-blue-300 hc:border hc:border-blue-400' },
    { label: '1', action: () => handleNumber('1') },
    { label: '2', action: () => handleNumber('2') },
    { label: '3', action: () => handleNumber('3') },
    { label: '+', action: () => handleOperator('+'), className: 'bg-blue-500/20 text-blue-400 hc:text-blue-300 hc:border hc:border-blue-400' },
    { label: '0', action: () => handleNumber('0'), className: 'col-span-2' },
    { label: '.', action: () => handleNumber('.') },
    { label: '=', action: handleEquals, className: 'bg-blue-600 text-white hc:bg-white hc:text-black' },
  ]

  return (
    <div className="mx-auto max-w-sm space-y-6 py-10">
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
        {/* Display */}
        <div className="rounded-lg bg-gray-100 dark:bg-gray-800 hc:bg-gray-900 hc:border hc:border-white p-4 text-right">
          <div className="text-xs text-gray-500 dark:text-gray-500 hc:text-gray-300 h-5 overflow-hidden">
            {expression}
          </div>
          <div className="text-3xl font-mono font-bold text-gray-900 dark:text-white truncate">
            {display}
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn) => (
            <button
              key={btn.label}
              onClick={btn.action}
              className={`rounded-lg py-3 text-lg font-semibold transition-colors hover:opacity-80 ${
                btn.className || 'bg-gray-100 dark:bg-gray-600 hc:bg-gray-900 text-gray-900 dark:text-white hc:border hc:border-gray-600'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
