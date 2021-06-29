const Comment = ({email, name, body, id}) => {
    return (
        <div>
            <span>{ id } - { email }</span>
            { name && <div>
                <b>Name: </b>
                <span>{ name }</span>
            </div> }
            { body && <div>
                <b>Body: </b>
                <span>{ body }</span>
            </div> }
            <hr/>
        </div>
    );
}

export default Comment;
