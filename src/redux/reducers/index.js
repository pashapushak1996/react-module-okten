import {combineReducers} from "redux";
import {usersReducer} from "./users-reducer";


export const mainReducer = combineReducers({usersReducer})