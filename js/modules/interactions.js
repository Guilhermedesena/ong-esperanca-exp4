function handleEscape(event) {
  if (event.key === "Escape") document.querySelector("[data-modal]:not([hidden])")?.setAttribute("hidden", "");
}

export function initInteractions() {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  menuButton?.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  document.querySelector("[data-open-modal]")?.addEventListener("click", () => {
    document.querySelector("[data-modal]").hidden = false;
  });
  document.querySelectorAll("[data-close-modal]").forEach((button) => button.addEventListener("click", () => {
    document.querySelector("[data-modal]").hidden = true;
  }));
  document.querySelector("[data-show-toast]")?.addEventListener("click", () => {
    document.querySelector("[data-toast]").classList.add("is-visible");
  });
  document.querySelector("[data-close-toast]")?.addEventListener("click", () => {
    document.querySelector("[data-toast]").classList.remove("is-visible");
  });

  document.removeEventListener("keydown", handleEscape);
  document.addEventListener("keydown", handleEscape);
}
