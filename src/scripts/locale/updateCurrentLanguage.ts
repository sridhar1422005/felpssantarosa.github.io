import { SupportedLanguage } from ".";

export class LocaleLanguageUpdater {
  static execute = (language: SupportedLanguage): void => {
    localStorage.setItem("lang", language);
    window.dispatchEvent(new CustomEvent("languageChanged"));
  };
}
