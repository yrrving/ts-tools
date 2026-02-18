import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function BackLink() {
  const navigate = useNavigate()
  const { t } = useLanguage()

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1)
    } else {
      navigate('/')
    }
  }

  return (
    <button
      onClick={handleBack}
      className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:text-gray-900 dark:hover:text-white"
    >
      <ArrowLeft className="h-4 w-4" />
      {t.backToTools}
    </button>
  )
}
