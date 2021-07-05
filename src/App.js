import React from "react";
import {Link, Route} from "react-router-dom";
import {Users} from "./components/users/Users";
import {Posts} from "./components/posts/Posts";
import {UserInfo} from "./components/users/UserInfo";

// ДЗ-
// 1 дописати каунтер (декремент, ресет, інкремент кастом)
//
// 2 берем джейсон плейсхолдер + реакт роутер і тягнем дані на кожну сторінку)

//posts
//post

const App = () => {
    return (
        <div>
            <nav>
                <div>
                    <Link to={ `/users` }>Users</Link>
                </div>
                <div>
                    <Link to={ `/posts` }>Posts</Link>
                </div>
            </nav>
            <hr/>
            <div>
                <Route exact path={ `/posts` } render={ (props) => <Posts/> }/>
                <Route path={ `/users` } render={ (props) => <Users { ...props }/> }/>
                <Route exact path={ `/users/:id` } render={ (props) => <UserInfo { ...props }/> }/>
            </div>
        </div>
    );
}

export default App;
