import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, ArrowLeft, Image, FileText, Volume2, Code2, Globe, Hash, Zap, type LucideIcon } from 'lucide-react'
import TabNavigation from '../components/TabNavigation'
import ToolCard from '../components/ToolCard'
import { tools, categoryOrder, type Category, type ToolCategory } from '../data/tools'
import { useLanguage } from '../context/LanguageContext'

const categoryIcons: Record<ToolCategory, LucideIcon> = {
  bild: Image,
  text: FileText,
  ljud: Volume2,
  kod: Code2,
  natverk: Globe,
  berakning: Hash,
  produktivitet: Zap,
}

export default function Home() {
  const [category, setCategory] = useState<Category>('alla')
  const [search, setSearch] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedCategory = (searchParams.get('cat') as ToolCategory) || null
  const { t } = useLanguage()

  const categoryNames = t.categories ?? {
    bild: 'Bild & Media',
    text: 'Text & Dokument',
    ljud: 'Ljud & Tal',
    kod: 'Kod & Data',
    natverk: 'Nätverk & Säkerhet',
    berakning: 'Beräkning & Konvertering',
    produktivitet: 'Produktivitet & Verktyg',
  }

  const allCategoriesLabel = t.allCategories ?? 'Alla kategorier'

  const filtered = tools.filter((tool) => {
    const categoryMatch =
      category === 'alla' ||
      (category === 'dator' && (tool.device === 'dator' || tool.device === 'båda')) ||
      (category === 'mobil' && (tool.device === 'mobil' || tool.device === 'båda')) ||
      (category === 'online' && tool.connection === 'online') ||
      (category === 'offline' && tool.connection === 'offline')

    if (!categoryMatch) return false
    if (!search.trim()) return true

    const toolT = t.tools[tool.id]
    if (!toolT) return true
    const q = search.toLowerCase()
    return toolT.name.toLowerCase().includes(q) || toolT.description.toLowerCase().includes(q)
  })

  const showCategories = category === 'alla' && !search.trim()

  const handleTabChange = (tab: Category) => {
    setCategory(tab)
    setSearchParams({})
  }

  return (
    <div>
      <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{t.toolsHeading}</h1>
        <TabNavigation active={category} onChange={handleTabChange} />
      </div>
      <div className="relative mb-6">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-gray-500 hc:text-white" />
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            if (e.target.value.trim()) setSearchParams({})
          }}
          placeholder={t.searchPlaceholder}
          className="w-full rounded-lg border border-gray-300 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-800 hc:bg-black py-2 pl-10 pr-4 text-sm text-gray-900 dark:text-gray-100 hc:text-white placeholder-gray-400 dark:placeholder-gray-500 hc:placeholder-gray-300 outline-none transition-colors focus:border-blue-400 dark:focus:border-blue-500 hc:focus:border-white"
        />
      </div>

      {showCategories && selectedCategory === null ? (
        /* ── Category cards landing ── */
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categoryOrder.map((cat) => {
            const catTools = tools.filter((tool) => tool.category === cat)
            const previewNames = catTools
              .slice(0, 4)
              .map((tool) => t.tools[tool.id]?.name ?? tool.id)
            const CatIcon = categoryIcons[cat]
            return (
              <button
                key={cat}
                onClick={() => setSearchParams({ cat })}
                className="group flex flex-col gap-2 rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-800 hc:bg-black p-5 text-left transition-all hover:border-blue-400 dark:hover:border-blue-500 hc:hover:border-yellow-400 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <CatIcon className="h-6 w-6 text-gray-500 dark:text-gray-400 hc:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
                  <div>
                    <h2 className="font-semibold text-gray-900 dark:text-white hc:text-white">
                      {categoryNames[cat]}
                    </h2>
                    <span className="text-sm text-gray-400 dark:text-gray-500 hc:text-gray-300">
                      {catTools.length} {catTools.length === 1 ? 'verktyg' : 'verktyg'}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 hc:text-gray-300 line-clamp-1">
                  {previewNames.join(', ')}
                  {catTools.length > 4 ? ' ...' : ''}
                </p>
              </button>
            )
          })}
        </div>
      ) : showCategories && selectedCategory !== null ? (
        /* ── Single category drill-down ── */
        <div>
          <button
            onClick={() => setSearchParams({})}
            className="mb-4 flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hc:text-yellow-400 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            {allCategoriesLabel}
          </button>
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-200 hc:text-white">
            {(() => { const CatIcon = categoryIcons[selectedCategory]; return <CatIcon className="h-5 w-5 text-gray-500 dark:text-gray-400 hc:text-white" /> })()}
            {categoryNames[selectedCategory]}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools
              .filter((tool) => tool.category === selectedCategory)
              .map((tool) => (
                <ToolCard key={tool.route} tool={tool} />
              ))}
          </div>
        </div>
      ) : (
        /* ── Flat grid (search results or tab filter) ── */
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tool) => (
            <ToolCard key={tool.route} tool={tool} />
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-gray-500 hc:text-gray-300">{t.emptyState}</p>
      )}
    </div>
  )
}
