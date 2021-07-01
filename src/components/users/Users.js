import {useEffect, useState} from "react";
import {getUsers} from "../../services";
import User from "../user/User";
import {useRouteMatch} from "react-router-dom";

const Users = () => {

    let {url} = useRouteMatch();

    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(data => setUsers([...data]));
    }, [])
    return (
        <div>
            { users.map((user) => <User url={ url } key={ user.id } item={ user }/>) }
        </div>
    );
}

export default Users;
