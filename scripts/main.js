import { loadLanguage, currentLang } from "./locale.js";
import { revealOnScroll } from "./revealOnScroll.js";

// Function to initialize Lucide icons
function initializeLucideIcons() {
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

// Function to get icon for each tool
function getToolIcon(toolName) {
  const toolIcons = {
    NodeJS: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg",
    TypeScript:
      "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/typescript.svg",
    "REST API":
      "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/fastapi.svg",
    gRPC: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/google.svg",
    Docker: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg",
    Redis: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/redis.svg",
    "Clean Architecture":
      "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/blueprint.svg",
    SOLID: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/solid.svg",
    "Domain-Driven Design":
      "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/blueprint.svg",
    React: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",
    NextJS: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nextdotjs.svg",
    "Styled Components":
      "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/styledcomponents.svg",
    "CSS-in-JS": "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/css3.svg",
    "Tailwind CSS":
      "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tailwindcss.svg",
  };

  return (
    toolIcons[toolName] ||
    "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/code.svg"
  );
}

// Function to render tool with icon
function renderToolWithIcon(toolName) {
  const iconUrl = getToolIcon(toolName);
  const classSlug = toolName.toLowerCase().replace(/[^a-z0-9]/g, "-");
  return `<span class="tool-item tool-${classSlug}">
    <img src="${iconUrl}" alt="${toolName}" class="tool-icon" />
    ${toolName}
  </span>`;
}

window.addEventListener("DOMContentLoaded", () => {
  loadLanguage(currentLang);
  // Initialize Lucide icons
  initializeLucideIcons();
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Re-initialize icons after language changes
window.addEventListener("languageChanged", () => {
  setTimeout(initializeLucideIcons, 100);
});

// Export the tool rendering function for use in locale.js
window.renderToolWithIcon = renderToolWithIcon;
