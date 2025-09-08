import burger from "../assets/image/burger.svg";
import divider from "../assets/image/divider.svg";
import Group from "../assets/image/Group.svg";
import call from "../assets/image/call.svg";
import chat from "../assets/image/chat.svg";
import profile from "../assets/image/profile.svg";
import repair from "../assets/image/repair.svg";
import checkstatus from "../assets/image/checkstatus.svg";

export function createHeader() {
  const header = document.createElement("header");
  header.className = "header";
  header.innerHTML = `<div class="header__main-navigation">
        <div class="header__nav-left">
          <label
            for="menu-toggle"
            class="burger-button"
            aria-label="Открыть меню"
          >
            <img src="${burger}" alt="open menu" />
          </label>
          <button class="header__divider-first">
            <img src="${divider}" />
          </button>
          <button class="header__logo">
            <img src="${Group}" />
          </button>
        </div>
        <div class="header__nav-right">
          <div class="contact-us">
            <button class="contact-us__call" data-attribute="call">
              <img src="${call}" class="call_img" />
            </button>
            <button class="contact-us__chat" data-attribute="chat">
              <img src="${chat}" class="chat_img" />
            </button>
            <button class="contact-us__profile">
              <img src="${profile}" />
            </button>
          </div>
          <button class="header__divider-second">
            <img src="${divider}" />
          </button>
          <button class="header__repair">
            <img src="${repair}" />
          </button>
          <button class="header__checkstatus">
            <img src="${checkstatus}" />
          </button>
        </div>
      </div>
  `;
  return header;
}
