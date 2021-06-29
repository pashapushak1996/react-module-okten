// створити посилання /users, /posts, /comments.
//     При переході на посилання відображати інформацію з jsonplaceholder про users/posts/comments відповідно до посилання за логікою.
//     Для всього використовувати окремий компонент (Users->User, Posts->Post).
//     В компоненті user та post зробити кнопки. При натисканні на які відображаються пости юзера (а в постах коментарі поста. Але не в постах юзера, а за урлою /posts)

import React, {useEffect, useReducer} from "react";
import {setUsers, initialState, reducer, setPosts} from "./store/reducer";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import {getPosts, getUsers} from "./services/API";
import Users from "./components/users/Users";
import FullUserInfo from "./components/full-user-info/FullUserInfo";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";


const App = () => {

    let [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        getUsers().then(data => {
            dispatch(setUsers(data));
        });
        getPosts().then(data => {
            dispatch(setPosts(data));
        });

    }, []);


    return (
        <Router>
            <nav style={ {width: "400px", display: "flex", justifyContent: "space-between"} }>
                <div>
                    <Link to={ `/users` }>Users</Link>
                </div>
                <div>
                    <Link to={ `/posts` }>Posts</Link>
                </div>
            </nav>
            <hr/>
            <Switch>
                <Route path={ `/posts/:id/comments` } render={ (props) => {
                    return <Comments comments={ state.comments } dispatch={ dispatch } { ...props }/>
                } }/>
                <Route path={ `/posts` }
                       render={ (props) =>
                           <Posts dispatch={ dispatch } { ...props } comments={ state.comments }
                                  posts={ state.posts }/> }/>
                <Route path={ `/users/:id` }
                       render={ (props) =>
                           <FullUserInfo dispatch={ dispatch } user={ state.user } { ...props }/> }/>
                <Route path={ `/users` }
                       render={ (props) =>
                           <Users { ...props } users={ state.users }/> }/>
            </Switch>

        </Router>
    );
}

export default App;

