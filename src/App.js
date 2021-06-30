// створити посилання /users, /posts, /comments.
// При переході на посилання відображати інформацію з jsonplaceholder про users/posts/comments відповідно до посилання за логікою.
// Для всього використовувати окремий компонент (Users->User, Posts->Post).
// В компоненті user та post comment зробити Link. При натисканні на які відображається детальна інформація про user/post/comment

import React, {useReducer} from "react";
import {initialState, reducer} from "./store";
import {Link, Route, Switch} from "react-router-dom";
import Users from "./components/users/Users";
import FullUserInfo from "./components/full-user-info/FullUserInfo";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
import FullComment from "./components/full-comment/FullComment";
import styles from './App.module.css';

export const Context = React.createContext({});


const App = () => {

    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <Context.Provider value={ {state, dispatch} }>
            <div>
                <nav className={ styles.menu }>
                    <div>
                        <Link className={ styles.menu__link } to={ `/users` }>Users</Link>
                    </div>
                    <div>
                        <Link className={ styles.menu__link } to={ `/posts` }>Posts</Link>
                    </div>
                </nav>
                <hr/>
                <Switch>
                    <Route path={ `/posts/:postId/comments/:commentsId` } render={ (props) => {
                        return <FullComment { ...props }/>
                    } }/>
                    <Route path={ `/posts/:id/comments` } render={ (props) => {
                        return <Comments comments={ state.comments } dispatch={ dispatch } { ...props }/>
                    } }/>

                    <Route path={ `/posts` }
                           render={ (props) =>
                               <Posts dispatch={ dispatch } { ...props }/> }/>

                    <Route path={ `/users/:id` }
                           render={ (props) =>
                               <FullUserInfo dispatch={ dispatch } user={ state.user } { ...props }/> }/>

                    <Route path={ `/users` }
                           render={ (props) =>
                               <Users { ...props } dispatch={ dispatch } users={ state.users }/> }/>
                </Switch>
            </div>
        </Context.Provider>
    )
        ;
}

export default App;

