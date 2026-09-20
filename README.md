# ONG Esperança — SPA acessível

Aplicação front-end acadêmica para divulgação dos projetos da ONG Esperança, cadastro de apoiadores e apresentação de indicadores de impacto social.

## Funcionalidades

- navegação SPA com rotas por hash;
- views e cards gerados dinamicamente;
- formulário com validação acessível e mensagens contextuais;
- persistência local dos cadastros com Web Storage;
- componentes de feedback, modal e navegação por teclado;
- gráfico responsivo de impacto social com Chart.js.

## Tecnologias

- HTML5 semântico;
- CSS responsivo;
- JavaScript com ES6 Modules;
- Web Storage API;
- Chart.js 4.5.1.
- Vite para desenvolvimento e build de produção.

## Estrutura

```text
.
├── css/                # estilos e design responsivo
├── html/views/         # fragmentos das rotas da SPA
├── imagens/            # recursos visuais
├── js/app.js           # ponto de entrada
├── js/modules/         # módulos por responsabilidade
├── scripts/check.mjs   # verificação estrutural automatizada
└── vite.config.js      # configuração do build
```

Os módulos separam roteamento, templates, dados, validação, armazenamento, gráficos e interações. Consulte `js/modules/README.md` para o detalhamento.

## Pré-requisitos e instalação

- Node.js 20.19 ou superior;
- pnpm 9 ou superior.

```bash
git clone https://github.com/Guilhermedesena/ong-esperanca-exp4.git
cd ong-esperanca-exp4
pnpm install
pnpm dev
```

O servidor de desenvolvimento informa a URL local no terminal.

## Verificação e produção

```bash
pnpm check
pnpm build
pnpm preview
```

`pnpm check` valida a estrutura essencial. `pnpm build` gera os recursos minificados em `dist/`, incluindo as views e imagens necessárias em tempo de execução. `pnpm preview` permite verificar localmente o resultado de produção.

## Estratégia de versionamento

O repositório segue uma adaptação do GitFlow:

- `main`: versões estáveis e publicáveis;
- `develop`: integração contínua das funcionalidades aprovadas;
- `feature/*`: desenvolvimento isolado de cada melhoria;
- `release/*`: estabilização antes de uma nova versão;
- `hotfix/*`: correções urgentes originadas da versão de produção.

Os commits utilizam mensagens semânticas, como `feat:`, `fix:`, `docs:`, `test:` e `chore:`.

## Acessibilidade

O projeto busca conformidade com WCAG 2.1 nível AA, incluindo estrutura semântica, nomes acessíveis, foco visível, mensagens associadas aos campos, navegação por teclado e alternativa textual para visualizações.

## Licença e contexto

Projeto demonstrativo desenvolvido para a disciplina de Desenvolvimento Front-End para Web. Os conteúdos e dados são fictícios e utilizados apenas para fins acadêmicos.
