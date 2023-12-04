import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import foundItemReducer from "./reducers/foundItemReducer";

const rootReducer = combineReducers({
  foundItem: foundItemReducer,
  // ... (other reducers if any)
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

