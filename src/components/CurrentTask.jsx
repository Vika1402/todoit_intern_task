import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineDeleteOutline, MdOutlinePending } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, taskcompletd } from "../redux/task.actions";

function CurrentTask() {
  const [hideDelete, setHideDelete] = useState(true);
  const darkModeRedux = useSelector((state) => state.menu.darkMode);
  const taskData = useSelector((state) => state.todos.todos);
  // console.log(taskData[0]);
  // console.log(taskData.length);
  const dispatch = useDispatch();

  return (
    <ul className="flex flex-col mx-4 mt-5 gap-y-3">
      <span className=" text-xl lg:text-2xl  font-semibold py-2">
        Your Today Task
      </span>

      {taskData?.length > 0 ? (
        taskData
          .filter((item) => item.taskCompleted === false)
          .map((item) => {
            return (
              <li
                key={item.taskId}
                className={
                  darkModeRedux
                    ? "flex justify-between py-4 px-4 shadow-sm"
                    : "flex justify-between bg-black/40 py-4 px-4 shadow-sm"
                }
              >
                <span className="flex items-center text-lg lg:text-xl  space-x-4">
                  <span
                    onClick={() =>
                      hideDelete ? setHideDelete(false) : setHideDelete(true)
                    }
                  >
                    <MdOutlinePending />
                  </span>
                  <span onClick={() => dispatch(deleteTask(item.taskId))}>
                    <MdOutlineDeleteOutline
                      className={hideDelete ? `hidden` : `visible`}
                    />
                  </span>
                  <span>{item.taskName}</span>
                </span>
                {!item.taskCompleted ? (
                  <span onClick={() => dispatch(taskcompletd(item.taskId))}>
                    <FaStar className="text-yellow-500 text-xl" />
                  </span>
                ) : (
                  <span>
                    <FaStar className="text-green-200 text-xl" />
                  </span>
                )}
              </li>
            );
          })
      ) : (
        <div className="text-xl text-red-400">No task Added </div>
      )}
    </ul>
  );
}

export default CurrentTask;
