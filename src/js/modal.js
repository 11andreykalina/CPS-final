import Group10 from "../assets/image/Group 10.svg";
import BurgerClose from "../assets/image/burger__close.svg";

export function createModalWindow() {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `<div class="modal-top">

  <div class="modal-window" id="modal-window_chat" data-modal="chat">
  <main class="modal-window__main">
  <div class="modal_header">
    <button class="modal__close" id="close">
      <img src="${BurgerClose}" alt="Закрыть"/>
    </button>
    <h1 class="text modal-window__title">Обратная связь</h1>
  </div>
    <div class="modal-window__container">
      <input class="modal-window__input" type="text" placeholder="Имя" />
      <input class="modal-window__input" type="tel" placeholder="Телефон" />
      <input
        class="modal-window__input"
        type="email"
        placeholder="Электронная почта"
      />
      <input
        class="modal-window__input modal-window__input_down"
        type="text"
        placeholder="Сообщение"
      />
      <p class="modal-window__text">
        Нажимая “отправить”, вы даете согласие на
        <span class="modal-window__text modal-window__text_pink"
          >обработку персональных данных</span
        >
        и соглашаетесь с нашей
        <span class="modal-window__text modal-window__text_pink"
          >политикой конфиденциальности</span
        >
      </p>
    </div>
  </main>
  <button class="button button_send">
    <img src="${Group10}" class="swiper-price__goside" />
  </button>
</div>
<div
  class="container container__blur container__blur_modal"
  id="overlay_modal-chat">
</div>
<div class="modal-window" id="modal-window_call" data-modal="call">
  <main class="modal-window__main modal-window__main_order-call">
   <div>
    <button class="modal__close" id="close">
      <img src="${BurgerClose}" alt="Закрыть"/>
    </button>
     <h1 class="text modal-window__title">Заказать звонок</h1>
  </div>
    <div class="modal-window__container">
      <input class="modal-window__input" type="tel" placeholder="Телефон" />
      <p class="modal-window__text">
        Нажимая “отправить”, вы даете согласие на
        <span class="modal-window__text modal-window__text_pink"
          >обработку персональных данных</span
        >
        и соглашаетесь с нашей
        <span class="modal-window__text modal-window__text_pink"
          >политикой конфиденциальности</span
        >
      </p>
    </div>
  </main>
  <button class="button button_send">
    <img src="${Group10}" class="swiper-price__goside" />
  </button>
</div>
<div
  class="container container__blur container__blur_modal"
  id="overlay_modal-call">
</div>
`;




// btnChat.addEventListener('click', () => openModal('chat')); // ✅
// btnCall.addEventListener('click', () => openModal('call')); // ✅

  return modal;
}

  