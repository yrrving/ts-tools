import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Shuffle } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

export default function RandomPicker() {
  const { t } = useLanguage()
  const translation = t.tools['slumpmassigt-val']
  const rp = t.randomPicker

  const [mode, setMode] = useState<'list' | 'coin'>('list')
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  const [animating, setAnimating] = useState(false)
  const animRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const options = input.split('\n').map((s) => s.trim()).filter(Boolean)

  const pick = () => {
    if (options.length === 0) return
    setAnimating(true)
    let count = 0
    const total = 15
    animRef.current = setInterval(() => {
      count++
      setResult(options[Math.floor(Math.random() * options.length)])
      if (count >= total) {
        clearInterval(animRef.current!)
        setResult(options[Math.floor(Math.random() * options.length)])
        setAnimating(false)
      }
    }, 80)
  }

  const flipCoin = () => {
    const heads = rp?.heads || 'Krona'
    const tails = rp?.tails || 'Klave'
    setAnimating(true)
    let count = 0
    const total = 12
    animRef.current = setInterval(() => {
      count++
      setResult(Math.random() > 0.5 ? heads : tails)
      if (count >= total) {
        clearInterval(animRef.current!)
        setResult(Math.random() > 0.5 ? heads : tails)
        setAnimating(false)
      }
    }, 100)
  }

  useEffect(() => {
    return () => { if (animRef.current) clearInterval(animRef.current) }
  }, [])

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

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4 space-y-4">
        {/* Mode tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => { setMode('list'); setResult('') }}
            className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              mode === 'list'
                ? 'bg-blue-600 text-white hc:bg-white hc:text-black'
                : 'bg-gray-100 dark:bg-gray-600 hc:bg-gray-900 text-gray-600 dark:text-gray-400 hc:text-gray-400 hc:border hc:border-gray-600'
            }`}
          >
            {rp?.listMode || 'Lista'}
          </button>
          <button
            onClick={() => { setMode('coin'); setResult('') }}
            className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              mode === 'coin'
                ? 'bg-blue-600 text-white hc:bg-white hc:text-black'
                : 'bg-gray-100 dark:bg-gray-600 hc:bg-gray-900 text-gray-600 dark:text-gray-400 hc:text-gray-400 hc:border hc:border-gray-600'
            }`}
          >
            {rp?.coinFlip || 'Myntkast'}
          </button>
        </div>

        {mode === 'list' && (
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={rp?.placeholder || 'Skriv ett alternativ per rad...'}
            className="w-full h-40 rounded-lg border border-gray-200 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )}

        <button
          onClick={mode === 'list' ? pick : flipCoin}
          disabled={animating || (mode === 'list' && options.length === 0)}
          className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-3 font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
        >
          <Shuffle className="h-4 w-4" />
          {mode === 'list' ? (rp?.choose || 'Välj') : (rp?.flip || 'Kasta')}
        </button>

        {result && (
          <div className="rounded-lg bg-gray-100 dark:bg-gray-800 hc:bg-gray-900 hc:border hc:border-white p-6 text-center">
            <div className={`text-3xl font-bold text-gray-900 dark:text-white ${animating ? 'opacity-60' : ''} transition-opacity`}>
              {mode === 'coin' ? (
                <span className="text-5xl">{result === (rp?.heads || 'Krona') ? '👑' : '🪙'}</span>
              ) : null}
              <div className={mode === 'coin' ? 'mt-2' : ''}>{result}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
