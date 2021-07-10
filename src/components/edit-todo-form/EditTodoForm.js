import {useSelector} from "react-redux";
import {updateTodo} from "../../services";


export const EditTodoForm = ({setIsEditForm, fetchData}) => {
    const todoFromState = useSelector((state) => state.todo);

    const sendEditedTodo = async (e) => {
        e.preventDefault();
        const {title, description, completed} = e.target;
        const editedTodo = JSON.parse(JSON.stringify(todoFromState));
        editedTodo.title = title.value;
        editedTodo.description = description.value;
        editedTodo.completed = completed.checked;
        await updateTodo(editedTodo.id, editedTodo);
        fetchData();
        setIsEditForm(false);

    };
    return (
        <form onSubmit={ (e) => {
            sendEditedTodo(e)
        } }>
            { todoFromState &&
            <div>
                <div>
                    <b>Title: </b>
                    <input type="text" name={ "title" } defaultValue={ todoFromState.title }/>
                </div>
                <div>
                    <b>Description: </b>
                    <input type="text" name={ "description" } defaultValue={ todoFromState.description }/>
                </div>
                <div>
                    <b>Completed: </b>
                    <input type="checkbox" name={ "completed" } defaultChecked={ todoFromState.completed }/>
                </div>
            </div>
            }
            <button type={ 'submit' }>Save</button>
        </form>
    );
}





