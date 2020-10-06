import { combineReducers } from "redux";

import authReducer from "./auth";
// объединение всех редюсеров
export default combineReducers({
    auth: authReducer,
})
