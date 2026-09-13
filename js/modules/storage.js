const STORAGE_KEY = "ong-esperanca:cadastros";

export function getRegistrations() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    localStorage.removeItem(STORAGE_KEY);
    return [];
  }
}

export function saveRegistration(data) {
  const registrations = getRegistrations();
  const id = globalThis.crypto?.randomUUID?.() || `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
  const record = { ...data, id, createdAt: new Date().toISOString() };
  registrations.push(record);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(registrations));
  return record;
}

export function renderRegistrations(container) {
  const registrations = getRegistrations();
  container.replaceChildren();
  if (!registrations.length) return;
  const title = document.createElement("h2");
  title.textContent = `Interesses salvos neste navegador: ${registrations.length}`;
  const list = document.createElement("ul");
  registrations.forEach(({ nome, interesse, createdAt }) => {
    const item = document.createElement("li");
    item.textContent = `${nome} · ${interesse} · ${new Date(createdAt).toLocaleDateString("pt-BR")}`;
    list.append(item);
  });
  container.append(title, list);
}

export function initRegistrationStorage(form, container) {
  renderRegistrations(container);
  return (data) => {
    saveRegistration(data);
    renderRegistrations(container);
    form.reset();
    form.querySelectorAll(".is-valid, .is-invalid").forEach((field) => field.classList.remove("is-valid", "is-invalid"));
    form.querySelectorAll(".field-message").forEach((message) => message.remove());
  };
}
