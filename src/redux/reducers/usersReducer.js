const initialState = {
    users: [],
    user: null
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USERS": {
            return {...state, users: action.payload};
        }
        case "ADD_USER": {
            return {...state, user: action.payload};
        }
        default:
            return state;
    }
}