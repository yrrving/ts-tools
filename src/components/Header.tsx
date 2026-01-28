import { Link } from 'react-router-dom'
import { Wrench } from 'lucide-react'

export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white no-underline">
          <Wrench className="h-6 w-6 text-blue-400" />
          ts-tools
        </Link>
      </div>
    </header>
  )
}
