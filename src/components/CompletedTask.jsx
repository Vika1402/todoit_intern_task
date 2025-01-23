import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineDeleteOutline, MdOutlinePending } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, taskincompletd } from "../redux/task.actions";

function CompletedTask() {
  const [hideDelete, setHideDelete] = useState(true);
  const darkModeRedux = useSelector((state) => state.menu.darkMode);
  const taskData = useSelector((state) => state.todos.todos);

  const dispatch = useDispatch();
  return (
    <ul className="flex flex-col mx-4 mt-5 gap-y-3">
      <span className="text-2xl  font-semibold py-2">Completed task</span>
      {taskData?.length > 0 ? (
        taskData
          .filter((item) => item.taskCompleted === true)
          .map((item) => {
            return (
              <li
                key={item.taskId}
                className={
                  darkModeRedux
                    ? "flex justify-between py-4 px-4 shadow-sm"
                    : "flex justify-between bg-black/40 text-white py-4 px-4 shadow-sm"
                }
              >
                <span className="flex items-center text-lg  space-x-4">
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
                {item.taskCompleted ? (
                  <span onClick={() => dispatch(taskincompletd(item.taskId))}>
                    <FaStar className="text-green-400 text-xl" />
                  </span>
                ) : (
                  <span>
                    <FaStar className="text-yellow-500" />
                  </span>
                )}
              </li>
            );
          })
      ) : (
        <div className="text-xl text-red-400">No task Completed </div>
      )}
    </ul>
  );
}

export default CompletedTask;
