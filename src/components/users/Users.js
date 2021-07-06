import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsers} from "../../services/users-service";
import {setUsers} from "../../redux/reducers/users-reducer";
import {User} from "../user/User";

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


