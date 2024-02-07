import React from "react";

const Menu = ({ isMenuOpen, handleMenu }) => {
  return (
    <div
      onClick={handleMenu}
      className="hidden w-[69px] left-[20px]  h-[47px]  cursor-pointer md:block "
    >
      <div
        className={`w-[69px] h-[9px] left-0 top-[19px] absolute bg-neutral-500
            ${isMenuOpen && "transition-transform rotate-[45deg] mt-5 ml-2"}`}
      />

      {!isMenuOpen && (
        <div className="w-[69px] h-[9px] left-0 top-[38px] absolute bg-zinc-300" />
      )}

      <div
        className={`
            w-[69px] h-[9px] left-0 top-[60px] absolute bg-zinc-300 ${
              isMenuOpen &&
              "transition-transform rotate-[-45deg] left-2 top-[100px]"
            }
          `}
      />
    </div>
  );
};

export default Menu;
