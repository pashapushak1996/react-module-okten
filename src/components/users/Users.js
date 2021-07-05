import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUsers} from "../../services/users.service";
import {useRouteMatch} from "react-router-dom";
import {User} from "./User";

export const Users = () => {
    let {url} = useRouteMatch();
    const dispatch = useDispatch();
    const users = useSelector(({usersReducer: {users}}) => users);
    useEffect(() => {
        getUsers().then(data => dispatch({type: `ADD_USERS`, payload: data}));
    }, [])
    return (
        <div>
            { users.map((user) => <User key={ user.id } url={ url } user={ user }/>) }
        </div>
    );
}


