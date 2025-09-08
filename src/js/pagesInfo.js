import highilight from "../assets/image/highilight.svg";
import arrow from "../assets/image/goside.svg";
import repair from "../assets/image/repair.svg";
import checkstatus from "../assets/image/checkstatus.svg";
import expand from "../assets/image/expand.svg";
import Lenovo from "../assets/image/Lenovo.svg";
import go from "../assets/image/go.svg";
import Samsung from "../assets/image/Samsung.svg";
import Apple from "../assets/image/Apple.svg";
import Viev from "../assets/image/Viev.svg";
import Bosh from "../assets/image/Bosh.svg";
import HP from "../assets/image/HP.svg";
import Acer from "../assets/image/Acer.svg";
import Sony from "../assets/image/Sony.svg";
import more from "../assets/image/more.svg";
import PictureCopy from "../assets/image/Picture Copy.svg";
import { InitSwiper2 } from "./swiper.js";

export function createPages() {
  const pages = document.createElement("main");
  pages.className = "main";

  pages.innerHTML = `
    <div class="main__services">
      <div class="main__title">
        <img class="main__title-divider" src="${highilight}" />
        <h1 class="main__title-name">Услуги и сервисы</h1>
      </div>
      <div class="main__services-buttons">
        <button class="button_item">
          <p class="button_item-text">Оставить заявку</p>
          <img src="${repair}" />
        </button>
        <button class="button_item">
          <p class="button_item-text">Статус ремонта</p>
          <img src="${checkstatus}" />
        </button>
      </div>
    </div>

    <div class="main__menu">
      <nav class="main__menu-items">
        <ul class="main__menu-list">
          <li class="main__menu-item main__menu-item--active">Ремонтируемые бренды</li>
          <li class="main__menu-item">Ремонтируемые устройства</li>
          <li class="main__menu-item">Цены на услуги</li>
          <li class="main__menu-item">Адреса сервисных центров</li>
          <li class="main__menu-item">Специальные цены</li>
          <li class="main__menu-item">Отзывы</li>
        </ul>
      </nav>
    </div>

    <div class="main__information">
      <div class="main__information-left">
        <div class="information__text">
          <p class="information__text-first">
            Мы являемся авторизованным сервисным центром по ремонту техники Dell.
            Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией производителя.
          </p>
          <p class="information__text-second">
            Мы успешно работаем с 1992 года и заслужили репутацию надежного партнера.
            К нам обращаются по рекомендациям и советуют нас родным и близким.
          </p>
        </div>

        <div class="main__information-more text-active">

          <img class="information-more__img" src="${expand}" />
          <p class="information-more__txt">Читать далее</p>
        </div>
      </div>
      <div class="main__information-right">
        <img class="photo-office" src="${PictureCopy}" alt="office" />
      </div>
    </div>

    <!-- Бренды -->
    <div class="slider-wrapper">
      <h2 class="slider_text brands_text">РЕМОНТ ТЕХНИКИ РАЗЛИЧНЫХ БРЕНДОВ</h2>
      <div class="slider slider--brands swiper">
        <div id="slides--brands" class="slides slides--brands swiper-wrapper">
          ${[
            Lenovo,
            Samsung,
            Apple,
            Viev,
            Bosh,
            HP,
            Acer,
            Sony,
            Bosh,
            HP,
            Acer,
            Sony,
          ]
            .map(
              (img) => `
            <div id="slide--brands" class="slide swiper-slide">
              <img src="${img}" alt="brand" />
              <img src="${go}" alt="go" />
            </div>`
            )
            .join("")}
        </div>
        <div class="swiper-pagination"></div>

         <div class="show-more">
        <img class="show-more-img" src="${expand}" alt="expand" />
        <button class="show-more-btn">Показать все</button>
      </div>

      </div>
    </div>

    <!-- Устройства -->
    <div class="slider-wrapper">
      <h2 class="slider_text devices_text">РЕМОНТ РАЗЛИЧНЫХ ВИДОВ ТЕХНИКИ</h2>
      <div class="slider slider--devices swiper">
        <div class="slides slides--devices swiper-wrapper">
          ${[
            "Ремонт ноутбуков",
            "Ремонт планшетов",
            "Ремонт ПК",
            "Ремонт мониторов",
            "Ремонт ноутбуков",
            "Ремонт планшетов",
          ]
            .map(
              (name) => `
            <div id="slide--devices" class="slide slide--devices swiper-slide">
              <p class="slide_text">${name}</p>
              <img src="${go}" alt="go" />
            </div>`
            )
            .join("")}
        </div>
        <div class="swiper-pagination"></div>

         <div class="show-more-divices">
        <img class="show-more-img-divices" src="${expand}" alt="expand" />
        <button class="show-more-btn-divices">Показать все</button>
      </div>

      </div>
    </div>

    <!-- Цены -->
    <div class="slider-wrapper">
      <h2 class="slider_text prices_text">ЦЕНЫ НА УСЛУГИ</h2>
      <div class="slides_price-head">

        <span class="slide_price_text-head item-1">Ремонтные услуги</span>
        <span class="slide_price_text-head item-2">Цена</span>
        <span class="slide_price_text-head item-3">Срок</span>
      </div>
      <div class="slider slider--prices swiper">
        <div class="slides swiper-wrapper" id="prices_swiper-wrapper">

          ${[
            { title: "Тестирование", price: "Бесплатно", time: "30-120 мин" },
            { title: "Замена дисплея", price: "1000 ₽", time: "30-120 мин" },
            { title: "Замена динамика", price: "1000 ₽", time: "30-120 мин" },
            { title: "Замена ПО", price: "1000 ₽", time: "30-120 мин" },
          ]
            .map(
              (item) => `
            <div id="price--devices" class="slide price--devices swiper-slide">
              <div class="slide_price__group item-1">
                <span class="slide_price_text">Ремонтные Услуги</span>
                <span class="price_text ">${item.title}</span>
              </div>
              <div class="slide_price__group  item-2">
                <span class="slide_price_text">Цена</span>
                <span class="price_text">${item.price}</span>
              </div>
              <div class="slide_price__group  item-3">
                <span class="slide_price_text">Срок</span>
                <span class="price_text ">${item.time}</span>
              </div>
                <button class="slide__button item-4">
                  Заказать <img src="${arrow}" alt="arrow" />
                </button>
            </div>`
            )
            .join("")}
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>

    <div class="main_footer-information">
              <p class="main_information-text">
                Все цены указаны с учетом НДС. Стоимость ремонта указана на
                единичную услугу. Для получения коммерческого предложения на
                постоянное обслуживание, оставьте заявку.
              </p>
              <button class="information__button">
                Получить коммерческое  предложение
                <img src="${more}" class="footer_button" alt="" />
              </button>
            </div>
          </div>
        </div>

  `;

  const observer = new MutationObserver((mutations, obs) => {
    const ready = [
      ".slider--brands",
      ".slider--devices",
      ".slider--prices",
    ].every((sel) => document.querySelector(sel));

    if (ready) {
      InitSwiper2(".slider--brands");
      InitSwiper2(".slider--devices");

      InitSwiper2(".slider--prices", 8, 8);

      obs.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  return pages;
}
