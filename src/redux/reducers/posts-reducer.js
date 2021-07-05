const initialState = {
    posts: [],
    post: null,
    userPosts: []
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_POSTS": {
            return {...state, posts: action.payload}
        }
        case "ADD_USER_POSTS": {
            return {...state, userPosts: action.payload}
        }
        default:
            return state;
    }
}