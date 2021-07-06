import React from "react";
import {Link, Route} from "react-router-dom";
import {Users} from "./components/users/Users";
import {useSelector} from "react-redux";
import {UserInfo} from "./components/user-info/UserInfo";
import {EditUserForm} from "./components/edit-user/EditUserForm";


const App = () => {
    const {user, isUserVisible, isEditUser} = useSelector(({usersReducer: {user, isUserVisible, isEditUser}}) =>
        ({user, isUserVisible, isEditUser}));

    return (
        <div>
            <nav>
                <div>
                    <Link to={ `/users` }>Users</Link>
                </div>
            </nav>
            <hr/>
            <div style={ {display: 'flex', columnGap: "25px"} }>
                <Route path={ `/users` } render={ (props) => <Users/>
                }/>
                { isUserVisible && <UserInfo user={ user }/> }
                { isEditUser && <EditUserForm user={ user }/> }
            </div>

        </div>
    );
}

export default App;
