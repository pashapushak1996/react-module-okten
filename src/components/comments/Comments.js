import {useEffect} from "react";
import {getPostComments} from "../../services/API";
import {setComments} from "../../store/reducer";
import Comment from "../comment/Comment";

const Comments = ({match: {params: {id}}, comments, dispatch}) => {


    useEffect(() => {
        getPostComments(id).then(data => {
            dispatch(setComments(data));
        })
    }, [id]);


    return (
        <div>
            { comments && comments.map((comment) => {
                return <Comment commentId={ comment.id }
                                key={ comment.id }
                                body={ comment.body }
                                name={ comment.name }
                                email={ comment.email }/>
            }) }
        </div>
    );
}

export default Comments;
