import React, { useState } from "react";
import { LuNotepadText } from "react-icons/lu";
import { IoTodayOutline } from "react-icons/io5";
import { FaPlus, FaRegPaperPlane, FaRegStar } from "react-icons/fa";
import { MdDateRange, MdOutlineAssignmentInd } from "react-icons/md";
import { IoMdAlert } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";

import { FaSortDown } from "react-icons/fa";
import ChartFile from "../utility/ChartFile";
import { FaStar } from "react-icons/fa";

import { GrEmptyCircle } from "react-icons/gr";
import { CgBell, CgRepeat } from "react-icons/cg";
import AddTask from "../components/AddTask";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../redux/task.actions";
import CurrentTask from "../components/CurrentTask";
import CompletedTask from "../components/CompletedTask";
import MenuBarItems from "../components/MenuBarItems";
import SlidBarCard1 from "../components/SlidBarCard1";
import SlidBarCard2 from "../components/SlidBarCard2";
function Home() {
  const taskData = useSelector((state) => state.todos.todos);
  const completed = taskData.filter(
    (item) => item.taskCompleted === true
  ).length;
  const incomplete = taskData.filter(
    (item) => item.taskCompleted === false
  ).length;
  const [hide, setHide] = useState(true);
  const darkModeRedux = useSelector((state) => state.menu.darkMode);
  return (
    <div className="flex justify-between  mt-20">
      <div
        className={
          darkModeRedux
            ? "sticky bg-green-100 mt-10  flex-col space-y-3 hidden md:block"
            : "sticky top-0 left-0  bg-gray-800  mt-10 flex-col space-y-3 hidden md:block"
        }
      >
        <div className="rounded-full absolute -top-10 left-25  w-full justify-center items-center">
          <img
            className=" w-25 rounded-full object-cover border-2 border-gray-200"
            src="https://img.freepik.com/free-psd/contact-icon-illustration-isolated_23-2151903337.jpg?ga=GA1.1.2024936588.1734079803&semt=ais_hybrid "
            alt=""
          />
        </div>
        <div className="mt-16 w-full text-center uppercase font-semiold text-lg">
          Hey, mr.vikas
        </div>

        <SlidBarCard1 />
        <SlidBarCard2 />

        <div
          className={
            darkModeRedux
              ? "mx-3 bg-white text-gray-800 rounded-md"
              : "mx-6 w-72 bg-black text-white  rounded-md"
          }
        >
          <ul className="flex flex-col p-3 space-y-4 text-sm">
            <li className="flex  justify-between items-center">
              <p>
                Today Task <br />
                <span className="text-xl">{completed + incomplete}</span>
              </p>

              <span>
                <IoMdAlert className="text-xl" />
              </span>
            </li>
            <li>
              <ChartFile />
            </li>
          </ul>
        </div>
      </div>

      <div className=" mt-8 transition-all duration-500 w-full h-[100vh]">
        <span
          className={
            darkModeRedux
              ? "flex bg-white text-gray-800 items-center text-xl"
              : "flex bg-gray-800 text-white items-center text-xl"
          }
        >
          <span className="mx-4 text-orange-400">Todo</span>
          <span
            onClick={() => setHide(!hide)}
            className={`cursor-pointer hover:scale-110 ${
              hide ? "rotate-180" : ""
            }`}
          >
            <FaSortDown />
          </span>
        </span>

        {/* Add Task Section */}
        <div className={hide ? "hidden" : "block"}>
          <AddTask />
        </div>

        {/* current task here  */}
        <div>
          <CurrentTask />
        </div>

        {/* completd task here  */}
        <div>
          <CompletedTask />
        </div>
      </div>
      <div className="">
        <MenuBarItems />
      </div>
    </div>
  );
}

export default Home;
