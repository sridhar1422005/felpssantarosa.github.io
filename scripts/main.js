import { loadLanguage, currentLang } from "./locale.js";
import { revealOnScroll } from "./revealOnScroll.js";

window.addEventListener("DOMContentLoaded", () => {
  loadLanguage(currentLang);
});
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
