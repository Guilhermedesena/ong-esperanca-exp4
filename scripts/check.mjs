import { access, readFile } from "node:fs/promises";

const requiredFiles = [
  "index.html",
  "css/style.css",
  "html/views/home.html",
  "html/views/projetos.html",
  "html/views/cadastro.html",
  "html/views/feedback.html",
  "js/app.js",
  "js/modules/router.js",
  "js/modules/validation.js",
  "js/modules/storage.js"
];

await Promise.all(requiredFiles.map((file) => access(file)));

const index = await readFile("index.html", "utf8");
const requiredMarkers = ["lang=\"pt-BR\"", "aria-live", "type=\"module\""];
const missingMarkers = requiredMarkers.filter((marker) => !index.includes(marker));

if (missingMarkers.length) {
  throw new Error(`Marcadores obrigatórios ausentes: ${missingMarkers.join(", ")}`);
}

console.log(`Verificação concluída: ${requiredFiles.length} arquivos e ${requiredMarkers.length} marcadores essenciais.`);
