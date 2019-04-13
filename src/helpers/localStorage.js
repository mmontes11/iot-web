const languageKey = "language";

export const setLanguage = language => window.localStorage.setItem(languageKey, language);
export const getLanguage = () => window.localStorage.getItem(languageKey);
