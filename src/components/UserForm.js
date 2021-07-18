import {useState} from "react";

export const UserForm = ({users, choseUserById, findUserByName}) => {

    const userOfLocalStorage = JSON.parse(localStorage.getItem('chosenUser'));

    const [inputValue, setInputValue] = useState('');
    const [chosenUser, setChosenUser] = useState(userOfLocalStorage || {id: 1});

    const onChangeFormValue = (event) => {
        event.target.type === "text" ? setInputValue(event.target.value) : setChosenUser({id: event.target.value});
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue) {
            findUserByName(inputValue);
        }
        choseUserById(chosenUser.id)
        setChosenUser(JSON.parse(localStorage.getItem('chosenUser')));
    }

    return (
        <form onSubmit={ handleSubmit }>
            <label>
                Виберіть користувача:
                <select value={ chosenUser.id } onChange={ onChangeFormValue }>
                    { users.map((user) => <option key={ user.id } value={ user.id }>{ user.name }</option>) }
                </select>
            </label>
            <input type="submit" value="Отправить"/>
            <div>
                <label>
                    Знайти користувача по імені:
                    <input type="text" value={ inputValue } onChange={ onChangeFormValue }/>
                </label>
            </div>
        </form>
    );
}