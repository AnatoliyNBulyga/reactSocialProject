import {applyMiddleware, combineReducers, createStore} from "redux";
import sidebarReducer from "./sidebarReducer";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import usersReducer from "./UsersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as FormReducer } from "redux-form";
import appReducer from "./appReducer";

let reducers = combineReducers({
    sidebar: sidebarReducer,
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: FormReducer,
    app: appReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;