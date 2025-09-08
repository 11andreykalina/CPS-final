export function InitNextMore() {
  const toggleButton = document.querySelector(".main__information-more");
  const hiddenText = document.querySelector(".information__text-second");
  const toggleText = document.querySelector(".information-more__txt");
  const toggleImg = document.querySelector(".information-more__img");

  let expanded = false;

  function updateTextState() {
    const width = window.innerWidth;

    if (width < 768) {
      hiddenText.style.display = expanded ? "block" : "none";
      hiddenText.style.overflow = "";
      hiddenText.style.webkitLineClamp = "";
      hiddenText.style.webkitBoxOrient = "";
    } else {
      hiddenText.style.display = "-webkit-box";
      hiddenText.style.overflow = expanded ? "visible" : "hidden";
      hiddenText.style.webkitBoxOrient = "vertical";

      if (width >= 1440) {
        hiddenText.style.webkitLineClamp = expanded ? "unset" : "1";
      } else {
        hiddenText.style.webkitLineClamp = expanded ? "unset" : "2";
      }
    }

    toggleText.textContent = expanded ? "Скрыть" : "Читать далее";
    toggleImg.style.transform = expanded ? "rotate(180deg)" : "rotate(0deg)";
  }

  toggleButton.addEventListener("click", () => {
    expanded = !expanded;
    updateTextState();
  });

  window.addEventListener("resize", () => {
    expanded = false;
    updateTextState();
  });

  updateTextState();
}
