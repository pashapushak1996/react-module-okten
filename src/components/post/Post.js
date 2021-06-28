import {Link, Route, Switch} from "react-router-dom";
import FullPost from "../full-post/FullPost";
import {useState} from "react";

const style = {
    width: "250px",
    border: `2px solid grey`
}

const Post = ({url, post}) => {
    let [isVisible, setIsVisible] = useState(false);

    return (
        <div>
            <div>
                <b>Title: </b>
                <span>{ post.title }</span>
            </div>
            <Link
                onClick={ () => isVisible ? setIsVisible(false) : setIsVisible(true) }
                to={ `${ url }/${ post.id }` }>
                View full post
            </Link>
            <hr/>

        </div>
    );
}

export default Post;
