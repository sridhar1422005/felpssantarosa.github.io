import { BrowserLanguageDetector } from "./detectBrowserLanguage";
import { TextLoader } from "./textLoader";
import { updateCurrentLanguage } from "./updateCurrentLanguage";

export enum SupportedLanguage {
  "PORTUGUESE" = "pt-br",
  "ENGLISH" = "en-us",
}

class LocaleHandler {
  private currentLanguage!: SupportedLanguage;
  private languageButtonElement: HTMLButtonElement | null =
    document.getElementById("btn-lang") as HTMLButtonElement | null;

  constructor(
    private languageDetector: BrowserLanguageDetector,
    private languageLoader: TextLoader,
  ) {
    this.languageButtonElement?.addEventListener("click", () => {
      this.currentLanguage =
        this.currentLanguage === SupportedLanguage.PORTUGUESE
          ? SupportedLanguage.ENGLISH
          : SupportedLanguage.PORTUGUESE;

      this.loadLanguage();
    });
  }

  static getSupportedLanguages(): SupportedLanguage[] {
    return Object.values(SupportedLanguage);
  }

  public getCurrentLanguage(): SupportedLanguage {
    return this.currentLanguage;
  }

  public getLanguageButtonElement(): HTMLButtonElement | undefined {
    return this.languageButtonElement || undefined;
  }

  public loadLanguage(): void {
    const languageButtonElement = this.getLanguageButtonElement();

    this.languageLoader.execute(this.currentLanguage, languageButtonElement);
  }

  public execute(): void {
    this.currentLanguage = this.languageDetector.execute();
    const languageButtonElement = this.getLanguageButtonElement();

    this.languageLoader.execute(this.currentLanguage, languageButtonElement);

    updateCurrentLanguage(this.currentLanguage);
  }
}

export { BrowserLanguageDetector, TextLoader, LocaleHandler };
