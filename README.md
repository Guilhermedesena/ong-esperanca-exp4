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

## Estrutura

```text
.
├── css/                # estilos e design responsivo
├── html/views/         # fragmentos das rotas da SPA
├── imagens/            # recursos visuais
├── js/app.js           # ponto de entrada
└── js/modules/         # módulos por responsabilidade
```

Os módulos separam roteamento, templates, dados, validação, armazenamento, gráficos e interações. Consulte `js/modules/README.md` para o detalhamento.

## Execução local

Como as views são carregadas com `fetch`, abra o projeto por meio de um servidor HTTP local. Um exemplo com Python é:

```bash
python -m http.server 8000
```

Depois, acesse `http://localhost:8000`.

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
