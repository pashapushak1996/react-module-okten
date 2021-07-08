import {useState} from "react";
import {createTodo} from "../../services";
import {useDispatch} from "react-redux";
import {setTodos} from "../../redux/reducer";

export const TodoCreateForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const todo = await createTodo({
                title,
                description
            });
            dispatch(setTodos({todo}));
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div>
            <h1>Create todo</h1>
            <form onSubmit={ onSubmit }>
                <input type="text" value={ title } onChange={ ({target: {value}}) => {
                    setTitle(value);
                } } name={ 'title' } placeholder={ 'title' }/>
                <br/>
                <input type="text" value={ description } onChange={ ({target: {value}}) => {
                    setDescription(value);
                } } name={ 'description' } placeholder={ 'description' }/>
                <br/>
                <button type={ "submit" }>Create</button>
            </form>
        </div>
    );
};