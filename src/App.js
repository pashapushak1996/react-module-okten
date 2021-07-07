import React, {useState} from "react";
import {Link, Route} from "react-router-dom";
import {Users} from "./components/users/Users";
import {useSelector} from "react-redux";
import {UserInfo} from "./components/user-info/UserInfo";
import {EditUserForm} from "./components/edit-user/EditUserForm";
import {CreateUserForm} from "./components/create-user-form/CreateUserForm";

//todo зробити щоб воно  не мутувало початковий масив

const App = () => {
    const [isEditUser, setIsEditUser] = useState(false);
    const [isCreateUser, setIsCreateUser] = useState(false);
    const {user, isUserVisible} = useSelector(({usersReducer}) => usersReducer);

    return (
        <div>
            <nav>
                <div>
                    <Link to={ `/users` }>Users</Link>
                </div>
            </nav>
            <hr/>
            <div style={ {display: 'flex', columnGap: "25px"} }>
                <Route path={ `/users` } render={ (props) => <Users/> }/>
                { isUserVisible && <UserInfo setIsEditUser={ setIsEditUser } user={ user }/> }
                { isEditUser && <EditUserForm setIsEditUser={ setIsEditUser } user={ user }/> }
                { isCreateUser && <CreateUserForm setIsCreateUser={ setIsCreateUser }/> }
            </div>
            <button onClick={ () => {
                setIsCreateUser(!isCreateUser);
            } }>Create User
            </button>
        </div>
    );
}

export default App;
