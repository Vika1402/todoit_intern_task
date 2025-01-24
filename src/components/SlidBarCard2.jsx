import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";

function SlidBarCard2() {
  const darkModeRedux = useSelector((state) => state.menu.darkMode);
  return (
    <div
      className={
        darkModeRedux
          ? "mx-6 bg-white py-4 rounded-md"
          : "mx-6 w-72 bg-black py-4 rounded-md"
      }
    >
      <ul className="flex flex-col p-3 space-y-4 text-lg">
        <li className="flex space-x-4 items-center">
          <span>
            <AiOutlinePlus />
          </span>
          <span>All List</span>
        </li>
      </ul>
    </div>
  );
}

export default SlidBarCard2;
