import { Outlet } from 'react-router-dom'
import { Github } from 'lucide-react'
import Header from './Header'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900 hc:bg-black">
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        <Outlet />
      </main>
      <footer className="border-t border-gray-200 dark:border-gray-700 hc:border-white">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 hc:text-white">
          <span>Bytebox v{__APP_VERSION__} — by yrrving</span>
          <a
            href="https://github.com/yrrving/bytebox"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 hc:text-white transition-colors hover:text-gray-900 dark:hover:text-white no-underline"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </footer>
    </div>
  )
}
