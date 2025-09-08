export function createFooter() {
  const footer = document.createElement("footer");
  footer.className = "footer";
  footer.innerHTML = `<div class="footer" id="footer-all">
          <div class="footer__text">
            <div class="footer__text--developer">
              <p class="text__year">© 2019 CPS</p>
              <p class="text__company">Разработано командой Apesong</p>
            </div>
            <p class="text__privacy">Политика конфиденциальности</p>
            <p class="text__info">
              Информация, размещенная на данной странице, не является публичной
              офертой
            </p>
          </div>
        </div>`;
  return footer;
}
