import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import en from './en.json'
import vi from './vi.json'

i18n.use(Backend)
  .use(LanguageDetector)
  .use (initReactI18next).init({
      fallbackLng: "en",
      debug: true,
      resources: {
        en: { translation: en},
        vi: { translation: vi}
      },
      detection: {
          order: ['queryString', 'cookie'],
          caches: ['cookie']
      },
      interpolation: {
        escapeValue: false
      }
    })
