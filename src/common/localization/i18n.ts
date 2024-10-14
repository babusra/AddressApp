
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import enTranslation from './locales/en_US.json';
import trTranslation from './locales/tr_TR.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  tr: {
    translation: trTranslation,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3', 
  resources,
  lng: 'tr', 
  fallbackLng: 'tr', 
  interpolation: {
    escapeValue: false, 
  },
});

export default i18n;
