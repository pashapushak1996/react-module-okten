import {useState} from "react";
import {getPosts} from "../../services";
import {Link} from "react-router-dom";

const User = ({id, name, url, user}) => {


    const [isVisible, setIsVisible] = useState(false);


    const [userPosts, setUserPosts] = useState([]);


    const toggleIsVisible = () => {
        isVisible ? setIsVisible(false) : setIsVisible(true);
    };

    const getUserPosts = () => {
        getPosts().then(data => {
            const posts = [];
            data.forEach(post => {
                if (post.userId === id) {
                    posts.push(post);
                }
            });
            setUserPosts(posts);
        });
    }


    return (
        <div>
            <span>{ id } - { name }</span>
            <button onClick={ () => {
                if (userPosts.length === 0) {
                    getUserPosts();
                }
                toggleIsVisible();
            } }>User Posts
            </button>
            <Link to={ {
                pathname: `${ url }/${ id }`,
                state: user
            } }>
                <button>Full User Info</button>
            </Link>
            <hr/>
            { isVisible && userPosts.map((post) => {
                return <div key={ post.id }>
                    <div>
                        <b>Title:</b>
                        <span>{ post.title }</span>
                    </div>
                </div>
            }) }
            <hr/>
        </div>
    );
}

export default User;
