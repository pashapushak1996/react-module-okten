import {Link, Route} from "react-router-dom";
import {getComments} from "../../services/API";
import React, {useState} from "react";
import {setComments} from "../../store/reducer";
import Comments from "../comments/Comments";
import Comment from "../comment/Comment";

const Post = ({post, url, dispatch, comments}) => {
    //todo реалізувати перехід з коментаря на повну версію коментаря
    console.log(url);
    const [isVisible, setIsVisible] = useState(false);


    const toggleIsVisible = () => {
        isVisible ? setIsVisible(false) : setIsVisible(true);
    }

    const getPostComments = async () => {
        const postComments = await getComments();
        dispatch(setComments(postComments))
    }


    return (
        <div>
            <div>
                <b>Title: </b>
                <span>{ post.title }</span>
            </div>
            <div>
                <b>Body: </b>
                <span>{ post.body }</span>
            </div>
            <div>
                <Link to={ `${ url }/${ post.id }/comments` }>Comments Link</Link>
            </div>

            <button onClick={ () => {
                getPostComments()
                toggleIsVisible();
            } }>All comments
            </button>

            {
                isVisible && <div>
                    <h2>All comments</h2>
                    { comments.map((comment) => {
                        if (comment.postId === post.id) {
                            console.log(url);
                            return <Comment commentId={ comment.id }
                                            postId={ post.id }
                                            url={ url } key={ comment.id }
                                            email={ comment.email }
                                            comment={ comment }/>
                        }
                        return null;
                    }) }
                </div>
            }
            <hr/>
        </div>
    );
}

export default Post;
