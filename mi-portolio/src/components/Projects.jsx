import React from "react";
import { projects } from "./informacion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
const Projects = () => {
  return (
    <div
      name="Proyectos"
      className=" w-screen flex items-center flex-col  mb-20"
    >
      <h2 className="font-semibold text-[40px]">Proyectos</h2>
      <div className="mt-10 gap-5 grid grid-cols-1 md:grid-cols-1 2xl:mt-10 gap-5 grid grid-cols-3 ">
        {projects.map((p) => (
          <div className="relative w-[300px] h-[300px] border-red-100 border-spacing-1 border p-2 bg-slate-500">
            <img src={p.image} alt="formula1" className="w-full h-full" />
            <span className="flex flex-col p-4 absolute backdrop-blur hover:backdrop-blur-[20px] inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p
                className={
                  p.name !== "Formula1"
                    ? "text-black font-bold"
                    : "text-white font-bold"
                }
              >
                {p.description}
              </p>
              <div className="flex mt-10">
                <a
                  href={p.linkRepositorio}
                  target="_blank"
                  className=" w-[30px] h-[30px] "
                >
                  <FontAwesomeIcon icon={faGithub} className="w-full h-full" />
                </a>
                <a
                  className="ml-4 w-[30px] h-[30px]"
                  href={p.linkDeploy}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faEye} className="w-full h-full" />
                </a>
                <a
                  href={p.linkYoutube}
                  target="_blank"
                  className="ml-4 w-[30px] h-[30px]"
                >
                  <FontAwesomeIcon icon={faYoutube} className="w-full h-full" />
                </a>
              </div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
