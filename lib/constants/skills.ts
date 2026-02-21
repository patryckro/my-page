import { Skill, SkillGroup } from '@/lib/types';
import { ElementType } from 'react';
import { DiMsqlServer, DiVisualstudio } from 'react-icons/di';
import { TbBrandCSharp, TbApi  } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { FaAws, FaGithub } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";
import { 
  SiDotnet, 
  SiGraphql, 
  SiReact, 
  SiAngular,
  SiTypescript, 
  SiJavascript, 
  SiNextdotjs, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiFlutter, 
  SiDart, 
  SiExpo, 
  SiPostgresql, 
  SiMongodb, 
  SiSqlite, 
  SiGit, 
  SiGitlab,
  SiDocker, 
  SiGithubactions,
  SiKubernetes,
  SiRedhatopenshift,
  SiGooglecloudstorage
} from 'react-icons/si';

export const skillsIcons: Record<string, ElementType> = {
  csharp: TbBrandCSharp,
  aspnet: SiDotnet,
  dotnet: SiDotnet,
  entityframework: SiDotnet, 
  api: TbApi,
  graphql: SiGraphql,
  react: SiReact,
  angular: SiAngular,
  typescript: SiTypescript,
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  html: SiHtml5,
  css: SiCss3,
  tailwind: SiTailwindcss,
  mobile: SiReact,
  flutter: SiFlutter,
  dart: SiDart,
  expo: SiExpo,
  sqlserver: DiMsqlServer,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  sqlite: SiSqlite,
  azure: VscAzure,
  aws: FaAws,
  git: SiGit,
  github: FaGithub,
  gitlab: SiGitlab,
  docker: SiDocker,
  kubernetes: SiKubernetes,
  ocp: SiRedhatopenshift,
  gcp: SiGooglecloudstorage,
  githubactions: SiGithubactions,
  visualstudio: DiVisualstudio,
  vscode: BiLogoVisualStudio,
};

