import {useEffect, useState} from "react";
import {getUser, getUserPosts} from "../../services/API";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import Posts from "../posts/Posts";
import FullPost from "../full-post/FullPost";

const UserDetails = ({match: {params: {id}, url}}) => {
    const [user, setUser] = useState(null);
    const [userPosts, setUserPosts] = useState([]);


    const fetchAllUserData = async (id) => {
        let [user, posts] = await Promise.all([getUser(id), getUserPosts(id)]);
        setUser(user);
        setUserPosts(posts);
    }


    useEffect(() => {
        fetchAllUserData(id);
    }, [id])


    return (
        <div>
            { user && <div>
                <h2>{ user.name }</h2>
                <Link to={ `${ url }/posts` }>Posts</Link>
            </div> }
            <hr/>
            <Route path={ `${ url }/posts` }
                   render={ (props) => <Posts { ...props }
                                              posts={ userPosts }/> }/>
        </div>
    );
}

export default UserDetails;
