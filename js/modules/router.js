import { loadTemplate } from "./templates.js?v=chart-1";
const routes = { "/": "html/views/home.html", "/projetos": "html/views/projetos.html", "/cadastro": "html/views/cadastro.html", "/feedback": "html/views/feedback.html" };
function currentRoute() { return location.hash.replace(/^#/, "") || "/"; }
async function renderRoute() {
  const route = currentRoute();
  const target = document.querySelector("#app");
  target.setAttribute("aria-busy", "true");
  try {
    target.innerHTML = await loadTemplate(routes[route] || routes["/"]);
    document.querySelectorAll("[data-route]").forEach((link) => link.removeAttribute("aria-current"));
    document.querySelector(`[href="#${route}"][data-route]`)?.setAttribute("aria-current", "page");
    document.dispatchEvent(new CustomEvent("view:rendered", { detail: { route } }));
    target.focus();
  } catch (error) {
    target.innerHTML = `<section class="container"><h1>Conteúdo indisponível</h1><p>${error.message}</p></section>`;
  } finally { target.setAttribute("aria-busy", "false"); }
}
export function initRouter() {
  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[data-route]");
    if (!link) return;
    event.preventDefault();
    const nextHash = link.getAttribute("href");
    if (location.hash === nextHash) renderRoute(); else location.hash = nextHash;
  });
  window.addEventListener("hashchange", renderRoute);
  if (!location.hash) location.replace("#/"); else renderRoute();
}
