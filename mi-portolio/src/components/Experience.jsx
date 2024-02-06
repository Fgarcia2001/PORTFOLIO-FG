import React from "react";
import { tecnologias } from "./informacion";
const Experience = () => {
  return (
    <div
      name="Experiencia"
      className="h-screen w-full flex flex-col justify-center items-center"
    >
      <h2 className="font-semibold text-[40px]">Experiencia</h2>
      <div className="w-screen content-center grid-cols-3 gap-5 grid mt-[5%] pt-[10%] pb-[10%] bg-[#2B2B29] p-12">
        {tecnologias.map((t) => (
          <div key={t.name} className="flex justify-center items-center ">
            <img src={t.image} alt={t.name} className="w-[100px] h-[100px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
