import { SupportedLanguage } from ".";

export class BrowserLanguageDetector {
  supportedLanguages = Object.values(SupportedLanguage);

  public execute(): SupportedLanguage {
    const browserLang: string = navigator.language || navigator.languages[0];

    if (browserLang.startsWith("pt")) {
      return SupportedLanguage.PORTUGUESE;
    }

    const normalizedLanguage = browserLang
      .toLowerCase()
      .replace("-", "-") as SupportedLanguage;

    if (this.supportedLanguages.includes(normalizedLanguage)) {
      return normalizedLanguage;
    }

    return SupportedLanguage.ENGLISH;
  }
}
