export async function loadTemplate(path) {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) throw new Error(`Não foi possível carregar ${path}`);
  return response.text();
}

function escapeHtml(value) {
  const element = document.createElement("span");
  element.textContent = String(value);
  return element.innerHTML;
}

export function projectCardTemplate(project) {
  return `
    <article class="card" data-project-id="${project.id}">
      <span class="badge badge--${escapeHtml(project.variant)}">${escapeHtml(project.status)}</span>
      <h2>${escapeHtml(project.title)}</h2>
      <p>${escapeHtml(project.description)}</p>
      <a class="btn" href="#/cadastro" data-route>Participar</a>
    </article>`;
}
