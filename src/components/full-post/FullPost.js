import {useEffect, useState} from "react";
import {getUserPost} from "../../services/API";

const FullPost = ({match: {params: {postId}}}) => {
    let [post, setPost] = useState(null);

    useEffect(() => {
        getUserPost(postId).then(data => setPost(data));
    }, [postId])
    return (
        <div>
            { post && <div>{ post.body }</div> }
        </div>
    );
}

export default FullPost;
