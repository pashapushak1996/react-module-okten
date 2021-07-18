import {useEffect, useState} from "react";
import {getUsers} from "../services/users-service";
import {UserForm} from "./UserForm";

export const Users = () => {

    const userOfLocalStorage = JSON.parse(localStorage.getItem('chosenUser')) || null;

    const [users, setUsers] = useState([]);

    const [chosenUser, setChosenUser] = useState(null);

    const [userId, setUserId] = useState(null);


    const [userByName, setUserByName] = useState(null);


    useEffect(() => {
        if (userOfLocalStorage) {
            setChosenUser({...userOfLocalStorage});
        }
    }, [userId]);

    const choseUserById = (id) => {
        const userById = users.find((user) => user.id === +id);
        localStorage.setItem('chosenUser', JSON.stringify(userById));
        setUserId(id);
    }

    const normalizeName = (name) => {
        while (name.includes(' ')) {
            name = name.replace(' ', '');
        }
        return name;
    }

    const findUserByName = (name) => {
        const foundedUser = users.find((user) => user.name.includes(normalizeName(name)));
        if (!foundedUser) {
            return;
        }
        setUserByName({...foundedUser})
    }

    useEffect(() => {
        getUsers().then(data => setUsers([...data]));
    }, []);

    return (
        <div>
            <UserForm findUserByName={ findUserByName } choseUserById={ choseUserById } users={ users }/>
            { chosenUser && <div>
                <b>Вибраний користувач:</b>
                <span>{ chosenUser.name }</span>
            </div> }
            { userByName && <div>
                <b>Знайдетий користувач:</b>
                <span>{ userByName.name }</span>
            </div> }
        </div>
    );
}


