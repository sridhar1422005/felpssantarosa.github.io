export class BurgerMenuHandler {
  private burgerMenu = document.getElementById("burger-menu");
  private navMenu = document.getElementById("nav-menu");
  private navLinks = document.querySelectorAll(".nav-links a");

  constructor() {}

  public execute(): void {
    this.burgerMenu?.addEventListener("click", this.toggleMenu.bind(this));
    this.navLinks.forEach((link) => {
      link.addEventListener("click", this.closeMenu.bind(this));
    });
    document.addEventListener("click", this.handleClickOutside.bind(this));
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  private toggleMenu(): void {
    this.burgerMenu?.classList.toggle("active");
    this.navMenu?.classList.toggle("active");

    if (!this.navMenu) return;

    const isActive = this.navMenu?.classList.contains("active");
    this.burgerMenu?.setAttribute("aria-expanded", isActive.toString());
  }

  private closeMenu(): void {
    this.burgerMenu?.classList.remove("active");
    this.navMenu?.classList.remove("active");
    this.burgerMenu?.setAttribute("aria-expanded", "false");
  }

  private handleClickOutside(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (
      this.burgerMenu &&
      !this.burgerMenu.contains(target) &&
      this.navMenu &&
      !this.navMenu.contains(target)
    ) {
      this.closeMenu();
    }
  }

  private handleKeyDown(event: KeyboardEvent): void {
    if (event.key === "Escape") {
      this.closeMenu();
    }
  }
}
