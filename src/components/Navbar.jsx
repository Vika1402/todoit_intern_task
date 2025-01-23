import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { CgMenuGridR } from "react-icons/cg";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { GiCrossMark } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { hidemenufn, toggleDarkModeFn } from "../redux/menubarHide";
function Navbar() {
  const hideMenu = useSelector((state) => state.menu.menuHide);
  const darkModeRedux = useSelector((state) => state.menu.darkMode);
  const dispatch = useDispatch();
  console.log(darkModeRedux);
  return (
    <div
      className={
        darkModeRedux
          ? "flex justify-between items-center py-6 fixed top-0 right-0 left-0 px-12 z-20 bg-white"
          : "flex  justify-between items-center py-6 fixed top-0 right-0 px-12 left-0 z-20 bg-gray-800 text-white"
      }
    >
      {/* left side */}
      <div className="flex gap-3 items-center">
        <IoMenu className=" text-xl lg:text-2xl" />
        <span className=" text-2xl font-semibold"> Tododoit</span>
      </div>
      {/* right side */}
      <div className="flex gap-3">
        <IoSearch className="text-lg lg:text-2xl" />
        {hideMenu ? (
          <GiCrossMark
            onClick={() => dispatch(hidemenufn())}
            className="text-lg lg:text-2xl"
          />
        ) : (
          <CgMenuGridR
            onClick={() => dispatch(hidemenufn())}
            className="text-lg lg:text-2xl"
          />
        )}

        {darkModeRedux ? (
          <MdDarkMode
            className="text-lg lg:text-2xl"
            onClick={() => dispatch(toggleDarkModeFn())}
          />
        ) : (
          <CiLight
            onClick={() => dispatch(toggleDarkModeFn())}
            className="text-lg lg:text-2xl"
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;
