import { useState, useEffect } from 'react'
import { Trash2 } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

const STORAGE_KEY = 'bytebox-notepad'

export default function Notepad() {
  const { t } = useLanguage()
  const translation = t.tools['anteckningsblock']
  const nt = t.notepad

  const [text, setText] = useState(() => localStorage.getItem(STORAGE_KEY) || '')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, text)
  }, [text])

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0
  const charCount = text.length

  return (
    <div className="mx-auto max-w-2xl space-y-6 py-10">
      <BackLink />

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{translation?.name}</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400 hc:text-gray-200">{translation?.description}</p>
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4 space-y-3">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={nt?.placeholder || 'Skriv dina anteckningar här...'}
          className="w-full h-80 rounded-lg border border-gray-200 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex items-center justify-between">
          <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400 hc:text-gray-300">
            <span>{nt?.words || 'Ord'}: <span className="font-medium text-gray-900 dark:text-white">{wordCount}</span></span>
            <span>{nt?.characters || 'Tecken'}: <span className="font-medium text-gray-900 dark:text-white">{charCount}</span></span>
          </div>
          <button
            onClick={() => setText('')}
            disabled={!text}
            className="flex items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-600 hc:bg-gray-900 hc:border hc:border-white px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-500 disabled:opacity-40"
          >
            <Trash2 className="h-3.5 w-3.5" />
            {nt?.clear || 'Rensa'}
          </button>
        </div>

        <p className="text-xs text-gray-400 dark:text-gray-500 hc:text-gray-400 italic">
          {nt?.autoSaved || 'Sparas automatiskt i webbläsaren'}
        </p>
      </div>
    </div>
  )
}
