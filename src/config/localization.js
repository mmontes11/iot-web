import { getLanguage } from "helpers/localStorage";

export const supportedLanguages = ["en", "es"];

export const getSelectedLanguage = () => {
  const userLanguage =
    getLanguage() || (navigator.languages && navigator.languages[0]) || navigator.language || navigator.userLanguage;
  const userLanguageWithoutRegionCode = userLanguage.toLowerCase().split(/[_-]+/)[0];
  const preferredLanguage = supportedLanguages.find(language => language === userLanguageWithoutRegionCode);
  return preferredLanguage || supportedLanguages[0];
};

export const getLanguages = selectedLanguage => {
  const otherLanguages = supportedLanguages.filter(language => language !== selectedLanguage);
  return [selectedLanguage, ...otherLanguages];
};

export const getTranslations = language => {
  const translations = require(`./translations/${language}-translations.json`);
  return translations;
};
