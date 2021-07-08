import {useState} from "react";
import {deleteTodo, getTodoById, getTodos} from "../../services";
import {useDispatch} from "react-redux";
import {setTodo, setTodos} from "../../redux/reducer";

export const Todo = ({todo, setIsEditForm}) => {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(todo.completed);

    const todoDelete = async (todoId) => {
        const {message} = await deleteTodo(todoId);
        alert(message.replace(' ', ` ${ todo.title } `))
        const todos = await getTodos();
        dispatch(setTodos({todos}));
    }
    const editUser = async () => {
        setIsEditForm(true);
        const todoById = await getTodoById(todo.id);
        dispatch(setTodo(todoById));
    }

    return (
        <div key={ todo.id }>
            <div>
                <b>Title:</b>
                <span>{ todo.title }</span>
            </div>
            <div>
                <b>Description:</b>
                <span>{ todo.description }</span>
            </div>
            <div>
                <b>Created:</b>
                <span>{ new Date(todo.createdAt).toDateString() }</span>
            </div>
            <input type="checkbox" onChange={ ({target: {checked}}) => {
                setChecked(checked)
            } } value={ checked }/>
            <button onClick={ () => {
                todoDelete(todo.id);
            } }>Delete todo
            </button>
            <button onClick={ () => {
                editUser();
            } }>
                Edit todo
            </button>
            <hr/>
        </div>
    )
}

