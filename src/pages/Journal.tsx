import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { changelog } from '../data/changelog'

const typeBadgeClass: Record<string, string> = {
  added: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400 hc:bg-white hc:text-black',
  changed: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400 hc:bg-white hc:text-black',
  fixed: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-400 hc:bg-white hc:text-black',
}

export default function Journal() {
  const { language, t } = useLanguage()

  return (
    <div className="mx-auto max-w-2xl">
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:text-gray-900 dark:hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        {t.backToTools}
      </Link>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{t.journal.heading}</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400 hc:text-gray-200">{t.journal.description}</p>
      </div>

      <div className="mb-8 rounded-xl border border-blue-200 dark:border-blue-800 hc:border-white bg-blue-50 dark:bg-blue-950/30 hc:bg-black p-6">
        <p className="text-sm leading-relaxed text-blue-900 dark:text-blue-200 hc:text-white italic">
          {t.journal.mission}
        </p>
      </div>

      <div className="space-y-8">
        {changelog.map((entry) => (
          <article
            key={entry.version}
            className="rounded-xl border border-gray-200 dark:border-gray-800 hc:border-white bg-gray-50 dark:bg-gray-900 hc:bg-black p-6"
          >
            <div className="mb-4 flex items-baseline justify-between">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                {entry.version} — {entry.title[language] ?? entry.title.en}
              </h2>
              <time className="text-sm text-gray-500 hc:text-gray-300">{entry.date}</time>
            </div>
            <ul className="space-y-2">
              {entry.changes.map((change, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span
                    className={`mt-0.5 shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${typeBadgeClass[change.type]}`}
                  >
                    {t.journal[change.type]}
                  </span>
                  <span className="text-sm text-gray-700 dark:text-gray-300 hc:text-white">
                    {change.text[language] ?? change.text.en}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:text-gray-900 dark:hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        {t.backToTools}
      </Link>
    </div>
  )
}
