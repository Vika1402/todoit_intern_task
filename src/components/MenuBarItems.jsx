import React from "react";
import { CgBell, CgRepeat } from "react-icons/cg";
import { FaPlus, FaStar } from "react-icons/fa";
import { GrEmptyCircle } from "react-icons/gr";
import { MdDateRange } from "react-icons/md";
import { useSelector } from "react-redux";

function MenuBarItems() {
  const hideMenu = useSelector((state) => state.menu.menuHide);
  const darkModeRedux = useSelector((state) => state.menu.darkMode);
  return (
    <div
      className={`${
        hideMenu
          ? "w-[100%] h-[100vh] mt-10 right-0  text-gray-800 py-2 rounded-lg"
          : "hidden w-[100%] h-[100vh] mt-10 right-0  py-2  rounded-lg"
      } ${
        darkModeRedux
          ? "bg-green-100 text-gray-800  rounded-lg"
          : "bg-black text-white  rounded-lg"
      }`}
    >
      <ul className="flex flex-col mx-4 mt-5 gap-3 text-nowrap px-6">
        <li className="flex justify-between py-4 items-center  px-4 ">
          <span className="flex justify-between text-sm space-x-4 ">
            <span>
              <GrEmptyCircle />
            </span>
            <span>Current task</span>
          </span>

          <span className="ml-2">
            <FaStar />
          </span>
        </li>
        <li className="flex justify-between py-4 px-4  items-center">
          <span className="flex justify-between text-sm  space-x-4">
            <span>
              <FaPlus />
            </span>
            <span>Add step</span>
          </span>
        </li>
        <li className="flex justify-between py-4 px-4  items-center">
          <span className="flex justify-between text-sm  space-x-4">
            <span>
              <CgBell />
            </span>
            <span>Set Reminder</span>
          </span>
        </li>
        <li className="flex justify-between py-4 px-4 items-center">
          <span className="flex justify-between text-sm  space-x-4">
            <span>
              <MdDateRange />
            </span>
            <span>Add due Date</span>
          </span>
        </li>
        <li className="flex justify-between py-4 px-4 items-center">
          <span className="flex justify-between text-sm  space-x-4">
            <span>
              <CgRepeat />
            </span>
            <span>Repeat</span>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default MenuBarItems;
