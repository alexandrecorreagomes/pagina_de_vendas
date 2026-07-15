# 🕐 Página de Vendas — Smartwatch Premium

<div align="center">

![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-6.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-0055FF?style=for-the-badge&logo=framer&logoColor=white)

**Landing page moderna e animada para apresentação e venda de smartwatch premium.**

[🚀 Demo ao Vivo](#) · [📋 Reportar Bug](https://github.com/alexandrecorreagomes/pagina_de_vendas/issues) · [💡 Sugerir Feature](https://github.com/alexandrecorreagomes/pagina_de_vendas/issues)

</div>

---

## 📋 Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Stack Tecnológica](#stack-tecnológica)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Comandos Disponíveis](#comandos-disponíveis)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Licença](#licença)

---

## 📖 Sobre o Projeto

Landing page de alta conversão desenvolvida com foco em **performance**, **animações fluidas** e **design premium**. O projeto apresenta um smartwatch com seções dedicadas a conectividade, métricas de saúde, especificações técnicas, garantia de autenticidade e oferta de preço.

A interface foi projetada com tema escuro, glassmorphism e micro-animações para maximizar o engajamento do usuário e a taxa de conversão.

---

## ✨ Funcionalidades

- 🎨 **Design Dark Premium** — Paleta escura com gradientes e efeito glassmorphism
- 🎬 **Animações com Framer Motion** — Transições suaves e scroll-triggered animations
- 📱 **100% Responsivo** — Experiência otimizada para mobile, tablet e desktop
- ⚡ **CTA Flutuante** — Botão de compra fixo no mobile para máxima conversão
- 🔍 **SEO-Ready** — HTML semântico, meta tags e estrutura de headings correta
- 🚀 **Performance** — Build otimizado com Vite e code splitting automático
- 🧹 **Linting** — OxLint configurado para código limpo e consistente

---

## 🛠️ Stack Tecnológica

| Tecnologia | Versão | Finalidade |
|---|---|---|
| [React](https://react.dev/) | 19.x | UI framework com Concurrent Features |
| [TypeScript](https://www.typescriptlang.org/) | 6.x | Tipagem estática |
| [Vite](https://vite.dev/) | 8.x | Build tool e dev server |
| [TailwindCSS](https://tailwindcss.com/) | 4.x | Framework CSS utility-first |
| [Framer Motion](https://www.framer.com/motion/) | 12.x | Biblioteca de animações |
| [OxLint](https://oxc.rs/docs/guide/usage/linter) | 1.x | Linter de alta performance |
| [PostCSS](https://postcss.org/) | 8.x | Transformações CSS |

---

## 📦 Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- **Node.js** `>= 20.x` — [Download](https://nodejs.org/)
- **npm** `>= 10.x` (incluído com o Node.js)
- **Git** — [Download](https://git-scm.com/)

---

## 🚀 Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/alexandrecorreagomes/pagina_de_vendas.git

# 2. Entre na pasta do projeto
cd pagina_de_vendas

# 3. Instale as dependências
npm install

# 4. Configure as variáveis de ambiente
cp .env.example .env

# 5. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse **http://localhost:5173** no seu navegador.

---

## 📜 Comandos Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento com HMR |
| `npm run build` | Gera o build de produção otimizado em `dist/` |
| `npm run preview` | Visualiza o build de produção localmente |
| `npm run lint` | Executa o OxLint para verificação de código |

---

## 📁 Estrutura de Pastas

```
pagina_de_vendas/
├── public/               # Arquivos estáticos (favicon, ícones SVG)
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/           # Imagens e recursos locais
│   │   ├── hero.png
│   │   ├── watch-connectivity.png
│   │   ├── watch-customization.png
│   │   └── athlete-specs.png
│   ├── components/       # Componentes React da página
│   │   ├── Navbar.tsx       # Barra de navegação com scroll behavior
│   │   ├── Hero.tsx         # Seção principal com CTA primário
│   │   ├── Connectivity.tsx # Seção de conectividade / performance
│   │   ├── HealthMetrics.tsx# Seção de métricas de saúde
│   │   ├── TechSpecs.tsx    # Especificações técnicas (Bento Grid)
│   │   ├── Authenticity.tsx # Garantia de autenticidade
│   │   ├── PricingCTA.tsx   # Seção de preços e oferta
│   │   ├── StickyCTA.tsx    # Botão flutuante para mobile
│   │   └── Footer.tsx       # Rodapé semântico
│   ├── App.tsx           # Componente raiz da aplicação
│   ├── main.tsx          # Entry point do React
│   └── index.css         # Estilos globais e customizações Tailwind
├── .env.example          # Template de variáveis de ambiente
├── .gitignore            # Arquivos ignorados pelo Git
├── index.html            # Template HTML da aplicação
├── package.json          # Dependências e scripts do projeto
├── tailwind.config.js    # Configuração do TailwindCSS
├── vite.config.ts        # Configuração do Vite
├── tsconfig.json         # Configuração base do TypeScript
└── README.md             # Este arquivo
```

---

## 🔐 Variáveis de Ambiente

Copie o arquivo `.env.example` para `.env` e preencha os valores:

```bash
cp .env.example .env
```

> ⚠️ **NUNCA** faça commit do arquivo `.env` com valores reais. Ele já está listado no `.gitignore`.

Consulte o arquivo [`.env.example`](.env.example) para ver todas as variáveis disponíveis e suas descrições.

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  Desenvolvido com ❤️ por <a href="https://github.com/alexandrecorreagomes">Alexandre Correa Gomes</a>
</div>
