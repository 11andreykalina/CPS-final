import "../assets/scss/style.scss";
import "../assets/scss/_burger.scss";
import "../assets/scss/_swiper.scss";
import "../assets/scss/swiperPrice.scss";
import "../assets/scss/_fonts.scss";
import "../assets/scss/_reset.scss";
import "../assets/scss/footer.scss";
import"../assets/scss/modal-window.scss";
import { createHeader } from "./header.js";
import { createBurgerWrapper } from "./burgerWrapper.js";
import { createPages } from "./pagesInfo.js";
import { InitSwiper2 } from "./swiper.js";
import { initShowMore } from "./buttons.js";
import { initBurgerMenu } from "./burgerButtonOpenClose.js";
import { createFooter } from "./footer.js";
import { InitNextMore } from "./buttonMoreTextMain.js";
import { InitDevicesShowMore } from "./unitShowDevicesMore.js";
import { createModalWindow } from "./modal.js";
import { openModal } from "./modalOpen.js";


const header = createHeader();
const burger = createBurgerWrapper();
const pages = createPages();
const root = document.getElementById("root");
const slides = document.querySelector(".slider");
const slidesContainer = document.querySelector(".slider-wrapper");
const footer = createFooter();
const modal = createModalWindow();

root.appendChild(header);
root.appendChild(burger);
root.appendChild(pages);
root.appendChild(footer);
root.appendChild(modal);

const btnCall = document.querySelector(".contact-us__call");
if (btnCall) {
  btnCall.addEventListener("click", () => openModal("call"));
}

const btnChat = document.querySelector(".contact-us__chat");
if (btnChat) {
  btnChat.addEventListener("click", () => openModal("chat"));
}

initShowMore(".slider--brands");
initBurgerMenu();
InitNextMore();
InitDevicesShowMore();

