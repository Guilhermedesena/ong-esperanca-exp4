let modalTrigger = null;

function initThemeToggle() {
  const button = document.querySelector("[data-theme-toggle]");
  if (!button || button.dataset.themeReady) return;
  button.dataset.themeReady = "true";
  const label = button.querySelector("[data-theme-label]");
  const icon = button.querySelector("[data-theme-icon]");
  let storedTheme = null;
  try { storedTheme = localStorage.getItem("ong-esperanca-theme"); } catch {}
  const preferredTheme = window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  function applyTheme(theme) {
    const dark = theme === "dark";
    document.documentElement.dataset.theme = theme;
    button.setAttribute("aria-pressed", String(dark));
    label.textContent = dark ? "Ativar modo claro" : "Ativar modo escuro";
    icon.textContent = dark ? "☀" : "◐";
  }

  applyTheme(storedTheme === "dark" || storedTheme === "light" ? storedTheme : preferredTheme);
  button.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    try { localStorage.setItem("ong-esperanca-theme", nextTheme); } catch {}
  });
}

function closeModal() {
  const modal = document.querySelector("[data-modal]:not([hidden])");
  if (!modal) return;
  modal.hidden = true;
  modalTrigger?.focus();
}

function handleDialogKeys(event) {
  const modal = document.querySelector("[data-modal]:not([hidden])");
  if (!modal) return;
  if (event.key === "Escape") {
    event.preventDefault();
    closeModal();
    return;
  }
  if (event.key !== "Tab") return;
  const controls = [...modal.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])")]
    .filter((element) => !element.disabled && !element.hidden);
  if (!controls.length) return;
  const first = controls[0];
  const last = controls.at(-1);
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

export function initInteractions() {
  initThemeToggle();
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  menuButton?.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.querySelector(".sr-only").textContent = open ? "Fechar menu" : "Abrir menu";
  });

  document.querySelector("[data-open-modal]")?.addEventListener("click", (event) => {
    modalTrigger = event.currentTarget;
    const modal = document.querySelector("[data-modal]");
    modal.hidden = false;
    modal.querySelector("[data-close-modal]")?.focus();
  });
  document.querySelectorAll("[data-close-modal]").forEach((button) => button.addEventListener("click", closeModal));
  document.querySelector("[data-show-toast]")?.addEventListener("click", () => {
    const toast = document.querySelector("[data-toast]");
    toast.hidden = false;
    requestAnimationFrame(() => toast.classList.add("is-visible"));
  });
  document.querySelector("[data-close-toast]")?.addEventListener("click", () => {
    const toast = document.querySelector("[data-toast]");
    toast.classList.remove("is-visible");
    toast.hidden = true;
  });

  document.removeEventListener("keydown", handleDialogKeys);
  document.addEventListener("keydown", handleDialogKeys);
}
