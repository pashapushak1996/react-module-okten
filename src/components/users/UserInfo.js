import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUserById} from "../../services/users.service";

export const UserInfo = (props) => {

    const {id} = useParams();

    const dispatch = useDispatch();

    const user = useSelector(({usersReducer: {user}}) => user);

    useEffect(() => {
        getUserById(id).then(data => dispatch({type: "ADD_USER", payload: data}))
    }, [id]);

    return (
        <div>
            { user && <div>
                <h4>{ user.name }</h4>
                <div>{ user.email }</div>
            </div> }
        </div>
    );
}


