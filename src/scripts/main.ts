import { BurgerMenuHandler } from "./burgerMenu.js";
import {
  BrowserLanguageDetector,
  LocaleHandler,
  TextLoader,
} from "./locale/index.js";
import { revealOnScroll } from "./revealOnScroll.js";

const browserLanguageDetector = new BrowserLanguageDetector();
const textLoader = new TextLoader();
const localeHandler = new LocaleHandler(browserLanguageDetector, textLoader);

const burgerMenuHandler = new BurgerMenuHandler();

const initializeLucideIcons = (): void => {
  if (typeof window.lucide !== "undefined") {
    window.lucide.createIcons();
  }
};

window.addEventListener("DOMContentLoaded", (): void => {
  localeHandler.execute();
  burgerMenuHandler.execute();
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
window.addEventListener("languageChanged", (): void => {
  setTimeout(initializeLucideIcons, 100);
});
