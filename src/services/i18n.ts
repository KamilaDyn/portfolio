import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import {
  aboutMePage_en,
  common_en,
  homePage_en,
  projectsPage_en,
} from './translations/en'
import { common_pl, homePage_pl } from './translations/pl'

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      // here we will place our translations...
      common: common_en,
      homePage: homePage_en,
      aboutMePage: aboutMePage_en,
      projectsPage: projectsPage_en,
    },
    pl: {
      // here we will place our translations...
      common: common_pl,
      homePage: homePage_pl,
    },
  },
})
export default i18n
