import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiAmazonaws,
  SiSupabase,
  SiFirebase,
  SiRedux,
  SiGit,
  SiDocker,
  SiBootstrap,
  SiMui,
  SiPrisma,
  SiFlutter,
  SiHeroku,
  SiTailwindcss,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export const skills = [
  {
    icon: SiTypescript,
    text: "TypeScript",
  },
  {
    icon: SiJavascript,
    text: "JavaScript",
  },
  {
    icon: SiReact,
    text: "React",
  },
  {
    icon: SiNextdotjs,
    text: "Next",
  },
  {
    icon: SiTailwindcss,
    text: "Tailwind",
  },
  {
    icon: SiHtml5,
    text: "HTML5",
  },
  {
    icon: SiCss3,
    text: "CSS3",
  },
  {
    icon: SiPython,
    text: "Python",
  },
];

export interface Project {
  title: string;
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Proyecto 1",
    description: "Consiste en un contenedor con tres de los mejores futbolistas del mundo con sus redes sociales, agregando un contador para las veces que se visitaba la red social",
    link: "https://github.com/Camilo1106/Tech_desarrolador",
  },
  {
    title: "Proyecto 2",
    description: "Es un carrusel de tres programadores, que contiene su imagen, una descripcion de lo que hace y sus redes sociales",
    link: "https://github.com/Camilo1106/Carrusel_tech",
  },
  {
    title: "Proyecto 3",
    description: "Taller de programacion, que constiene un menu de navegacion, la cual muestra un perfil profesional de la persona que lo desarrollo, un carrusel de los tres programadores, un menu de proyectos importantes que han realizado, ademas de tener una tabla con la informacion y redes sociales de los mejores clubes del mundo",
    link: "https://github.com/Camilo1106/taller-programacion-1",
  },
];

export interface WorkExperience {
  company: string;
  logo: string;
  position: string;
  description: string;
  years: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Company 3",
    logo: "/company-logo.png",
    position: "Company 3 Position",
    description: "Write briefly on your experience working at Company 3.",
    years: "Apr, 2022 - Aug, 2023",
  },
  {
    company: "Company 2",
    logo: "/company-logo.png",
    position: "Company 2 Position",
    description: "Write briefly on your experience working at Company 2.",
    years: "Jan, 2020 - Mar, 2022",
  },
  {
    company: "Company 1",
    logo: "/company-logo.png",
    position: "Company 1 Position",
    description: "Write briefly on your experience working at Company 1.",
    years: "Aug, 2018 - Sep, 2018",
  },
  {
    company: "Uni Name",
    logo: "/company-logo.png",
    position: "Student",
    description:
      "Write briefly about your university experience (degree, subject, etc.)",
    years: "Aug, 2015 - Jun, 2019",
  },
];

export const aboutYou = {
  name: "Camilo Hernandez",
  description:
    "Estudiante de sexto semestre de Ingeniería de Software en la Universidad Politécnico Grancolombiano, con pasión por la programación y el desarrollo de software. Actualmente participando en el bootcamp de Talento Tech como desarrollador full stack, adquiriendo habilidades en tecnologías de vanguardia para el desarrollo web.",
  yearsOfExperience: "1 Año",
  location: "Bogotá-Colombia",
  email: "camiloht1106@gmail.com",
};

export const logoText = "@Camilo_Hernandez";

export const marketingHeadlines = {
  mainHeadline: "Bienvenidos a mi portafolio.",
  subHeadline: "ingeniero de software",
};

export const websiteMetadata = {
  title: "Your Nam | Designation",
  description: "👋 Hey, Random Person here. Welcome to my portflio/blog.",
};
