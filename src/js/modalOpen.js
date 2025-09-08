export function openModal(type) {
  const modal = document.querySelector(".modal");

  const chatModal = document.querySelector('[data-modal="chat"]');
  const callModal = document.querySelector('[data-modal="call"]');

  const overlay = document.querySelector(".overlay");

  overlay.classList.add("modal-open");
  modal.classList.add("active");
  modal.classList.remove("hidden");

  if (type === "chat") {
    chatModal.classList.add("active");
    chatModal.classList.remove("hidden");
    callModal.classList.remove("active");
    callModal.classList.add("hidden");
  } else if (type === "call") {
    callModal.classList.add("active");
    callModal.classList.remove("hidden");
    chatModal.classList.remove("active");
    chatModal.classList.add("hidden");
  }

  const closeBtns = document.querySelectorAll(".modal__close");

  closeBtns.forEach((btn) => {
    btn.onclick = () => {
      modal.classList.remove("active");
      modal.classList.add("hidden");

      chatModal.classList.remove("active");
      chatModal.classList.add("hidden");

      callModal.classList.remove("active");
      callModal.classList.add("hidden");

      overlay.classList.remove("modal-open");
    };
  });
}
