import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import { UserState } from "./userReducer";
import { reducer as reduxFormReducer } from "redux-form";
export interface AppState {
  user: UserState;
}

const rootReducer = combineReducers({
  form: reduxFormReducer,
  user: userReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
