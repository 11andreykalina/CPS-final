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
import { enable as enableDarkMode, disable as disableDarkMode, auto as followSystemColorScheme } from 'darkreader';


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

// Инициализация Dark Reader
function initDarkTheme() {
  const savedTheme = localStorage.getItem('theme');  // Проверяем сохранённую тему (localStorage — браузерное хранилище)
  
  if (savedTheme === 'dark') {
    enableDarkMode({
      brightness: 100,  // Яркость (100% — нормальная)
      contrast: 90,     // Контраст (90% для мягкости)
      sepia: 10         // Сепия (10% для тёплого тона; настройте под ваш дизайн)
    });
  } else if (savedTheme === 'light') {
    disableDarkMode();
  } else {
    // Авто по системным настройкам (prefers-color-scheme)
    followSystemColorScheme();
  }
}

initDarkTheme();  // Вызываем при загрузке страницы

const toggleBtn = document.querySelector('#theme-toggle');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    const isDark = localStorage.getItem('theme') === 'dark';
    if (isDark) {
      disableDarkMode();
      localStorage.setItem('theme', 'light');
    } else {
      enableDarkMode({ brightness: 100, contrast: 90, sepia: 10 });
      localStorage.setItem('theme', 'dark');
    }
    // Опционально: Измените иконку кнопки (солнце/луна) через JS
    toggleBtn.querySelector('img').src = isDark ? sunIcon : moonIcon;  // Добавьте sunIcon импорт
  });
}

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

