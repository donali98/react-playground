// src/i18n.js
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import enTranslation from './locales/en/translation.json';
import esTranslation from './locales/es/translation.json';

// Configuración de i18next
i18n.use(initReactI18next).init({
  resources: {
    en: {translation: enTranslation},
    es: {translation: esTranslation},
  },
  lng: 'es', // Idioma por defecto
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React ya hace el escape de los valores
  },
});

export default i18n;
