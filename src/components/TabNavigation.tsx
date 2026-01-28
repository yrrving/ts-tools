import type { Category } from '../data/tools'

const tabs: { label: string; value: Category }[] = [
  { label: 'Alla', value: 'alla' },
  { label: 'Dator', value: 'dator' },
  { label: 'Mobil', value: 'mobil' },
  { label: 'Online', value: 'online' },
  { label: 'Offline', value: 'offline' },
]

interface TabNavigationProps {
  active: Category
  onChange: (category: Category) => void
}

export default function TabNavigation({ active, onChange }: TabNavigationProps) {
  return (
    <nav className="flex gap-1 rounded-lg bg-gray-900 p-1">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            active === tab.value
              ? 'bg-blue-600 text-white'
              : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  )
}
