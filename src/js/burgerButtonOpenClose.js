export function initBurgerMenu() {
  // Правильные селекторы:
  const menuToggle = document.getElementById("menu-toggle");
  const overlay = document.querySelector(".overlay");
  const burgerMenu = document.querySelector(".burger-menu");

  // Более строгая проверка элементов
  if (!(menuToggle instanceof HTMLInputElement) || !overlay || !burgerMenu) {
    return;
  }

  const closeMenu = () => {
    if (menuToggle.type === "checkbox") {
      menuToggle.checked = false;
    }
    document.body.style.overflow = "";
  };

  menuToggle.addEventListener("change", function () {
    if (this.type === "checkbox") {
      document.body.style.overflow = this.checked ? "hidden" : "";
    }
  });

  overlay.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menuToggle.checked) {
      closeMenu();
    }
  });

  const menuLinks = document.querySelectorAll(".burger-menu__link");
  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  if (window.innerWidth >= 1366) {
    return;
  }

  burgerMenu.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}
