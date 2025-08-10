export const revealOnScroll = (): void => {
  const reveals: NodeListOf<Element> = document.querySelectorAll(".reveal");

  reveals.forEach((element: Element) => {
    const windowHeight: number = window.innerHeight;
    const elementTop: number = element.getBoundingClientRect().top;
    const elementVisible: number = 100;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    }
  });
};
