import { projects } from "./data.js";
import { projectCardTemplate } from "./templates.js";
import { initFormValidation } from "./validation.js?v=retention-1";
import { initRegistrationStorage } from "./storage.js?v=retention-1";
import { initImpactChart } from "./charts.js?v=chart-1";
import { initInteractions } from "./interactions.js?v=modular-1";

export function initView() {
  initImpactChart(document.querySelector("#impactChart"));
  const projectList = document.querySelector("#projectList");
  if (projectList) projectList.innerHTML = projects.map(projectCardTemplate).join("");
  const form = document.querySelector("#cadastroForm");
  if (form) {
    const persistRegistration = initRegistrationStorage(form, document.querySelector("#cadastrosSalvos"));
    initFormValidation(form, persistRegistration);
  }
  initInteractions();
}
