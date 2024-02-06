import React, { useState } from "react";
import header from "../assets/header.png";
import mifoto from "../assets/developer.jpeg";
import curriculum from "../assets/CV-FrancoGarcia.pdf";
import { AiOutlineFilePdf } from "react-icons/ai";
import { email } from "./informacion";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
const Home = () => {
  const [copiado, setCopiado] = useState(false);
  const copy = () => {
    setCopiado(!copiado);
  };
  return (
    <div className="h-screen w-screen overflow-hidden ">
      <img src={header} alt="header" className="w-screen md:hidden " />
      <div className="md:h-20 bg-[#2B2B29] mb-[20px]  min-[700px]:hidden"></div>
      <img
        src={mifoto}
        alt="franco"
        className=" absolute left-[50%] ml top-[130px] rounded-50 sm:w-[200px] m-auto md:left-[20%] md:static "
      />
      <div className=" absolute  xl:left-[-20px] xl:text-[40px] xl:top-[200px] md:left-[0] md:w-screen p-8 ml-6 md:static left-[20%] top-[40%] w-[619px] h-[250px] text-black text-[64px] font-normal">
        <p className="sm:text-[25px] md:text-[25px]">
          Hola! Soy Franco García, Desarrollador FullStack
        </p>
      </div>
      <div className=" mt-0 md:mt-[-100px] lg: mt-[300px] xl: mt-[250px] ">
        <a
          href={curriculum}
          target="_blank"
          className="flex items-center justify-center gap-2 m-auto w-[200px] text-white bg-[#2B2B29] rounded-full hover:bg-[white] border-2 border-[#2B2B29] hover:text-black"
        >
          <label>Descargar CV</label>
          <AiOutlineFilePdf size={40} />
        </a>
        <div
          className={
            !copiado
              ? "mt-3 m-auto w-[300px] rounded-full items-center border border-black rounded-full "
              : "mt-3 m-auto w-[300px] rounded-full items-center border border-[#00D52D] bg-[#2B2B29] rounded-full"
          }
        >
          <CopyToClipboard text={email} title="Copiar">
            {!copiado ? (
              <div
                className=" flex justify-around items-center cursor-pointer"
                onClick={copy}
              >
                <p>{email}</p>
                <FaCopy size={40} />
              </div>
            ) : (
              <div
                className=" flex justify-center gap-2 items-center cursor-pointer text-white"
                onClick={copy}
              >
                <p className="">COPIADO!</p>
                <FaCheck size={40} className="" />
              </div>
            )}
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
};

export default Home;
