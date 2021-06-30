import {useLocation} from "react-router-dom";

const FullComment = (props) => {

    const {state: comment} = useLocation();

    return (
        <div>
            <div>
                <b>Id- </b>
                <span>{ comment.id }</span>
            </div>
            <div>
                <b>Email: </b>
                <span>{ comment.email }</span>
            </div>

            <div>
                <b>Name: </b>
                <span>{ comment.name }</span>
            </div>

            <div>
                <b>Body: </b>
                <span>{ comment.body }</span>
            </div>
        </div>
    );
}

export default FullComment;
