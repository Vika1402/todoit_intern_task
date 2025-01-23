import React, { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import { IoTodayOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addtask } from "../redux/task.actions";
import toast, { Toaster } from "react-hot-toast";
function AddTask() {
  const darkModeRedux = useSelector((state) => state.menu.darkMode);
  const dispatch = useDispatch();
  const [inputTask, setInputTask] = useState("");

  const addTaskHandler = (inputTask) => {
    if (inputTask === "") {
      return toast.error("Please Add Task!!");
    }
    const taskadded = dispatch(addtask(inputTask));
    if (taskadded) {
      toast.success("Your Task Added Successfully");
    }
    setInputTask("");
  };

  return (
    <div
      className={
        darkModeRedux
          ? "mx-4 bg-green-100 text-black px-1 mt-1 rounded-md shadow-xl"
          : "mx-4 bg-black text-white px-1 mt-1 rounded-md shadow-xl"
      }
    >
      <Toaster />
      <input
        onChange={(e) => setInputTask(e.target.value)}
        type="text"
        value={inputTask}
        placeholder="Add Task"
        className="w-full  py-3 mt-6 outline-0 text-lg mx-4"
      />
      <div className="flex justify-between mt-3 mx-4 items-center py-3">
        <div className="flex space-x-6">
          <FaRegBell />
          <GrUpdate />
          <IoTodayOutline />
        </div>
        <div>
          <button
            onClick={() => addTaskHandler(inputTask)}
            className="uppercase px-6 py-2 bg-green-400/80 text-white rounded-lg"
          >
            add task
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
