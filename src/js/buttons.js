export function initShowMore() {
  const button = document.querySelector(".show-more-btn");
  const arrow = document.querySelector(".show-more-img");
  const slides = document.querySelectorAll(".slides--brands .swiper-slide");

  let isExpanded = false;

  function getMode() {
    const width = window.innerWidth;
    if (width < 768) return "mobile";
    if (width < 1440) return "tablet";
    return "desktop";
  }

  function updateSlidesVisibility() {
    const mode = getMode();

    slides.forEach((slide) => (slide.style.display = "none"));

    if (mode === "mobile") {
      slides.forEach((slide, idx) => {
        if (idx < 8) slide.style.display = "flex";
      });
      if (button) button.style.display = "none";
      if (arrow) arrow.classList.remove("rotate");
      isExpanded = false;
    } else if (mode === "tablet") {
      slides.forEach((slide, idx) => {
        if (idx < 6) slide.style.display = "flex";
        if (isExpanded && idx >= 6 && idx < 8) slide.style.display = "flex";
      });
      if (button) {
        button.style.display = "inline-flex";
        button.textContent = isExpanded ? "Скрыть" : "Показать все";
      }
      if (arrow) arrow.classList.toggle("rotate", isExpanded);
    } else {
      slides.forEach((slide, idx) => {
        if (idx < 8) slide.style.display = "flex";
        if (isExpanded && idx >= 8 && idx < 12) slide.style.display = "flex";
      });
      if (button) {
        button.style.display = "inline-flex";
        button.textContent = isExpanded ? "Скрыть" : "Показать все";
      }
      if (arrow) arrow.classList.toggle("rotate", isExpanded);
    }
  }

  if (button) {
    button.addEventListener("click", () => {
      isExpanded = !isExpanded;
      updateSlidesVisibility();
    });
  }

  window.addEventListener("resize", updateSlidesVisibility);
  updateSlidesVisibility();
}
