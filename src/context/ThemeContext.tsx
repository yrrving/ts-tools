import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

export type Theme = 'light' | 'dark' | 'high-contrast'

interface ThemeContextValue {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const VALID_THEMES: Theme[] = ['light', 'dark', 'high-contrast']

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('bytebox-theme')
    return VALID_THEMES.includes(saved as Theme) ? (saved as Theme) : 'dark'
  })

  useEffect(() => {
    localStorage.setItem('bytebox-theme', theme)
    const html = document.documentElement
    html.classList.remove('dark', 'hc')
    if (theme === 'dark') {
      html.classList.add('dark')
    } else if (theme === 'high-contrast') {
      html.classList.add('dark', 'hc')
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
