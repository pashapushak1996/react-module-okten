import {useEffect, useState} from "react";
import {getTodos} from "./services";
import {setTodos, updateTodoById} from "./redux/reducer";
import {useDispatch, useSelector} from "react-redux";
import {TodoList} from "./components/todolist/TodoList";
import {TodoCreateForm} from "./components/create-todo-form/TodoCreateForm";
import {EditTodoForm} from "./components/edit-todo-form/EditTodoForm";


const App = () => {


    const [isEditForm, setIsEditForm] = useState('');

    const [isLoading, setIsLoading] = useState(false);


    const {todos} = useSelector((state) => state);

    const dispatch = useDispatch();


    const fetchData = async () => {
        try {
            setIsLoading(true);
            const todos = await getTodos();
            dispatch(setTodos({todos}));
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
    }

    const updateTodo = async (id, data) => {
        dispatch(updateTodoById(id, data));
    }


    useEffect(() => {
        fetchData();
    }, []);


    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <TodoCreateForm/>
            { isEditForm &&
            <EditTodoForm setIsEditForm={ setIsEditForm }
                          updateTodo={ updateTodo }/> }
            <TodoList fetchData={ fetchData }
                      setIsEditForm={ setIsEditForm }
                      todos={ todos }/>
        </div>
    );
}

export default App;