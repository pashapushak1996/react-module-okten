import {combineReducers} from "redux";
import {usersReducer} from "./usersReducer";
import {postsReducer} from "./posts-reducer";

export const rootReducer = combineReducers({usersReducer, postsReducer});

