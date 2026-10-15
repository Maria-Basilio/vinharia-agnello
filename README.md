# 🍷 Vinharia Agnello

Site e sistema básico de cadastro de vinhos da **Vinheria Agnello**, desenvolvido como checkpoint da disciplina de Desenvolvimento Web.

Site publicado (GitHub Pages): https://maria-basilio.github.io/vinharia-agnello/

---

## Sobre o caso 
A **Vinheria Agnello** é uma empresa familiar de São Paulo, com mais de 15 anos de atuação e uma loja física. É dirigida por Giulio, o proprietário, e sua filha Bianca.

O grande diferencial da vinheria é o atendimento especializado: os vendedores conhecem uvas, regiões e vinícolas e ajudam o cliente a escolher o vinho ideal, sugerindo harmonização com pratos e ocasiões. Os vinhos também passam por **armazenagem controlada**, principalmente os raros e de maior valor. 

Com o impacto da pandemia, a vinheria decidiu entrar no mundo digital, buscando levar para a internet a experiência de compra que os clientes encontram na loja física. 

---

## Integrantes

- Beatriz Martin da Paz
- Maria Eduarda Basilio
- Ísis Barbosa Lamim

---

## Checkpoint 1: Sistema básico de gerenciamento de vinhos

Sistema feito apenas com variáveis, operadores, `prompt()`, `alert()` e `console.log()`.

**Como funciona:**

1. Ao abrir o `index.html`, o sistema pede, com `prompt()`, as informações do vinho: **nome**, **tipo** (Tinto, Branco ou Rosé), **safra** e **quantidade em estoque**.
2. Um `alert()` informa que o cadastro foi realizado.
3. Outro `alert()` avisa que os detalhes serão exibidos no console.
4. Os dados são mostrados de forma organizada no `console.log()`. Para ver, abra o console do navegador com **F12**.

O código fica em `src/js/script.js`.

---

## Checkpoint 2: Site da Vinheria Agnello

Site com 5 páginas em HTML e CSS, com menu de navegação em todas elas. 

| Página | Arquivo | Conteúdo |
|---|---|---|
| Início | `index.html` | Apresentação da vinheria e menu principal |
| História | `src/pages/historia.html` | História da família Agnello e da vinheria |
| Vinhos | `src/pages/vinhos.html` | Catálogo de vinhos em tabela |
| Experiência | `src/pages/experiencia.html` | Atendimento especializado, harmonização e armazenagem controlada |
| Contato | `src/pages/contato.html` | Formulário de contato |

---

## Estrutura do Projeto

```
vinharia-agnello/
│
├── index.html
├── README.md
│
└── src/
    ├── assets/
    │   └── imgs/
    ├── css/
    │   ├── style.css
    │   └── efeitos.css 
    ├── js/
    │   └── script.js
    └── pages/
        ├── historia.html
        ├── vinhos.html
        ├── experiencia.html
        └── contato.html

```

## 🎨 Efeitos Visuais

No Check-Point 02, aprimoramos o site da Vinheria Agnello com efeitos visuais no arquivo `src/css/efeitos.css`. Ele é importado na primeira linha do `style.css` com `@import url("efeitos.css");`, pois a regra `@import` só é válida antes das demais regras do arquivo. Os efeitos foram aplicados nas páginas já existentes, sem alterar a estrutura do site.

### Pseudo-classes

| Pseudo-classe | Onde foi aplicada | Efeito |
|---|---|---|
| `:hover` | Links do menu | A cor muda para lima e aparece uma linha embaixo do link |
| `:hover` | Linhas da tabela de vinhos | A linha ganha fundo lima e texto vinho |
| `:hover` | Títulos `h2` | A linha decorativa embaixo do título aumenta |
| `:hover` | Imagens de destaque | A imagem aumenta levemente (`scale(1.04)`) |
| `:hover` | Botão de envio do formulário | O botão aumenta levemente (`scale(1.08)`) |
| `:focus` | Campos do formulário de contato | Borda lima, brilho ao redor e aumento da fonte |
| `:focus-within` | Formulário de contato | Os rótulos ficam lima quando algum campo está ativo |
| `:user-invalid` | Campo de e-mail | A borda fica avermelhada quando o e-mail digitado é inválido |
| `:nth-child()` | Linhas da tabela de vinhos | Cores alternadas entre linhas pares e ímpares |
| `:last-child` | Última linha da tabela | Remove a borda inferior repetida |
| `:not()` | Menu | O efeito de hover não é aplicado ao link da página atual |

### Pseudo-elementos

- **`::after`** nos títulos `h2`: cria uma linha decorativa rosa (54px de largura por 2px de altura), centralizada abaixo do título. Ao passar o mouse sobre o título, a linha cresce para 100px.
- **`::selection`**: personaliza o texto selecionado pelo usuário em todo o site. O texto muda de cor (lima ou rosa, conforme o fundo de cada seção), sem cor de fundo na seleção.

### Transformações

- **`scale()`** nas imagens de destaque (`1.04`) e no botão de envio (`1.08`) ao passar o mouse.
- **`translateY()`** e **`scale()`** nos quadros das animações de entrada, descritas mais abaixo.

### Transições

Todos os efeitos interativos são suavizados com `transition`, declarada no estado normal do elemento para que a animação aconteça na entrada e na saída do mouse ou do foco:

- **Menu:** `transition: color 0.3s, box-shadow 0.5s`
- **Campos do formulário:** `transition: border-color 0.3s, box-shadow 0.4s, font-size 0.3s`
- **Rótulos do formulário:** `transition: color 0.3s`
- **Botão de envio:** `transition: all 0.4s`
- **Linhas da tabela:** `transition: background-color 0.3s, color 0.3s`
- **Linha decorativa dos `h2`:** `transition: width 0.3s ease`
- **Imagens de destaque:** `transition: transform 0.3s ease`

### Animações (`@keyframes`)

- **`entradaTitulo`:** o título da página inicial aparece com *fade-in* subindo 20px (1 segundo, `ease-out`).
- **`entradaImagem`:** as imagens de destaque das páginas História, Vinhos e Contato aparecem com *fade-in* e leve aumento de escala (de 0.96 para 1).

Para acessibilidade, usamos `@media (prefers-reduced-motion: reduce)`, que desativa as animações de entrada para quem configurou o sistema para reduzir movimentos.
--- 

## Tecnologias
- HTML5
- CSS
- JavaScript
- Git e GitHub 