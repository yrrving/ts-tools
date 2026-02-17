import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Copy, Check } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

type Lang = 'js' | 'css' | 'html'

function minifyJs(code: string): string {
  return code
    .replace(/\/\/.*$/gm, '')           // single-line comments
    .replace(/\/\*[\s\S]*?\*\//g, '')   // multi-line comments
    .replace(/\s*\n\s*/g, '')           // newlines and surrounding spaces
    .replace(/\s{2,}/g, ' ')           // multiple spaces
    .replace(/\s*([{}();,:])\s*/g, '$1') // spaces around operators
    .trim()
}

function minifyCss(code: string): string {
  return code
    .replace(/\/\*[\s\S]*?\*\//g, '')   // comments
    .replace(/\s*\n\s*/g, '')           // newlines
    .replace(/\s{2,}/g, ' ')           // multiple spaces
    .replace(/\s*([{}:;,>~+])\s*/g, '$1') // spaces around selectors/operators
    .replace(/;\}/g, '}')              // trailing semicolons before }
    .trim()
}

function minifyHtml(code: string): string {
  return code
    .replace(/<!--[\s\S]*?-->/g, '')    // comments
    .replace(/\s*\n\s*/g, ' ')          // newlines to single space
    .replace(/\s{2,}/g, ' ')           // multiple spaces
    .replace(/>\s+</g, '><')           // spaces between tags
    .trim()
}

export default function CodeMinifier() {
  const { t } = useLanguage()
  const translation = t.tools['kodminifierare']
  const cm = t.codeMinifier

  const [lang, setLang] = useState<Lang>('js')
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [copied, setCopied] = useState(false)

  const minify = () => {
    if (lang === 'js') setOutput(minifyJs(input))
    else if (lang === 'css') setOutput(minifyCss(input))
    else setOutput(minifyHtml(input))
  }

  const copy = async () => {
    await navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const savedBytes = input.length - output.length
  const savedPercent = input.length > 0 ? Math.round((savedBytes / input.length) * 100) : 0

  const langs: { key: Lang; label: string }[] = [
    { key: 'js', label: 'JavaScript' },
    { key: 'css', label: 'CSS' },
    { key: 'html', label: 'HTML' },
  ]

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
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4 space-y-4">
        {/* Language tabs */}
        <div className="flex gap-2">
          {langs.map((l) => (
            <button
              key={l.key}
              onClick={() => { setLang(l.key); setOutput('') }}
              className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                lang === l.key
                  ? 'bg-blue-600 text-white hc:bg-white hc:text-black'
                  : 'bg-gray-100 dark:bg-gray-600 hc:bg-gray-900 text-gray-600 dark:text-gray-400 hc:text-gray-400 hc:border hc:border-gray-600'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Input */}
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={cm?.placeholder || 'Klistra in kod här...'}
          className="w-full h-48 rounded-lg border border-gray-200 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-4 py-3 font-mono text-sm text-gray-900 dark:text-white placeholder-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={minify}
          disabled={!input.trim()}
          className="w-full rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-3 font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
        >
          {cm?.minify || 'Minifiera'}
        </button>

        {/* Output */}
        {output && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex gap-3 text-sm text-gray-500 dark:text-gray-400 hc:text-gray-300">
                <span>{cm?.saved || 'Sparat'}: {savedBytes} bytes ({savedPercent}%)</span>
              </div>
              <button
                onClick={copy}
                className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hc:text-gray-300 hover:text-gray-700 dark:hover:text-white"
              >
                {copied ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
                {copied ? (cm?.copied || 'Kopierat!') : (cm?.copy || 'Kopiera')}
              </button>
            </div>
            <pre className="rounded-lg bg-gray-100 dark:bg-gray-800 hc:bg-gray-900 hc:border hc:border-white p-4 font-mono text-sm text-gray-900 dark:text-white overflow-x-auto max-h-48 break-all whitespace-pre-wrap">
              {output}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}
