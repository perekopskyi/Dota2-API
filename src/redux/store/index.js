import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer";
import thunk from "redux-thunk";

const configureStore = (initialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
};

export default configureStore;
