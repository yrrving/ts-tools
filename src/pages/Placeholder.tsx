import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Construction } from 'lucide-react'
import { tools } from '../data/tools'

export default function Placeholder() {
  const { slug } = useParams()
  const tool = tools.find((t) => t.route === `/${slug}`)

  if (!tool) {
    return (
      <div className="flex flex-col items-center gap-4 py-20 text-center">
        <p className="text-lg text-gray-400">Verktyget hittades inte.</p>
        <Link to="/" className="text-blue-400 hover:text-blue-300">
          Tillbaka till startsidan
        </Link>
      </div>
    )
  }

  const Icon = tool.icon

  return (
    <div className="flex flex-col items-center gap-6 py-20 text-center">
      <div className="rounded-2xl bg-gray-900 p-6">
        <Icon className="h-12 w-12 text-blue-400" />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-white">{tool.name}</h1>
        <p className="mt-2 text-gray-400">{tool.description}</p>
      </div>
      <div className="flex items-center gap-2 rounded-lg bg-yellow-900/30 px-4 py-3 text-yellow-400">
        <Construction className="h-5 w-5" />
        <span className="text-sm font-medium">Kommer snart</span>
      </div>
      <Link
        to="/"
        className="mt-4 flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Tillbaka till alla verktyg
      </Link>
    </div>
  )
}
