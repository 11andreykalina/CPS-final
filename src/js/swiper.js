import Swiper from "swiper/bundle";
const sliderInstances = new Map();

export function InitSwiper2(
  selector,
  slidesOffsetAfter = 16,
  slidesOffsetBefore = 16
) {
  let currentInstance = sliderInstances.get(selector) || null;
  const sliderElement = document.querySelector(selector);
  if (!sliderElement) return;

  function createSwiper() {
    const pagination = sliderElement.querySelector(".swiper-pagination");
    const swiper = new Swiper(sliderElement, {
      slidesPerView: "auto",
      spaceBetween: 16,

      slidesOffsetAfter: slidesOffsetAfter,
      slidesOffsetBefore: slidesOffsetBefore,

      pagination: {
        el: pagination,
        clickable: true,
        bulletClass: "custom-bullet",
        bulletActiveClass: "custom-bullet--active",
      },
    });
    sliderInstances.set(selector, swiper);
    currentInstance = swiper;
  }

  function destroySwiper() {
    if (currentInstance) {
      currentInstance.destroy(true, true);
      sliderInstances.delete(selector);
      currentInstance = null;
    }

    const slides = sliderElement.querySelectorAll(".swiper-slide");
    slides.forEach((slide) => {
      slide.style.width = "";
    });
  }

  function updateSwiper() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      if (!currentInstance) createSwiper();
    } else {
      destroySwiper();
    }
  }

  window.addEventListener("resize", updateSwiper);
  updateSwiper();
}
