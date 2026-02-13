import { Link } from 'react-router-dom'
import { Wifi, WifiOff, Monitor, Smartphone, MonitorSmartphone } from 'lucide-react'
import type { Tool } from '../data/tools'
import { useLanguage } from '../context/LanguageContext'

const deviceIcons = {
  dator: Monitor,
  mobil: Smartphone,
  båda: MonitorSmartphone,
}

interface ToolCardProps {
  tool: Tool
}

export default function ToolCard({ tool }: ToolCardProps) {
  const { t } = useLanguage()
  const Icon = tool.icon
  const translation = t.tools[tool.id]
  const DeviceIcon = deviceIcons[tool.device]

  return (
    <Link
      to={tool.route}
      className="group flex flex-col gap-3 rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-5 no-underline transition-colors hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-750"
    >
      <div className="flex items-start justify-between">
        <div className="rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 p-2.5 text-blue-400 hc:text-white transition-colors group-hover:bg-blue-600/20">
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex gap-1.5">
          <span
            className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
              tool.connection === 'online'
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 hc:bg-white hc:text-black'
                : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 hc:bg-gray-900 hc:text-white hc:border hc:border-white'
            }`}
          >
            {tool.connection === 'online'
              ? <Wifi className="h-3 w-3" />
              : <WifiOff className="h-3 w-3" />
            }
            {t.connection[tool.connection]}
          </span>
          <span
            className="flex items-center gap-1 rounded-full bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white px-2 py-0.5 text-xs font-medium text-gray-600 dark:text-gray-300 hc:text-white"
          >
            <DeviceIcon className="h-3 w-3" />
            {t.device[tool.device]}
          </span>
        </div>
      </div>
      <div>
        <h3 className="text-base font-semibold text-gray-900 dark:text-white">{translation?.name}</h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 hc:text-gray-200">{translation?.description}</p>
      </div>
    </Link>
  )
}
