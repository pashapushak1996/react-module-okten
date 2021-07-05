import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPosts, getUsersPosts} from "../../services/posts.service";
import {useRouteMatch} from "react-router-dom";

export const Posts = () => {

    const {url} = useRouteMatch();

    let id = null;

    if (url) {
        const split = url.split('/');
        id = split.find(el => Number(el));

    }
    const {posts, userPosts} = useSelector(({postsReducer: {userPosts, posts}}) => ({
        posts, userPosts
    }));


    const dispatch = useDispatch();

    useEffect(() => {
        if (posts.length === 0) {
            getPosts().then(data => dispatch({type: "ADD_POSTS", payload: data}));
        }
        if (id) {
            getUsersPosts(id).then(data => dispatch({type: "ADD_USER_POSTS", payload: data}))
        }
    }, []);

    return (
        <div>
            { id ? userPosts.map((post) => (<div>
                <h2>{ post.title }</h2>
            </div>)) : posts.map((post) => (<div>
                <h2>{ post.title }</h2>
            </div>)) }
        </div>
    );
}


