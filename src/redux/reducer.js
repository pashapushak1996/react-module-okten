//Action types
const SET_TODOS = "SET_TODOS";
const SET_TODO = "SET_TODO";

//Action creators
export const setTodos = (payload) => ({type: SET_TODOS, payload});
export const setTodo = (payload) => ({type: SET_TODO, payload});


const initialState = {
    todos: [],
    todo: null
};


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOS: {
            return {
                ...state,
                todos: action.payload.todo ? [...state.todos, {...action.payload.todo}] : action.payload.todos
            };
        }
        case SET_TODO: {
            return {
                ...state, todo: action.payload
            }
        }
        default:
            return state;
    }
};