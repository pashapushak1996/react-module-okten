import {useEffect, useState} from "react";
import {createTodo, getTodos} from "./services";
import {setTodos} from "./redux/reducer";
import {useDispatch, useSelector} from "react-redux";
import {Todo} from "./components/todo/Todo";
import {TodoList} from "./components/todolist/TodoList";
import {TodoCreateForm} from "./components/create-todo-form/TodoCreateForm";
import {EditTodoForm} from "./components/edit-todo-form/EditTodoForm";


const App = () => {

    //todo зроюити редагування todo
    const [isEditForm, setIsEditForm] = useState('');

    const [isLoading, setIsLoading] = useState(false);


    const {todos} = useSelector((state) => state);

    const dispatch = useDispatch();


    const fetchData = async () => {
        try {
            setIsLoading(true);
            const todos = await getTodos();
            console.log(todos);
            dispatch(setTodos({todos}));
        } catch (e) {
            console.log(e);
        } finally {
            setIsLoading(false);
        }
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
            { isEditForm && <EditTodoForm/> }
            <TodoList setIsEditForm={ setIsEditForm } todos={ todos }/>
        </div>
    );
}

export default App;