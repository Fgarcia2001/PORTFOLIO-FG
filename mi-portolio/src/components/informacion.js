import formula1 from "../assets/formula1Project.jpeg";

import globalshapers from "../assets/globalshapers.jpeg";

import portfolio from "../assets/proyectoPortfolio.jpeg";

import react from "../assets/tecnologias/react1.png";

import redux from "../assets/tecnologias/redux1.png";

import javascript from "../assets/tecnologias/jsjpg.jpg";

import html from "../assets/tecnologias/html5.webp";

import css from "../assets/tecnologias/css.png";

import tailwind from "../assets/tecnologias/tailwind.png";

import nodeExpress from "../assets/tecnologias/nodeExpress.png";

import postgresql from "../assets/tecnologias/postgresql.png";

import sequelize from "../assets/tecnologias/sequelize.png";

import git from "../assets/tecnologias/git.png";

import gitHub from "../assets/tecnologias/github.png";
/*
import scrum from "../assets/tecnologias/scrum.jpeg"; */

export const linkedin = "https://www.linkedin.com/in/francogarcia2001/";
export const githubLink = "https://github.com/Fgarcia2001";
export const email = "franco2001garcia@gmail.com";

const projects = [
  {
    name: "Formula1",
    description:
      "Aplicación full stack web dedicada a corredores de Formula 1, permite a los usuarios explorar y descubrir información sobre diferentes corredores a través de una interfaz intuitiva. Incluso si no están los puedes crear!",
    image: formula1,
    linkRepositorio: "https://github.com/Fgarcia2001/PI-DRIVERS",
    linkDeploy: "https://drivers-f1.vercel.app/",
    linkYoutube: "https://www.youtube.com/watch?v=9fklEkoyIG4&t=84s",
  },
  {
    name: "Globalshapers",
    description:
      " SPA para la ONG GlobalShapers de Córdoba donde el cliente puede gestionar la informacion de sus miembros, publicaciones, donaciones y proyectos a traves de un dashboard de administrador.",
    image: globalshapers,
    linkRepositorio: "https://github.com/GlobalShapersCordoba/FRONT-GSC",
    linkDeploy: "https://react-deploy-85351.web.app",
    linkYoutube: "https://www.youtube.com/watch?v=N-W9pibeTWw",
  },
  {
    name: "Porfolio",
    description:
      "En mi portfolio se podra saber un poco de mi pasion por el desarrollo web, proyectos, experiencias y mucho mas!",
    image: portfolio,
    linkRepositorio: "https://github.com/Fgarcia2001/MI-PORTFOLIO",
    linkDeploy: "#",
    linkYoutube: "",
  },
];

const tecnologias = [
  {
    name: "Javascript",
    image: javascript,
  },
  {
    name: "React",
    image: react,
  },
  {
    name: "Redux",
    image: redux,
  },
  {
    name: "html",
    image: html,
  },
  {
    name: "css",
    image: css,
  },
  {
    name: "tailwind",
    image: tailwind,
  },
  {
    name: "nodeExpress",
    image: nodeExpress,
  },
  {
    name: "postgresql",
    image: postgresql,
  },
  {
    name: "sequelize",
    image: sequelize,
  },
  {
    name: "git",
    image: git,
  },
  {
    name: "github",
    image: gitHub,
  },
  {
    name: "Scrum",
    image: "",
  },
];
const links = [
  {
    link: "Sobre Mi",
    id: 1,
  },
  {
    link: "Proyectos",
    id: 2,
  },
  {
    link: "Experiencia",
    id: 3,
  },
  {
    link: "Contacto",
    id: 4,
  },
];
export { projects, tecnologias, links };
