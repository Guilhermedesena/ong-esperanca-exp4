# Módulos JavaScript

O arquivo `../app.js` é o ponto de entrada da aplicação. Os módulos seguem responsabilidade única:

- `router.js`: resolução das rotas e carregamento das views;
- `templates.js`: carregamento e geração segura de HTML;
- `data.js`: dados estruturados dos projetos;
- `validation.js`: regras e mensagens do formulário;
- `storage.js`: persistência e restauração com Web Storage;
- `charts.js`: ciclo de vida do gráfico Chart.js;
- `interactions.js`: menu, modal, toast e teclado;
- `ui.js`: coordenador que inicializa apenas os recursos presentes em cada view.

A comunicação acontece por funções exportadas e importadas explicitamente, sem variáveis globais próprias e sem dependências circulares.
