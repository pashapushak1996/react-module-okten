import Post from "../post/Post";
import {Context} from "../../App";
import {useEffect} from "react";
import {getPosts} from "../../services";
import {setPosts} from "../../store";

const Posts = ({match: {url}, dispatch}) => {

    useEffect(() => {
        getPosts().then(data => dispatch(setPosts(data)));
    }, []);

    return (
        <Context.Consumer>
            {
                ({state, dispatch}) => {
                    return <div>
                        { state.posts.map(post => <Post comments={ state.comments }
                                                        dispatch={ dispatch }
                                                        key={ post.id }
                                                        url={ url }
                                                        post={ post }/>) }
                    </div>
                }
            }
        </Context.Consumer>
    );
}

export default Posts;
