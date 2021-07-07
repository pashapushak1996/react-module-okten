import {CREATE_USER, DELETE_USER, EDIT_USER, SET_USER, SET_USERS, UPDATE_USER} from "../action-types";

export const setUsers = (payload) => ({type: SET_USERS, payload});
export const setUser = (payload) => ({type: SET_USER, payload});
export const deleteUser = (payload) => ({type: DELETE_USER, payload});
export const editUser = (payload) => ({type: EDIT_USER, payload});
export const updateUser = (payload) => ({type: UPDATE_USER, payload});
export const createUser = (payload) => ({type: CREATE_USER, payload});