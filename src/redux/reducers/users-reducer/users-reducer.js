//Action types
const SET_USERS = "SET_USERS";
const SET_USER = "SET_USER";
const DELETE_USER = "DELETE_USER";
const EDIT_USER = "EDIT_USER";


//Action creators
export const setUsers = (payload) => ({type: SET_USERS, payload});
export const setUser = (payload) => ({type: SET_USER, payload});
export const deleteUser = (payload) => ({type: DELETE_USER, payload});
export const editUser = (payload) => ({type: EDIT_USER, payload});

const initialState = {
    users: [],
    user: null,
    isUserVisible: false,
    isEditUser: false,
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {...state, users: action.payload}
        }
        case SET_USER: {
            return {...state, user: action.payload, isUserVisible: true}
        }
        case DELETE_USER: {
            return {
                ...state,
                users: state.users.filter((user) => user.id !== action.payload),
                isUserVisible: false,
                user: null
            }
        }
        case EDIT_USER: {
            return {
                ...state,
                isEditUser: !state.isEditUser,
            }
        }

        default:
            return state;
    }
}