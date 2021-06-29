import {useState} from "react";
import {getPosts} from "../../services/API";
import {Link} from "react-router-dom";

const User = ({id, name, url}) => {
    const [isVisible, setIsVisible] = useState(false);

    const [userPosts, setUserPosts] = useState([]);


    const toggleIsVisible = () => {
        isVisible ? setIsVisible(false) : setIsVisible(true);
    }

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
            <Link to={ `${ url }/${ id }` }>
                <button>Full User Info</button>
            </Link>
            <hr/>
            { isVisible && userPosts.map((post) => {
                return <div key={ post.id }>{ post.title }</div>
            }) }
            <hr/>
        </div>
    );
}

export default User;
