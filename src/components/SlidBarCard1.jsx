import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaRegPaperPlane, FaRegStar } from "react-icons/fa";
import { IoTodayOutline } from "react-icons/io5";
import { LuNotepadText } from "react-icons/lu";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { useSelector } from "react-redux";

function SlidBarCard1() {
  const darkModeRedux = useSelector((state) => state.menu.darkMode);
  return (
    <div
      className={
        darkModeRedux
          ? "mx-3 bg-white py-4 rounded-md "
          : "mx-3 bg-black text-white py-4 rounded-md "
      }
    >
      <ul className="flex flex-col p-3 space-y-4 text-lg">
        <li className="flex space-x-4 items-center ">
          <span>
            <LuNotepadText />
          </span>
          <a>All Task</a>
        </li>
        <li className="flex space-x-4 items-center">
          <span>
            <IoTodayOutline />
          </span>
          <a>Today</a>
        </li>
        <li className="flex space-x-4 items-center">
          <span>
            <FaRegStar />
          </span>
          <a>Important</a>
        </li>
        <li className="flex space-x-4 items-center">
          <span>
            <FaRegPaperPlane />
          </span>
          <a>Planned</a>
        </li>
        <li className="flex space-x-4 items-center">
          <span>
            <MdOutlineAssignmentInd />
          </span>
          <a>Assign to me </a>
        </li>
      </ul>
    </div>
  );
}

export default SlidBarCard1;
