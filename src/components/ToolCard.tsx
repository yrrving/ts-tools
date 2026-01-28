import { Link } from 'react-router-dom'
import type { Tool } from '../data/tools'

interface ToolCardProps {
  tool: Tool
}

const deviceLabel: Record<string, string> = {
  dator: 'Dator',
  mobil: 'Mobil',
  båda: 'Båda',
}

export default function ToolCard({ tool }: ToolCardProps) {
  const Icon = tool.icon

  return (
    <Link
      to={tool.route}
      className="group flex flex-col gap-3 rounded-xl border border-gray-800 bg-gray-900 p-5 no-underline transition-colors hover:border-gray-700 hover:bg-gray-800/70"
    >
      <div className="flex items-start justify-between">
        <div className="rounded-lg bg-gray-800 p-2.5 text-blue-400 transition-colors group-hover:bg-blue-600/20">
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex gap-1.5">
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-medium ${
              tool.connection === 'online'
                ? 'bg-green-900/50 text-green-400'
                : 'bg-gray-800 text-gray-400'
            }`}
          >
            {tool.connection === 'online' ? 'Online' : 'Offline'}
          </span>
          <span className="rounded-full bg-gray-800 px-2 py-0.5 text-xs font-medium text-gray-400">
            {deviceLabel[tool.device]}
          </span>
        </div>
      </div>
      <div>
        <h3 className="text-base font-semibold text-white">{tool.name}</h3>
        <p className="mt-1 text-sm text-gray-400">{tool.description}</p>
      </div>
    </Link>
  )
}
