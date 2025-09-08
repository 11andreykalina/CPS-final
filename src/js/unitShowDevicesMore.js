export function InitDevicesShowMore() {
  const button = document.querySelector(".show-more-btn-divices");
  const buttonImg = document.querySelector(".show-more-img-divices");
  const allSlides = document.querySelectorAll(".slide--devices");
  const buttonContainer = button.parentElement;

  let expanded = false;

  function getHiddenCount() {
    const width = window.innerWidth;
    if (width >= 1440) return 2;
    if (width >= 768 && width < 1440) return 3;
    return 0;
  }

  function updateSlidesVisibility() {
    const hiddenCount = getHiddenCount();
    const shouldRestrict = hiddenCount > 0;

    allSlides.forEach((slide) => {
      slide.style.display = "flex";
    });

    if (shouldRestrict && !expanded) {
      for (let i = allSlides.length - hiddenCount; i < allSlides.length; i++) {
        allSlides[i].style.display = "none";
      }
    }

    if (shouldRestrict) {
      button.textContent = expanded ? "Скрыть" : "Показать все";
      buttonImg.style.transform = expanded ? "rotate(180deg)" : "rotate(0deg)";
      buttonContainer.style.display = "flex";
      buttonContainer.style.marginTop = expanded ? "24px" : "";
    } else {
      buttonContainer.style.display = "none";
      buttonContainer.style.marginTop = "";
    }
  }

  updateSlidesVisibility();

  button.addEventListener("click", () => {
    expanded = !expanded;
    updateSlidesVisibility();
  });

  window.addEventListener("resize", () => {
    updateSlidesVisibility();
  });
}
