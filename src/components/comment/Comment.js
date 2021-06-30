import {Link} from "react-router-dom";

const Comment = ({email, name, body, commentId, postId, url, comment}) => {

    return (
        <div>
            <span>{ commentId } - { email }</span>
            { name && <div>
                <b>Name: </b>
                <span>{ name }</span>
            </div> }

            { body && <div>
                <b>Body: </b>
                <span>{ body }</span>
            </div> }

            <Link to={ {
                pathname: `${ url }/${ postId }/comments/${ commentId }`,
                state: comment
            } }>
                {
                    url && <button>Full Comment</button>
                }
            </Link>
            <hr/>
        </div>
    );
}

export default Comment;
