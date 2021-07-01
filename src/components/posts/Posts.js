import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getAllUserPosts} from "../../services";

const Posts = () => {

    let {id} = useParams();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllUserPosts(id).then(data => setPosts([...data]));
    }, [id])

    return (
        <div>
            { posts && posts.map((post) => {
                return <h2 key={ post.id }>{ post.title }</h2>
            }) }
        </div>
    );
}

export default Posts;
