import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

const LOREM_WORDS = 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum'.split(' ')

const LOREM_SENTENCES = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  'Curabitur pretium tincidunt lacus, a porttitor nibh venenatis vel.',
  'Nam commodo suscipit quam, ut lobortis nisi pellentesque vel.',
  'Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.',
  'Aliquam erat volutpat, nunc ut tristique massa dictum at.',
  'Donec vitae sapien ut libero venenatis faucibus nullam quis ante.',
  'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  'Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.',
  'Fusce risus nisl, viverra et, tempor et, pretium in, sapien.',
  'Aenean massa cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  'Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
]

function generateWords(count: number): string {
  const result: string[] = []
  for (let i = 0; i < count; i++) {
    result.push(LOREM_WORDS[i % LOREM_WORDS.length])
  }
  result[0] = result[0].charAt(0).toUpperCase() + result[0].slice(1)
  return result.join(' ') + '.'
}

function generateSentences(count: number): string {
  const result: string[] = []
  for (let i = 0; i < count; i++) {
    result.push(LOREM_SENTENCES[i % LOREM_SENTENCES.length])
  }
  return result.join(' ')
}

function generateParagraphs(count: number): string {
  const result: string[] = []
  for (let i = 0; i < count; i++) {
    const sentenceCount = 4 + Math.floor(Math.random() * 4)
    const sentences: string[] = []
    for (let j = 0; j < sentenceCount; j++) {
      const idx = (i * sentenceCount + j) % LOREM_SENTENCES.length
      sentences.push(LOREM_SENTENCES[idx])
    }
    result.push(sentences.join(' '))
  }
  return result.join('\n\n')
}

type Mode = 'paragraphs' | 'sentences' | 'words'

export default function LoremIpsum() {
  const { t } = useLanguage()
  const translation = t.tools['lorem-ipsum']
  const lt = t.loremIpsum

  const [mode, setMode] = useState<Mode>('paragraphs')
  const [count, setCount] = useState('3')
  const [output, setOutput] = useState('')
  const [copied, setCopied] = useState(false)

  const generate = () => {
    const n = Math.max(1, Math.min(100, parseInt(count) || 1))
    if (mode === 'paragraphs') setOutput(generateParagraphs(n))
    else if (mode === 'sentences') setOutput(generateSentences(n))
    else setOutput(generateWords(n))
    setCopied(false)
  }

  const copy = async () => {
    await navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const modes: { key: Mode; label: string }[] = [
    { key: 'paragraphs', label: lt?.paragraphs || 'Stycken' },
    { key: 'sentences', label: lt?.sentences || 'Meningar' },
    { key: 'words', label: lt?.words || 'Ord' },
  ]

  return (
    <div className="mx-auto max-w-2xl space-y-6 py-10">
      <BackLink />

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{translation?.name}</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400 hc:text-gray-200">{translation?.description}</p>
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4 space-y-4">
        {/* Mode tabs */}
        <div className="flex gap-2">
          {modes.map((m) => (
            <button
              key={m.key}
              onClick={() => setMode(m.key)}
              className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                mode === m.key
                  ? 'bg-blue-600 text-white hc:bg-white hc:text-black'
                  : 'bg-gray-100 dark:bg-gray-600 hc:bg-gray-900 text-gray-600 dark:text-gray-400 hc:text-gray-400 hc:border hc:border-gray-600'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* Count + Generate */}
        <div className="flex gap-3">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 hc:text-white mb-1">
              {lt?.count || 'Antal'}
            </label>
            <input
              type="number"
              value={count}
              onChange={(e) => setCount(e.target.value)}
              min="1"
              max="100"
              className="w-full rounded-lg border border-gray-200 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-3 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={generate}
              className="rounded-lg bg-blue-600 hc:bg-white hc:text-black px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700"
            >
              {lt?.generate || 'Generera'}
            </button>
          </div>
        </div>

        {/* Output */}
        {output && (
          <div className="space-y-2">
            <div className="flex justify-end">
              <button
                onClick={copy}
                className="flex items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-600 hc:bg-gray-900 hc:border hc:border-white px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-500"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? (lt?.copied || 'Kopierat!') : (lt?.copy || 'Kopiera')}
              </button>
            </div>
            <div className="rounded-lg bg-gray-100 dark:bg-gray-800 hc:bg-gray-900 hc:border hc:border-white p-4 max-h-96 overflow-y-auto">
              <p className="text-sm text-gray-700 dark:text-gray-300 hc:text-gray-200 whitespace-pre-wrap">{output}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
