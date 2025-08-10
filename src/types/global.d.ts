export type SupportedLanguage = "pt-br" | "en-us";

export interface Project {
  title: string;
  description: string;
  challenges_title: string;
  challenges: string[];
  tools: string[];
}

export interface LocaleTexts {
  [key: string]: string | Project[];
  projects: Project[];
  flag_icon: string;
  btn_lang: string;
}

export interface ToolIcons {
  [key: string]: string;
}

declare global {
  interface Window {
    lucide?: {
      createIcons: () => void;
    };
  }
}
