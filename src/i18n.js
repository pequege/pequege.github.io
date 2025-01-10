import i18n from "i18next";
import esJSON from './locale/es.json'
import enJSON from './locale/en.json';
import { useTranslation, initReactI18next } from "react-i18next"; i18n.use(initReactI18next).init({
  resources: {
    es: { ...esJSON },
    en: { ...enJSON },
  }, // Where we're gonna put translations' files
  lng: "es",
  lng: "en",     // Set the initial language of the App
});