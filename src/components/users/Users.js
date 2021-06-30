import User from "../user/User";
import {useEffect} from "react";
import {getUsers} from "../../services";
import {setUsers} from "../../store";

const Users = ({users, match: {url}, dispatch}) => {

    useEffect(() => {
        getUsers().then(data => dispatch(setUsers(data)));
    }, []);

    return (
        <div>
            { users.map(user => <User url={ url } key={ user.id } user={ user } { ...user }/>) }
        </div>
    );
}

export default Users;
