import { LocaleTexts, Project, ToolIcons } from "@/types/global";
import { SupportedLanguage } from ".";

export class TextLoader {
  private toolIcons: ToolIcons = {
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
  private fallbackToolIcon: string =
    "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/code.svg";

  public async execute(
    language: SupportedLanguage,
    languageButtonElement?: HTMLButtonElement
  ): Promise<void> {
    try {
      const response = await fetch(`./locales/${language}.json`);
      const texts: LocaleTexts = await response.json();

      document.querySelectorAll("[data-i18n]").forEach((element: Element) => {
        const key: string | null = element.getAttribute("data-i18n");

        if (!key) return;

        const text: string = texts[key] as string;

        if (!text) return;

        if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
          (element as HTMLInputElement | HTMLTextAreaElement).placeholder =
            text;

          return;
        }

        if (key.includes("_title") && text.includes("<i")) {
          element.innerHTML = `<span class="icon-label">${text}</span>`;
        } else {
          element.textContent = text;
        }
      });

      if (typeof window.lucide !== "undefined") {
        window.lucide.createIcons();
      }

      this.handleProjects(texts.projects);

      if (languageButtonElement) {
        languageButtonElement.innerHTML = `<span class="flag-icon">${texts.flag_icon}</span> ${texts.btn_lang}`;
      }
    } catch (error) {
      console.error("Caught an error while loading language:", error);
    }
  }

  public async handleProjects(projects: Project[]) {
    projects.forEach((project: Project, index: number) => {
      const projectElement: HTMLElement | null = document.getElementById(
        `project${index + 1}`
      );

      if (!projectElement) return;

      const { challenges, challenges_title, description, title, tools } =
        project;

      const projectTitleElement: HTMLElement | null =
        projectElement.querySelector("h3");
      const descriptionElement: HTMLElement | null =
        projectElement.querySelector("p");
      const challengesTitleElement: HTMLElement | null =
        projectElement.querySelector("h4");
      const challengesListElement: HTMLElement | null =
        projectElement.querySelector(".challenges");
      const toolsListElement: HTMLElement | null =
        projectElement.querySelector(".tools");

      if (projectTitleElement) projectTitleElement.textContent = title;
      if (descriptionElement) descriptionElement.textContent = description;
      if (challengesTitleElement)
        challengesTitleElement.textContent = challenges_title;

      if (challengesListElement) {
        challengesListElement.innerHTML = "";

        challenges.forEach((challenge: string) => {
          const li: HTMLLIElement = document.createElement("li");

          li.textContent = challenge;

          challengesListElement.appendChild(li);
        });
      }

      if (toolsListElement) {
        toolsListElement.innerHTML = "";

        tools.forEach((tool: string) => {
          const li: HTMLLIElement = document.createElement("li");

          li.innerHTML = this.renderToolWithIcon(tool);

          toolsListElement.appendChild(li);
        });
      }
    });
  }

  public getToolIcon(toolName: string): string {
    return this.toolIcons[toolName] || this.fallbackToolIcon;
  }

  public renderToolWithIcon = (toolName: string): string => {
    const iconUrl = this.getToolIcon(toolName);
    const classSlug = toolName.toLowerCase().replace(/[^a-z0-9]/g, "-");

    return `<span class="tool-item tool-${classSlug}">
    <img src="${iconUrl}" alt="${toolName}" class="tool-icon" />
    ${toolName}
    </span>`;
  };
}
