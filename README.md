# Toca do Espertinho — Landing Page

Site institucional (landing page) da **Toca do Espertinho**, escola de Educação Infantil em Mauá, SP. Primeiro site do cliente — desenvolvido pela **TeoCode** a partir do conteúdo real das redes sociais oficiais do negócio.

## Sobre o conteúdo

Todo o texto, os números e o depoimento exibidos no site foram extraídos das redes sociais oficiais da escola (nenhuma informação foi inventada):

- **Facebook:** [facebook.com/tocadoespertinho](https://www.facebook.com/tocadoespertinho/?locale=pt_BR) — descrição da escola, endereço, telefone, e-mail e avaliações.
- **Instagram:** [instagram.com/tocadoespertinho](https://www.instagram.com/tocadoespertinho/) — bio, destaques (Mini Maternal, Maternal, Alfabetização, Artes, Matemática, Ciências, Corpo/Movimento, Período Integral, Feira) e parceria com o Colégio da Toca para o Ensino Fundamental I.

A identidade visual (mascote coelho, dourado/âmbar, ciano, navy) foi construída a partir das cores e do personagem já usados pela escola em suas redes.

## Stack

Site 100% estático, sem passo de build — HTML, CSS e JavaScript puro:

- **Tailwind CSS** via CDN (`cdn.tailwindcss.com`), com tema customizado (cores, tipografia e raios de borda da marca) configurado em `index.html`.
- **Google Fonts:** [Fredoka](https://fonts.google.com/specimen/Fredoka) (títulos/display) + [Nunito Sans](https://fonts.google.com/specimen/Nunito+Sans) (texto).
- **JavaScript vanilla** (`assets/js/main.js`): menu mobile, revelação suave ao rolar a página, contador animado, cabeçalho com sombra ao rolar e montagem automática dos links de WhatsApp com mensagem pré-preenchida por seção.

Não é necessário Node.js, `npm install` ou qualquer bundler para rodar ou publicar este site.

> Quer migrar para uma build compilada do Tailwind (menor, sem dependência de CDN em produção)? É só rodar `npm install -D tailwindcss` e gerar um `tailwind.config.js` + CSS compilado a partir das classes já usadas em `index.html` — a estrutura de cores/fontes já está documentada no `<script>` de configuração do Tailwind, dentro do próprio `index.html`.

## Estrutura do projeto

```
TocaEspertinho/
├── index.html                 # Página única com todas as seções
├── assets/
│   ├── css/
│   │   └── style.css           # Tokens de cor, animações e ajustes finos (fora do Tailwind)
│   ├── js/
│   │   └── main.js             # Interações: menu, scroll reveal, contadores, links de WhatsApp
│   └── img/
│       └── favicon.svg         # Ícone da aba (mascote da marca)
├── .gitignore
└── README.md
```

## Seções da página

1. **Hero** — proposta de valor + CTA para agendar visita no WhatsApp.
2. **Sobre** — proposta pedagógica (afeto, criatividade, inovação), extraída da bio oficial.
3. **Programas (Serviços)** — trilha pedagógica: Mini Maternal → Maternal → Educação Infantil & Alfabetização → Ensino Fundamental I (parceria com o Colégio da Toca).
4. **Atividades** — Artes, Matemática, Ciências, Corpo e Movimento, Alfabetização, Feira & Eventos.
5. **Matrículas** — seção de oferta com CTA de conversão para o WhatsApp.
6. **Depoimentos** — avaliação real (100% recomendada, 5 avaliações no Facebook) com o depoimento de Tayane Oliveira.
7. **Contato** — endereço, WhatsApp, e-mail e mapa incorporado do Google Maps.
8. **Rodapé** — marca, contatos, navegação, redes sociais e assinatura da agência.

Todos os botões de call-to-action levam para o WhatsApp da escola `(11) 4544-5015`, cada um com uma mensagem pré-preenchida de acordo com o contexto da seção.

## Como rodar localmente

Não precisa de build. Basta servir a pasta como arquivos estáticos. Duas opções simples:

```bash
python -m http.server 5180
```

```bash
npx serve .
```

Depois acesse `http://localhost:5180` (ou a porta usada).

## Publicação / Deploy

Como é um site estático puro, pode ser publicado em qualquer hospedagem, sem etapa de build:

- **GitHub Pages:** nas configurações do repositório, em *Pages*, selecione a branch `main` e a pasta raiz (`/`).
- **Netlify / Vercel:** importe o repositório sem configurar comando de build (publish directory = raiz do projeto).
- **Hospedagem tradicional (cPanel, FTP):** faça upload de todos os arquivos para a pasta pública do domínio.

## Créditos

Site desenvolvido por **TeoCode** para **Toca do Espertinho**.
