# MyPage – Full-Stack .NET Portfolio

> 🇺🇸 This file is in English.  
> 🇧🇷 Para a versão em português, veja [README.md](./README.md).

Personal portfolio built to showcase my journey as a **Full-Stack .NET Developer**, highlighting experience with healthcare and environmental systems, as well as projects using **ASP.NET Core, React/Next.js, React Native, TypeScript, and SQL Server**.

This project aims to work both as a professional business card and a technical showcase: clean architecture, typed code, modern UI, and integration with a .NET API for the contact form and dynamic data.

---

## ✨ Main Features

- **Modern frontend with Next.js + React + TypeScript**
  - App Router, server components, and performance optimizations.
  - Styling with Tailwind CSS and headless components (shadcn).
  - Animations with Framer Motion.

- **Full-Stack .NET identity**
  - Sections highlighting experience with ASP.NET Core, C#, SQL Server.
  - Real systems: healthcare (RioSaúde, Health Surveillance) and environment (INEA).

- **Responsive and accessible design**
  - Fluid layout for desktop, tablet, and mobile.
  - Focus on readability, contrast, and clear navigation.

- **Dark/Light mode**
  - Theme handled by `next-themes`, with system theme support.

- **Internationalization (i18n)**
  - Support for **pt-BR** and **en-US** using `next-intl`.
  - All copy centralized in JSON files.

- **Contact form**
  - Validation with React Hook Form + Zod.
  - Ready to integrate with an ASP.NET Core API.

---

## 🧱 Tech Stack

### Frontend

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn](https://ui.shadcn.com/) (UI components)
- [Framer Motion](https://www.framer.com/motion/)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [next-intl](https://next-intl.dev/) (i18n)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Axios](https://axios-http.com/)

### Backend (planned / integration)

- [ASP.NET Core](https://learn.microsoft.com/aspnet/core)
- C# / .NET 8+
- REST/GraphQL APIs
- SQL Server
- Docker (containerization)

---

## 📂 Project Structure (Frontend)

```txt
app/
  [locale]/
    layout.tsx      # Per-locale layout (i18n, theme, header/footer)
    page.tsx        # Home (Hero, About, Skills, Projects, Experience)
  api/
    contact/
      route.ts      # Contact endpoint (Next API, optional)
  layout.tsx        # Root layout (initial shell)
  globals.css       # Global styles / Tailwind v4 tokens

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
    index.ts        # Types: Project, Experience, Skill, etc.
  constants/
    projects.ts     # Project list (RioSaúde, INEA, VS, etc.)
    skills.ts
    experience.ts
    social.ts
    navigation.ts
  utils/
    cn.ts
    validators.ts   # Zod schemas (e.g. contact form)

messages/
  pt-BR.json
  en-US.json
