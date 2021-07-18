import {useSelector} from "react-redux";
import {useEffect, useState} from "react";


export const EditTodoForm = ({setIsEditForm, updateTodo}) => {
    const todoFromState = useSelector((state) => state.todo);
    const [formValues, setFormValues] = useState({});

    const onChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        const inputType = e.target.type;
        const inputChecked = e.target.checked;

        inputType === "checkbox" ?
            setFormValues({...formValues, [inputName]: inputChecked})
            : setFormValues({...formValues, [inputName]: inputValue});
    }

    const sendEditedTodo = async (e) => {
        e.preventDefault();
        const todoFromLocalStorage = JSON.parse(JSON.stringify(todoFromState));
        const editedTodo = {...todoFromLocalStorage, ...formValues};
        await updateTodo(editedTodo.id, editedTodo);
        setIsEditForm(false);
    };

    useEffect(() => {
        console.log(todoFromState);
    }, [])
    return (
        <form onSubmit={ (e) => {
            sendEditedTodo(e)
        } }>
            { todoFromState &&
            <div>
                <div>
                    <b>Title: </b>
                    <input type="text" onChange={ onChange } name={ "title" } defaultValue={ todoFromState.title }/>
                </div>
                <div>
                    <b>Description: </b>
                    <input type="text" onChange={ onChange } name={ "description" }
                           defaultValue={ todoFromState.description }/>
                </div>
                <div>
                    <b>Completed: </b>
                    <input type="checkbox" onChange={ onChange } name={ "completed" }
                           defaultChecked={ todoFromState.completed }/>
                </div>
            </div>
            }
            <button type={ 'submit' }>Save</button>
        </form>
    );
}





