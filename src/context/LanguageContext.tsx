import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { translations, type Translation } from '../data/translations'

export type Language = 'sv' | 'en' | 'es' | 'fr' | 'de' | 'pt'

interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translation
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const VALID_LANGUAGES: Language[] = ['sv', 'en', 'es', 'fr', 'de', 'pt']

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('bytebox-language')
    return VALID_LANGUAGES.includes(saved as Language) ? (saved as Language) : 'sv'
  })

  useEffect(() => {
    localStorage.setItem('bytebox-language', language)
    document.documentElement.setAttribute('lang', language)
  }, [language])

  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
