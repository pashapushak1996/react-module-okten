//Action types
import {updateTodo} from "../services";

const SET_TODOS = "SET_TODOS";
const SET_TODO = "SET_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const TODO_COMPLETE = "TODO_COMPLETE";

//Action creators
export const setTodos = (payload) => ({type: SET_TODOS, payload});
export const setTodo = (payload) => ({type: SET_TODO, payload});
export const updateTodoAction = (payload) => ({type: UPDATE_TODO, payload});
export const todoComplete = (payload) => ({type: TODO_COMPLETE, payload});

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
        case TODO_COMPLETE: {
            return {
                ...state, todos: [...state.todos.map((todo) => {
                    if (todo.id === action.payload.id) {
                        return {...action.payload.updatedTodo}
                    }
                    return todo;
                })]
            }
        }
        case UPDATE_TODO: {
            return {
                ...state, todos: [...state.todos.reduce((acc, curr) => {
                    if (curr.id === action.payload.id) {
                        acc.push({...action.payload.updatedTodo});
                        return acc;
                    }
                    acc.push(curr);
                    return acc;
                }, [])]
            }
        }
        default:
            return state;
    }
};

//Thunk
export const updateTodoById = (id, data) => async (dispatch) => {
    const updatedTodo = await updateTodo(id, {...data});
    dispatch(updateTodoAction({id, updatedTodo}));
};

export const todoSuccess = (checked, id) => async (dispatch) => {
    const updatedTodo = await updateTodo(id, {
        completed: checked
    });
    dispatch(todoComplete({id, updatedTodo}));
};