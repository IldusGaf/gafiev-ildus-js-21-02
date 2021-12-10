import i18next from 'i18next';
import moment from 'moment';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { APP_RU } from './ru/app';
import { APP_EN } from './en/app';

i18next
  .use(initReactI18next) // Добавление плагина react-i18next
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: 'en', // Язык, применяемый, если значение применён отсутсвующий язык
    resources: {
      // Установка локализации
      en: {
        // Язык
        translation: APP_EN, // Локализация
      },
      ru: {
        translation: APP_RU,
      },
    },
  });

// i18next.changeLanguage('en'); // Установка языка
