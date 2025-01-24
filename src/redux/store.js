import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";
import { menuReducer } from "./menubarHide";
import { reducer } from "./task.redducer";


const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    console.error("Failed to load state from localStorage:", error);
    return undefined;
  }
};


const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (error) {
    console.error("Failed to save state to localStorage:", error);
  }
};


const preloadedState = loadStateFromLocalStorage();

// Combine reducers
const rootReducer = combineReducers({
  menu: menuReducer,
  todos: reducer,
});

// Create store with middlewares and preloaded state
const store = createStore(
  rootReducer,
  preloadedState,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

// Subscribe to store updates and save state to localStorage
store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

export default store;
