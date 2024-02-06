import React, { useState } from "react";
import Menu from "./Menu";
import { links } from "./informacion";
import { Link } from "react-scroll";
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={[
        "absolute",
        !isMenuOpen
          ? " z-[300] absolute w-[69px] p-10 left-4 h-[47px]"
          : "  items-center justify-around flex flex-col z-[300] fixed w-screen h-screen bg-[#2B2B29]",
      ]}
    >
      <Menu
        isMenuOpen={isMenuOpen}
        handleMenu={() => setIsMenuOpen(!isMenuOpen)}
      />
      {isMenuOpen &&
        links.map((l) => (
          <Link
            className="text-[30px] text-white cursor-pointer "
            onClick={() => setIsMenuOpen(false)}
            to={l.link}
            key={l.id}
            smooth={500}
          >
            {l.link}
          </Link>
        ))}
    </div>
  );
};

export default NavBar;
