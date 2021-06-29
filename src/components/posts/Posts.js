import Post from "../../post/Post";

const Posts = ({match: {url}, posts, dispatch, comments}) => {
    return (
        <div>
            { posts.map(post => <Post comments={ comments } dispatch={ dispatch } key={ post.id } url={ url }
                                      post={ post }/>) }
        </div>
    );
}

export default Posts;
