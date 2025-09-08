import burgerClose from '../assets/image/burger__close.svg';
import Group from '../assets/image/Group.svg';
import search from '../assets/image/search.svg';
import highilight from '../assets/image/highilight.svg';
import call from '../assets/image/call.svg';
import chat from '../assets/image/chat.svg';
import profile from '../assets/image/profile.svg';
import { initBurgerMenu } from './burgerButtonOpenClose.js';
import { openModal } from './modalOpen.js';

export function createBurgerWrapper() {
  const burger = document.createElement("div");
  burger.className = 'menu-wrapper';
  burger.innerHTML = 
  `<input type="checkbox" id="menu-toggle" class="menu-toggle" />
      <div class="overlay"></div>
      <div class="burger-menu">
        <div class="burger-menu__content">
          <div class="burger-menu__top">
            <div class="burger-menu__left">
              <label for="menu-toggle" class="burger-menu__close">
                <img src="${burgerClose}" class="button_close" alt="close" />
              </label>
              <a href="#" class="burger-logo" data-page="main">
                <img src="${Group}" alt="logo" />
              </a>
            </div>
            <img src="${search}" alt="search" />
          </div>
          <nav class="burger-menu__nav">
            <ul class="burger-menu__list">
              <li class="burger-menu__item--active">
                <img
                  src="${highilight}"
                  alt="highilight"
                  class="burger-menu__icon"
                />
                <a href="#" class="burger-menu__link" id="active_item" data-page="brands">
                  Ремонт техники
                </a>
              </li>
              <li class="burger-menu__item">
                <img
                  src="${highilight}"
                  alt="highilight"
                  class="burger-menu__icon"
                />
                <a href="#" class="burger-menu__link" data-page="devices">
                  Услуги и сервисы
                </a>
              </li>
              <li class="burger-menu__item">
                <img
                   src="${highilight}"
                  alt="highilight"
                  class="burger-menu__icon"
                />
                <a href="#" class="burger-menu__link" data-page="discount"
                  >Корпоративным клиентам</a
                >
              </li>
              <li class="burger-menu__item">
                <img
                  src="${highilight}"
                  alt="highilight"
                  class="burger-menu__icon"
                />
                <a href="#" class="burger-menu__link">Продавцам техники</a>
              </li>
              <li class="burger-menu__item">
                <img
                  src="${highilight}"
                  alt="highilight"
                  class="burger-menu__icon"
                />
                <a href="#" class="burger-menu__link">Партнерам</a>
              </li>
              <li class="burger-menu__item">
                <img
                   src="${highilight}"
                  alt="highilight"
                  class="burger-menu__icon"
                />
                <a href="#" class="burger-menu__link">Производителям</a>
              </li>
              <li class="burger-menu__item">
                <img
                  src="${highilight}"
                  alt="highilight"
                  class="burger-menu__icon"
                />
                <a href="#" class="burger-menu__link">Наши сервисные сервисы</a>
              </li>
              <li class="burger-menu__item">
                <img
                  src="${highilight}"
                  alt="highilight"
                  class="burger-menu__icon"
                />
                <a href="#" class="burger-menu__link">Контанты</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="burger-menu__bottom">
          <div class="burger-menu__contacts">
            <div class="burger-menu__icons">
            <button class="btn-call__burger" data-attribute="call">
              <img src="${call}" class="call_img" alt="call" />
            </button>
             <button class="btn-chat__burger" data-attribute="chat">
              <img src="${chat}" class="chat_img" alt="chat" />
             </button>
              <img src="${profile}" alt="profile" />
            </div>
            <a class="burger-menu__mail" href="mailto:mail@cps.com"
              >mail@cps.com</a
            >
            <a class="burger-menu__phone" href="tel:88008908900">88008908900</a>
          </div>
          <div class="burger__menu-languages">
            <button class="burger-menu__button burger-menu__button--active">
              RU
            </button>
            <button class="burger-menu__button">EN</button>
            <button class="burger-menu__button">CH</button>
          </div>
        </div>
      </div>`;
      initBurgerMenu();
       setTimeout(() => {
          const btnCallBurger = burger.querySelector(".btn-call__burger");
          const btnChatBurger = burger.querySelector(".btn-chat__burger");

          btnCallBurger?.addEventListener("click", () => openModal("call"));
          btnChatBurger?.addEventListener("click", () => openModal("chat"));
        }, 0);
      return burger;
}
