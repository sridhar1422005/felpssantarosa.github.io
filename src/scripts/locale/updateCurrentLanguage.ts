import type { SupportedLanguage } from ".";

export const updateCurrentLanguage = (language: SupportedLanguage): void => {
  localStorage.setItem("lang", language);
  window.dispatchEvent(new CustomEvent("languageChanged"));
};