export const skills: Skill[] = [
  // Backend
  {
    name: 'C#',
    category: 'backend',
    icon: skillsIcons['csharp'],
    proficiency: 95,
    yearsOfExperience: 5,
  },
  {
    name: 'ASP.NET Core',
    category: 'backend',
    icon: skillsIcons['dotnet'],
    proficiency: 95,
    yearsOfExperience: 5,
  },
  {
    name: 'Entity Framework Core',
    category: 'backend',
    icon: skillsIcons['dotnet'],
    proficiency: 90,
    yearsOfExperience: 5,
  },
  {
    name: 'Web API',
    category: 'backend',
    icon: skillsIcons['api'],
    proficiency: 95,
    yearsOfExperience: 5,
  },
  {
    name: 'GraphQL',
    category: 'backend',
    icon: skillsIcons['graphql'],
    proficiency: 80,
    yearsOfExperience: 2,
  },
  
  // Frontend
  {
    name: 'React',
    category: 'frontend',
    icon: skillsIcons['react'],
    proficiency: 90,
    yearsOfExperience: 4,
  },
  {
    name: 'Angular',
    category: 'frontend',
    icon: skillsIcons['angular'],
    proficiency: 85,
    yearsOfExperience: 4,
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    icon: skillsIcons['typescript'],
    proficiency: 90,
    yearsOfExperience: 5,
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    icon: skillsIcons['javascript'],
    proficiency: 95,
    yearsOfExperience: 6,
  },
  {
    name: 'Next.js',
    category: 'frontend',
    icon: skillsIcons['nextjs'],
    proficiency: 85,
    yearsOfExperience: 2,
  },
  {
    name: 'HTML5',
    category: 'frontend',
    icon: skillsIcons['html'],
    proficiency: 95,
    yearsOfExperience: 6,
  },
  {
    name: 'CSS3',
    category: 'frontend',
    icon: skillsIcons['css'],
    proficiency: 90,
    yearsOfExperience: 6,
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    icon: skillsIcons['tailwind'],
    proficiency: 90,
    yearsOfExperience: 2,
  },
  
  // Mobile
  {
    name: 'React Native',
    category: 'mobile',
    icon: skillsIcons['react'],
    proficiency: 85,
    yearsOfExperience: 3,
  },
  {
    name: 'Flutter',
    category: 'mobile',
    icon: skillsIcons['flutter'],
    proficiency: 70,
    yearsOfExperience: 1,
  },
  {
    name: 'Dart',
    category: 'mobile',
    icon: skillsIcons['dart'],
    proficiency: 70,
    yearsOfExperience: 1,
  },
  {
    name: 'Expo',
    category: 'mobile',
    icon: skillsIcons['expo'],
    proficiency: 70,
    yearsOfExperience: 1,
  },
  
  // Database
  {
    name: 'SQL Server',
    category: 'database',
    icon: skillsIcons['sqlserver'],
    proficiency: 90,
    yearsOfExperience: 5,
  },
  {
    name: 'PostgreSQL',
    category: 'database',
    icon: skillsIcons['postgresql'],
    proficiency: 80,
    yearsOfExperience: 1,
  },
  {
    name: 'MongoDB',
    category: 'database',
    icon: skillsIcons['mongodb'],
    proficiency: 70,
    yearsOfExperience: 1,
  },
  {
    name: 'SQLite',
    category: 'database',
    icon: skillsIcons['sqlite'],
    proficiency: 80,
    yearsOfExperience: 2,
  },
  
  // Cloud
  {
    name: 'Azure',
    category: 'cloud',
    icon: skillsIcons['azure'],
    proficiency: 65,
    yearsOfExperience: 1,
  },
  {
    name: 'Openshift',
    category: 'cloud',
    icon: skillsIcons['ocp'],
    proficiency: 65,
    yearsOfExperience: 1,
  },
  {
    name: 'Google Cloud Platform',
    category: 'cloud',
    icon: skillsIcons['gcp'],
    proficiency: 65,
    yearsOfExperience: 1,
  },
  {
    name: 'Azure',
    category: 'cloud',
    icon: skillsIcons['azure'],
    proficiency: 75,
    yearsOfExperience: 1,
  },
  // {
  //   name: 'AWS',
  //   category: 'cloud',
  //   icon: skillsIcons['aws'],
  //   proficiency: 65,
  //   yearsOfExperience: 1,
  // },
  
  // Tools
  {
    name: 'Git',
    category: 'tools',
    icon: skillsIcons['git'],
    proficiency: 90,
    yearsOfExperience: 6,
  },
  {
    name: 'Git',
    category: 'tools',
    icon: skillsIcons['github'],
    proficiency: 90,
    yearsOfExperience: 6,
  },
  {
    name: 'GitLab',
    category: 'tools',
    icon: skillsIcons['gitlab'],
    proficiency: 90,
    yearsOfExperience: 4,
  },
  {
    name: 'GitHub Actions',
    category: 'tools',
    icon: skillsIcons['githubactions'],
    proficiency: 75,
    yearsOfExperience: 6,
  },
  {
    name: 'Docker',
    category: 'tools',
    icon: skillsIcons['docker'],
    proficiency: 80,
    yearsOfExperience: 4,
  },
  {
    name: 'Kubernetes',
    category: 'tools',
    icon: skillsIcons['kubernetes'],
    proficiency: 80,
    yearsOfExperience: 2,
  },
  {
    name: 'Visual Studio',
    category: 'tools',
    icon: skillsIcons['visualstudio'],
    proficiency: 95,
    yearsOfExperience: 5,
  },
  {
    name: 'VS Code',
    category: 'tools',
    icon: skillsIcons['vscode'],
    proficiency: 95,
    yearsOfExperience: 6,
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'backend',
    label: 'Backend',
    skills: skills.filter(s => s.category === 'backend'),
  },
  {
    category: 'frontend',
    label: 'Frontend',
    skills: skills.filter(s => s.category === 'frontend'),
  },
  {
    category: 'mobile',
    label: 'Mobile',
    skills: skills.filter(s => s.category === 'mobile'),
  },
  {
    category: 'database',
    label: 'Banco de Dados',
    skills: skills.filter(s => s.category === 'database'),
  },
  {
    category: 'cloud',
    label: 'Cloud',
    skills: skills.filter(s => s.category === 'cloud'),
  },
  {
    category: 'tools',
    label: 'Ferramentas',
    skills: skills.filter(s => s.category === 'tools'),
  },
];
