import React from "react";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="bg-[#2B2B29] w-screen h-20  flex items-center justify-around text-white">
      <div>©2024 Franco García</div>
      <div className="flex gap-2">
        <a href="https://www.linkedin.com/in/francogarcia2001/" target="_blank">
          <AiFillLinkedin size={30} />
        </a>
        <a href="https://github.com/Fgarcia2001" target="_blank">
          <AiFillGithub size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
