import React from "react";
import { linkedin } from "./informacion";
import { githubLink } from "./informacion";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const About = () => {
  return (
    <div
      name="Sobre Mi"
      className="flex flex-col justify-center items-center h-screen w-screen mt-[50px]"
    >
      <h2 className="font-semibold text-[40px]">Sobre mi</h2>
      <div className="w-screen mt-[5%] pt-[10%] pb-[10%] bg-[#2B2B29] p-10">
        <p className="text-white">
          Hola, soy Franco! De Rosario, Santa Fé, Argentina. Inicié mi viaje en
          la programación durante mis estudios de Ingeniería en Sistemas,
          desarrollando una sólida base en lógica de programación. Mi interés
          por la creación de aplicaciones web surgió durante mi formación como
          Analista en Sistemas. En julio de 2023, me inscribí en el Bootcamp de
          "Soy Henry" donde obtuve mi certificado de Desarrollador Full-Stack y
          adquiri experiencia en metodologias como SCRUM donde destaqué por mi
          habilidad de resolver problemas y capacidad de comunicación en equipo.
        </p>
        <div className=" mt-10 flex justify-center gap-5  w-[100%] ">
          <div className="flex items-center justify-center w-[110px] bg-[white] rounded-md">
            <a
              href={linkedin}
              target="_blank"
              className="flex items-center gap-1"
            >
              <span>Linkedin</span>
              <AiFillLinkedin
                size={40}
                className="transform hover:rotate-[360deg] transition-transform duration-300"
              />
            </a>
          </div>
          <div className="flex items-center bg-[white] justify-center w-[110px] rounded-md">
            <a
              href={githubLink}
              target="_blank"
              className="flex items-center gap-1"
            >
              <span>Github</span>
              <AiFillGithub
                size={40}
                className="transform hover:rotate-[360deg] transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
