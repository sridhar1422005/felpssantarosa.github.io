const btnLang = document.getElementById("btn-lang");
export let currentLang = localStorage.getItem("lang") || "pt-br";

export async function loadLanguage(lang) {
  try {
    const response = await fetch(`/locales/${lang}.json`);
    const texts = await response.json();

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const text = texts[key];

      if (!text) return;

      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = text;

        return;
      }

      element.textContent = text;
    });

    texts?.projects?.forEach((project, index) => {
      const projectEl = document.getElementById(`project${index + 1}`);
      if (!projectEl) return;

      const projectTitle = projectEl.querySelector("h3");
      const description = projectEl.querySelector("p");
      const challengesTitle = projectEl.querySelector("h4");
      const challengesList = projectEl.querySelector(".challenges");
      const toolsList = projectEl.querySelector(".tools");

      if (projectTitle) projectTitle.textContent = project.title;
      if (description) description.textContent = project.description;
      if (challengesTitle)
        challengesTitle.textContent = project.challenges_title;

      if (challengesList) {
        challengesList.innerHTML = "";
        project.challenges.forEach((challenge) => {
          const li = document.createElement("li");
          li.textContent = challenge;
          challengesList.appendChild(li);
        });
      }

      if (toolsList) {
        toolsList.innerHTML = "";
        project.tools.forEach((tool) => {
          const li = document.createElement("li");
          li.textContent = tool;
          toolsList.appendChild(li);
        });
      }
    });

    if (btnLang) btnLang.textContent = texts.btn_lang;

    localStorage.setItem("lang", lang);
    currentLang = lang;
  } catch (error) {
    console.error("Erro ao carregar idioma:", error);
  }
}

btnLang?.addEventListener("click", () => {
  const newLang = currentLang === "pt-br" ? "en-us" : "pt-br";
  loadLanguage(newLang);
});
