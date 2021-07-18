import {useEffect, useState} from "react";
import {deleteTodo, getTodoById, getTodos} from "../../services";
import {useDispatch} from "react-redux";
import {setTodo, setTodos, todoSuccess} from "../../redux/reducer";
import styles from './Todo.module.css';


export const Todo = ({todo, setIsEditForm}) => {

    const dispatch = useDispatch();


    const [checked, setChecked] = useState(todo.completed);

    const todoDelete = async (todoId) => {
        const {message} = await deleteTodo(todoId);
        alert(message.replace(' ', ` ${ todo.title } `))
        const todos = await getTodos();
        dispatch(setTodos({todos}));
    };

    const successTodo = (checked) => {
        setChecked(checked);
        dispatch(todoSuccess(checked, todo.id));
    };


    const editTodo = async () => {
        setIsEditForm(true);
        const todoById = await getTodoById(todo.id);
        dispatch(setTodo(todoById));
    };


    useEffect(() => {
        setChecked(todo.completed);
    }, [todo.completed])


    return (
        <div key={ todo.id } className={ todo.completed ? [styles.checked, styles.success].join(' ') : '' }>
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
            <input type="checkbox"
                   onChange={ ({target: {checked}}) => successTodo(checked) }
                   checked={ checked }/>

            <button onClick={ () => todoDelete(todo.id) }>
                Delete todo
            </button>
            <button onClick={ () => editTodo() }>
                Edit todo
            </button>
            <hr/>
        </div>
    )
}

