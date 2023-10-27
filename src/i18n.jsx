import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import es from './translations/navbar/es.json'
import en from './translations/navbar/en.json'
import home_es from './translations/home/home_es.json'
import home_en from './translations/home/home_en.json'
import skills_en from './translations/skills/skills_en.json'
import skills_es from './translations/skills/skills_es.json'
import aboutme_en from './translations/aboutMe/aboutme_en.json'
import aboutme_es from './translations/aboutMe/aboutme_es.json'
import project_en from './translations/projects/project_en.json'
import project_es from './translations/projects/project_es.json'

console.log(i18n.language);
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      es: {
        navbar: es,
        home: home_es,
        skills: skills_es, 
        about: aboutme_es,
        project: project_es
      },
      en: {
        navbar: en,
        home:home_en,
        skills: skills_en,
        about: aboutme_en,
        project: project_en
      },
    },
  });

export default i18n;