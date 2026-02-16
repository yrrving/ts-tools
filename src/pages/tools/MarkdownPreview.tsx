import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Copy, Check, Trash2, Eye, Edit3 } from 'lucide-react'
import { marked } from 'marked'
import { useLanguage } from '../../context/LanguageContext'

type ViewMode = 'split' | 'edit' | 'preview'

const SAMPLE = `# Hello World

This is a **Markdown** preview tool.

## Features

- Live preview
- Split view
- Copy HTML output

\`\`\`js
const greeting = "Hello!"
console.log(greeting)
\`\`\`

> Blockquotes work too!

| Column 1 | Column 2 |
|----------|----------|
| Cell 1   | Cell 2   |
`

export default function MarkdownPreview() {
  const { t } = useLanguage()
  const translation = t.tools['markdown-forhandsgranskning']
  const md = t.markdownPreview

  const [input, setInput] = useState(SAMPLE)
  const [viewMode, setViewMode] = useState<ViewMode>('split')
  const [copied, setCopied] = useState(false)

  const html = useMemo(() => {
    try {
      return marked.parse(input, { async: false }) as string
    } catch {
      return ''
    }
  }, [input])

  const copyHtml = async () => {
    if (!html) return
    await navigator.clipboard.writeText(html)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6 py-10">
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

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white overflow-hidden">
          {([
            { mode: 'edit' as ViewMode, icon: Edit3, label: md?.edit ?? 'Redigera' },
            { mode: 'split' as ViewMode, icon: Eye, label: md?.split ?? 'Delad' },
            { mode: 'preview' as ViewMode, icon: Eye, label: md?.preview ?? 'Förhandsgranskning' },
          ]).map(({ mode, icon: Icon, label }) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium transition-colors ${
                viewMode === mode
                  ? 'bg-blue-600 text-white hc:bg-white hc:text-black'
                  : 'bg-gray-50 dark:bg-gray-800 hc:bg-black text-gray-600 dark:text-gray-400 hc:text-gray-400'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </button>
          ))}
        </div>
        <button
          onClick={copyHtml}
          disabled={!html}
          className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white px-3 py-2 text-xs text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-40"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? (md?.copied ?? 'Kopierat!') : (md?.copyHtml ?? 'Kopiera HTML')}
        </button>
        <button
          onClick={() => setInput('')}
          disabled={!input}
          className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white px-3 py-2 text-xs text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-40"
        >
          <Trash2 className="h-3.5 w-3.5" />
          {md?.clear ?? 'Rensa'}
        </button>
      </div>

      {/* Editor + Preview */}
      <div className={`grid gap-4 ${viewMode === 'split' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
        {/* Editor */}
        {viewMode !== 'preview' && (
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
            <label className="mb-2 block text-xs font-medium text-gray-500 dark:text-gray-400">
              Markdown
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={md?.placeholder ?? 'Skriv Markdown här...'}
              spellCheck={false}
              className="w-full resize-y rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-4 py-3 font-mono text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              rows={20}
            />
          </div>
        )}

        {/* Preview */}
        {viewMode !== 'edit' && (
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
            <label className="mb-2 block text-xs font-medium text-gray-500 dark:text-gray-400">
              {md?.preview ?? 'Förhandsgranskning'}
            </label>
            <div
              className="prose prose-sm dark:prose-invert max-w-none rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-4 py-3 overflow-auto"
              style={{ minHeight: '20rem' }}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        )}
      </div>
    </div>
  )
}
