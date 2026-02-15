import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Construction } from 'lucide-react'
import { tools } from '../data/tools'
import { useLanguage } from '../context/LanguageContext'

export default function Placeholder() {
  const { slug } = useParams()
  const { t } = useLanguage()
  const tool = tools.find((item) => item.route === `/${slug}`)

  if (!tool) {
    return (
      <div className="flex flex-col items-center gap-4 py-20 text-center">
        <p className="text-lg text-gray-600 dark:text-gray-400 hc:text-white">{t.notFound}</p>
        <Link to="/" className="text-blue-400 hover:text-blue-300 hc:text-white hc:underline">
          {t.backToTools}
        </Link>
      </div>
    )
  }

  const Icon = tool.icon
  const translation = t.tools[tool.id]

  return (
    <div className="flex flex-col items-center gap-6 py-20 text-center">
      <div className="rounded-2xl bg-gray-50 dark:bg-gray-900 hc:bg-black hc:border-2 hc:border-white p-6">
        <Icon className="h-12 w-12 text-blue-400 hc:text-white" />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{translation?.name}</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 hc:text-gray-200">{translation?.description}</p>
      </div>
      <div className="flex items-center gap-2 rounded-lg bg-yellow-50 dark:bg-yellow-900/30 hc:bg-black hc:border-2 hc:border-white px-4 py-3 text-yellow-700 dark:text-yellow-400 hc:text-white">
        <Construction className="h-5 w-5" />
        <span className="text-sm font-medium">{t.comingSoon}</span>
      </div>
      <Link
        to="/"
        className="mt-4 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:text-gray-900 dark:hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        {t.backToTools}
      </Link>
    </div>
  )
}
