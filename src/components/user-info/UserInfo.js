import {useDispatch} from "react-redux";
import {deleteUser} from "../../redux";


export const UserInfo = ({user, setIsEditUser}) => {
    const dispatch = useDispatch();

    return (
        <div>
            <h1>FULL USERINFO</h1>
            <div>
                <b>Name: </b>
                <span>{ user.name }</span></div>
            <div>
                <b>Username: </b>
                <span>{ user.username }</span></div>
            <div>
                <b>Email: </b>
                <span>{ user.email }</span></div>
            <div>
                <b>Phone: </b>
                <span>{ user.phone }</span>
            </div>
            <div>
                <b>Website: </b>
                <span>{ user.website }</span>
            </div>
            <div>
                <button onClick={ () => {
                    setIsEditUser(true);
                } }>Edit User
                </button>
                <button onClick={ () => {
                    dispatch(deleteUser(user.id));
                    setIsEditUser(false);
                } }>Delete User
                </button>
            </div>
        </div>
    );
}


