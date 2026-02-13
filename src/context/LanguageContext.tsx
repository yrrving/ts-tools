import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { translations, type Translation } from '../data/translations'

export type Language = 'sv' | 'en' | 'es' | 'fr' | 'de' | 'pt' | 'tr' | 'zh' | 'hi' | 'ja' | 'fa' | 'ar'

const RTL_LANGUAGES: Language[] = ['fa', 'ar']

interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translation
  dir: 'ltr' | 'rtl'
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const VALID_LANGUAGES: Language[] = ['sv', 'en', 'es', 'fr', 'de', 'pt', 'tr', 'zh', 'hi', 'ja', 'fa', 'ar']

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('bytebox-language')
    return VALID_LANGUAGES.includes(saved as Language) ? (saved as Language) : 'sv'
  })

  const dir = RTL_LANGUAGES.includes(language) ? 'rtl' : 'ltr'

  useEffect(() => {
    localStorage.setItem('bytebox-language', language)
    const html = document.documentElement
    html.setAttribute('lang', language)
    html.setAttribute('dir', dir)
  }, [language, dir])

  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
