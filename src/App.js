import React, {useEffect, useState} from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import {getAllUsers} from "./services/API";
import AllUsers from "./components/all-users/AllUsers";

const App = () => {
//Todo do comments routing
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getAllUsers().then(data => {
            setUsers([...data]);
        });
    }, [])

    return (
        <Router>
            <div>
                <nav className={ "menu" }>
                    <ul>
                        <li>
                            <NavLink to={ `/posts` }>Posts</NavLink>
                        </li>
                        <li>
                            <NavLink to={ `/users` }>Users</NavLink>
                        </li>
                    </ul>
                </nav>
                <Route path={ `/users` }
                       render={ (props) => <AllUsers
                           { ...props }
                           users={ users }/>
                       }/>
            </div>
        </Router>
    );
}
export default App;
