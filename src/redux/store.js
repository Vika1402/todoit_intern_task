import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";
import { reducer } from "./task.redducer";
import { menuReducer } from "./menubarHide";

const rootReducer = combineReducers({ menu:menuReducer, todos:reducer });
const store = createStore(rootReducer, composeWithDevTools());
export default store;
