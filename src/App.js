import React from "react";
import styles from './App.css';
import {NavLink, Route, Switch} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
// #route #routing #dynamic
// створити посилання /users,
//     При переході на посилання відображати інформацію з jsonplaceholder про users
// Для всього використовувати окремий компонент (Users->User).
//     в юзері створити лінк котрий поаинен виглядати як /users/USER_ID/allposts.
//     При натисканні на цей лінк, в батьківській компоненті відображаються всі пости цього юзера

const App = () => {
    return (
        <div>
            <nav>
                <div>
                    <NavLink activeClassName={ styles.active } to={ `/users` }>Users</NavLink>
                </div>
            </nav>
            <Switch>
                <Route exact path={ `/users` }
                       render={ (props) => <Users { ...props }/> }/>

                <Route path={ `/users/:id/posts` }
                       render={ (props) => <Posts { ...props }/> }/>
            </Switch>
        </div>
    );
}

export default App;
