# 🚀 Rocket Burger — One-Page Vitrine

Site institucional one-page moderno, ultrarrápido e mobile-first para a **Rocket Burger** (Ji-Paraná - RO). Desenvolvido para apresentar a marca, destacar os produtos campeões de vendas e converter visitantes diretamente em pedidos via delivery.

---

## 🛠️ Stack Utilizada

- **Framework:** [Astro](https://astro.build/) (saída 100% estática / SSG para carregamento instantâneo)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Linguagem:** TypeScript
- **Otimização de Mídia:** Formato WebP com srcset responsivo e priorização LCP no Hero
- **Zero JS no cliente:** HTML/CSS nativo para máxima pontuação no Lighthouse

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- Node.js 18+ (recomendado Node 20+)
- npm ou pnpm

### Passos
```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento local
npm run dev

# 3. Gerar build estático para produção
npm run build

# 4. Pré-visualizar a versão de produção
npm run preview
```

Os arquivos estáticos prontos para produção são gerados na pasta `dist/`.

---

## ⚙️ Como Trocar Dados e Imagens de Novos Clientes

O projeto foi construído sob uma arquitetura desacoplada: **todo o conteúdo do cliente reside em um único arquivo de configuração**.

1. **Alterar Dados do Cliente:**
   Abra `src/data/site.config.ts` e ajuste:
   - Nome, slogan e descrição SEO
   - Link de pedidos (`orderUrl`) — as UTMs são injetadas automaticamente!
   - WhatsApp e Instagram
   - Endereço, cidade, horário de atendimento e comodidades
   - Lista de destaques (nome, descrição e badges)
   - Depoimentos reais de clientes

2. **Substituir Imagens:**
   As imagens otimizadas ficam localizadas em `public/images/`:
   - `hero-burger.webp` (Foto de destaque do Hero)
   - `destaque-apollo7.webp`, `destaque-saturno5.webp`, etc. (Lanches do cardápio)
   - `sobre-burger.webp` (Ambiente / preparo artesanal)
   - `og-image.jpg` (Imagem de compartilhamento em redes sociais 1200x630)

---

## 🌐 Como Fazer Deploy

### Opção 1: Cloudflare Pages (Recomendado)
1. Conecte o repositório GitHub ao painel do **Cloudflare Pages**.
2. Defina os parâmetros de build:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
3. Clique em **Save and Deploy**.

### Opção 2: Netlify
1. Crie um novo site a partir do repositório no painel da **Netlify**.
2. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Clique em **Deploy site**.

---

## 📋 Lista de TODOs para o Cliente

- [ ] **História da marca:** Adicionar o relato detalhado dos fundadores da Rocket Burger em `src/data/site.config.ts` (seção `sobre.paragrafos`).
- [ ] **Área de Entrega:** Especificar os bairros exatos e taxas de entrega caso deseje exibir uma tabela detalhada.
- [ ] **Domínio Próprio:** Configurar o DNS do domínio final (ex.: `rocketburger.com.br`) na plataforma de deploy escolhida.

---

## ✅ Checklist de Qualidade

- [x] **Links & UTMs:** Todos os botões de pedido direcionam com `?utm_source=site&utm_medium=botao&utm_campaign=[header|hero|destaque-xyz|final]`.
- [x] **Segurança Externa:** Links externos com `target="_blank"` e `rel="noopener noreferrer"`.
- [x] **SEO Completo:** Meta title, description, Open Graph 1200x630, canonical, `robots.txt` e JSON-LD `FastFoodRestaurant`.
- [x] **Acessibilidade:** Marcação semântica (`header`, `main`, `section`, `article`, `footer`), hierarquia de headings (`h1` a `h3`), contraste de cores conforme WCAG AA e foco visível.
- [x] **Performance (LCP):** Preload da imagem do Hero, atributos `width`/`height` explícitos contra layout shifts (CLS=0) e fontes com `font-display: swap`.
- [x] **Responsividade:** Testado e adaptado para resoluções mobile (360px, 390px), tablets (768px) e desktops (1024px, 1440px).
