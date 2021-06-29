export const ADD_USERS = "ADD_USERS";
export const ADD_POSTS = "ADD_POSTS";
export const ADD_COMMENTS = "ADD_COMMENTS";
export const ADD_USER = "ADD_USER";


export const setUsers = (payload) => ({
    type: ADD_USERS, payload
});
export const setPosts = (payload) => ({
    type: ADD_POSTS, payload
});
export const setComments = (payload) => ({
    type: ADD_COMMENTS, payload
});

export const setUser = (payload) => ({
    type: ADD_USER, payload
});


const initialState = {
    users: [],
    posts: [],
    comments: [],
    user: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_USERS: {
            return {...state, users: action.payload}
        }
        case ADD_COMMENTS: {
            return {...state, comments: [state.comments, ...action.payload]}
        }
        case ADD_POSTS: {
            return {...state, posts: action.payload}
        }
        case ADD_USER: {
            return {...state, user: action.payload}
        }
        default :
            return state;
    }
}

export {
    initialState,
    reducer
}