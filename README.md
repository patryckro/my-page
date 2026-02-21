# MyPage – Portfólio Full-Stack .NET

> 🇧🇷 Este arquivo está em português.  
> 🇺🇸 For the English version, see [README.en.md](./README.en.md).


Portfólio pessoal desenvolvido para apresentar minha trajetória como **Desenvolvedor Full-Stack .NET**, destacando experiências em sistemas de saúde e meio ambiente, além de projetos com **ASP.NET Core, React/Next.js, React Native, TypeScript e SQL Server**.

O objetivo deste projeto é funcionar tanto como cartão de visitas profissional quanto como vitrine técnica: arquitetura organizada, código tipado, UI moderna e integração com uma API em .NET para formulário de contato e dados dinâmicos.

---

## ✨ Principais Features

- **Frontend moderno com Next.js + React + TypeScript**
  - App Router, server components e otimizações de performance.
  - Estilização com Tailwind CSS e componentes headless (shadcn).
  - Animações com Framer Motion.

- **Identidade como Full-Stack .NET**
  - Seções destacando experiência com ASP.NET Core, C#, SQL Server.
  - Projetos reais: sistemas de saúde (RioSaúde, Vigilância Sanitária) e meio ambiente (INEA).

- **Design responsivo e acessível**
  - Layout fluido para desktop, tablet e mobile.
  - Foco em legibilidade, contraste e navegação clara.

- **Dark/Light mode**
  - Tema controlado por `next-themes`, com suporte a tema do sistema.

- **Internacionalização (i18n)**
  - Suporte a **pt-BR** e **en-US** usando `next-intl`.
  - Textos centralizados em arquivos JSON.

- **Seção de projetos com contexto real**
  - Sistemas internos (licenciamento ambiental, protocolos, cursos, etc.) descritos sem expor dados sensíveis.
  - Destaque para stack utilizada e papel desempenhado.

- **Formulário de contato**
  - Validação com React Hook Form + Zod.
  - Preparado para integração com API em ASP.NET Core.

---

## 🧱 Stack Técnica

### Frontend

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn](https://ui.shadcn.com/) (componentes)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [next-intl](https://next-intl.dev/) (i18n)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Axios](https://axios-http.com/)

### Backend (planejado / integração)

- [ASP.NET Core](https://learn.microsoft.com/aspnet/core)
- C# / .NET 8+
- APIs REST/GraphQL
- SQL Server
- Docker (containerização)

---

## 📂 Estrutura do Projeto (Frontend)

```txt
app/
  [locale]/
    layout.tsx      # Layout por idioma (i18n, tema, header/footer)
    page.tsx        # Home (Hero, About, Skills, Projects, Experience)
  api/
    contact/
      route.ts      # Endpoint de contato (Next API, opcional)
  layout.tsx        # Root layout (shell inicial)
  globals.css       # Estilos globais / tokens Tailwind v4

components/
  layout/
    Header.tsx
    Footer.tsx
    Navigation.tsx
    MobileMenu.tsx
  sections/
    Hero.tsx
    About.tsx
    Skills.tsx
    Projects.tsx
    Experience.tsx
  shared/
    ThemeToggle.tsx
    LanguageSwitch.tsx
    AnimatedSection.tsx
    SectionHeading.tsx
  skills/
    SkillCard.tsx
  projects/
    ProjectCard.tsx
  experience/
    ExperienceCard.tsx
    Timeline.tsx
  providers/
    theme-provider.tsx

lib/
  types/
    index.ts        # Tipos: Project, Experience, Skill, etc.
  constants/
    projects.ts     # Lista de projetos (RioSaúde, INEA, VS, etc.)
    skills.ts
    experience.ts
    social.ts
    navigation.ts
  utils/
    cn.ts
    validators.ts   # Schemas Zod (ex: formulário de contato)

messages/
  pt-BR.json
  en-US.json
