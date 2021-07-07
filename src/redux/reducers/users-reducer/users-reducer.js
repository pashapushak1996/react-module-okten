import {
    SET_USERS,
    SET_USER,
    DELETE_USER,
    EDIT_USER,
    UPDATE_USER,
    CREATE_USER
} from "../../action-types";


const initialState = {
    users: [],
    user: null,
    isUserVisible: false,
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
        case UPDATE_USER: {
            return {
                ...state, users: state.users.reduce((acc, curr) => {
                    if (curr.id === action.payload.id) {
                        curr = action.payload.user
                    }
                    acc.push(curr);
                    return acc;
                }, [])
            }
        }
        case CREATE_USER: {
            return {
                ...state, users: [...state.users, action.payload]
            }
        }

        default:
            return state;
    }
}