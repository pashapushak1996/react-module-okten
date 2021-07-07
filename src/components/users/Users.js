import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsers} from "../../services/users-service";

import {User} from "../user/User";
import {setUsers} from "../../redux";

export const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(({usersReducer: {users}}) => users);

    useEffect(() => {
        getUsers().then(data => dispatch(setUsers(data)));
    }, []);

    return (
        <div>
            <h1>USERS LIST: </h1>
            { users.map((user) => <User key={ user.id } item={ user }/>) }
        </div>
    );
}


