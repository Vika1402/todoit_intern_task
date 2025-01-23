import {
  ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  INCOMPLETE_TASK,
} from "./task.constant";

const addtask = (data) => {
  return {
    type: ADD_TASK,
    payload: { data },
  };
};

const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: { id },
  };
};

const taskcompletd = (completed_id) => {
  return {
    type: COMPLETE_TASK,
    payload: { completed_id },
  };
};
const taskincompletd = (incompleted_id) => {
  return {
    type: INCOMPLETE_TASK,
    payload: { incompleted_id },
  };
};
export { addtask, deleteTask, taskcompletd, taskincompletd };
