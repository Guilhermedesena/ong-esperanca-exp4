function messageFor(field) {
  if (field.validity.valueMissing) return "Este campo é obrigatório.";
  if (field.validity.typeMismatch) return "Informe um valor no formato esperado.";
  if (field.validity.patternMismatch) return "Use o formato (99) 99999-9999.";
  if (field.validity.tooShort) return `Digite pelo menos ${field.minLength} caracteres.`;
  return "Revise o valor informado.";
}

export function validateField(field) {
  const oldMessage = field.parentElement.querySelector(`[data-field="${field.id}"]`);
  oldMessage?.remove();
  field.classList.remove("is-valid", "is-invalid");
  if (!field.required && !field.value) return true;
  const valid = field.checkValidity();
  field.classList.add(valid ? "is-valid" : "is-invalid");
  field.setAttribute("aria-invalid", String(!valid));
  const message = document.createElement("span");
  message.className = `field-message ${valid ? "success" : "error"}`;
  message.dataset.field = field.id;
  message.id = `${field.id}-feedback`;
  message.textContent = valid ? "Campo preenchido corretamente." : messageFor(field);
  field.setAttribute("aria-describedby", message.id);
  field.insertAdjacentElement("afterend", message);
  return valid;
}

export function initFormValidation(form, onValid) {
  const fields = [...form.querySelectorAll("input, select, textarea")];
  form.addEventListener("input", (event) => {
    if (event.target.matches("input, select, textarea") && event.target.hasAttribute("aria-invalid")) validateField(event.target);
  });
  form.addEventListener("blur", (event) => {
    if (event.target.matches("input, select, textarea")) validateField(event.target);
  }, true);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const valid = fields.map(validateField).every(Boolean);
    if (!valid) return fields.find((field) => !field.checkValidity())?.focus();
    onValid?.(Object.fromEntries(new FormData(form)));
  });
}
