import Post from "../post/Post";

const Posts = ({match: {url}, posts},) => {

    return (
        <div>
            { posts.map((post) => <Post url={ url } key={ post.id } post={ post }/>) }
        </div>
    );
}

export default Posts;
