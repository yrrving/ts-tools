import { useState } from 'react'
import TabNavigation from '../components/TabNavigation'
import ToolCard from '../components/ToolCard'
import { tools, type Category } from '../data/tools'

export default function Home() {
  const [category, setCategory] = useState<Category>('alla')

  const filtered = tools.filter((tool) => {
    if (category === 'alla') return true
    if (category === 'dator') return tool.device === 'dator' || tool.device === 'båda'
    if (category === 'mobil') return tool.device === 'mobil' || tool.device === 'båda'
    if (category === 'online') return tool.connection === 'online'
    if (category === 'offline') return tool.connection === 'offline'
    return true
  })

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-white">Verktyg</h1>
        <TabNavigation active={category} onChange={setCategory} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((tool) => (
          <ToolCard key={tool.route} tool={tool} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-8 text-center text-gray-500">Inga verktyg matchar filtret.</p>
      )}
    </div>
  )
}
