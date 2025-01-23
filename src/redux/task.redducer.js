import {
  ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  INCOMPLETE_TASK,
} from "./task.constant.js";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  todos: [
    { taskName: "plese add your task", taskId: "", taskCompleted: false },
  ],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const { data } = action.payload;
      return {
        ...state,
        todos: [
          ...state.todos,
          { taskName: data, taskId: uuidv4(), taskCompleted: false },
        ],
      };

    case DELETE_TASK:
      const { id } = action.payload;
      return {
        ...state,
        todos: state.todos.filter((data) => data.taskId !== id),
      };

    case COMPLETE_TASK:
      const { completed_id } = action.payload;
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.taskId === completed_id ? { ...todo, taskCompleted: true } : todo
        ),
      };
    case INCOMPLETE_TASK:
      const { incompleted_id } = action.payload;
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.taskId === incompleted_id
            ? { ...todo, taskCompleted: false }
            : todo
        ),
      };

    default:
      return state;
  }
};
