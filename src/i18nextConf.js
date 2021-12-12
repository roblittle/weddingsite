import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from "i18next-http-backend"
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

const fallbackLng = ['en-US'];
const availableLanguages = ['en-US', 'es'];

const resources = {
    en: {
      translation: translationEN
    },
    es: {
      translation: translationES
    }
  };

i18n
  .use(XHR)
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    react: {
        useSuspense: false,
    },
    resources,
    nonExplicitSupportedLngs: true,
    fallbackLng, // fallback language is english.

    detection: {
      checkWhitelist: true, // options for language detection
    },

    debug: true,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false, // no need for react. it escapes by default
    },
  });

export default i18n;