import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

const User = ({user, url}) => {
    return (
        <div>
            <div>
                <b>{ user.id }</b>
                <span> - { user.name }</span>
                <Link to={ `${ url }/${ user.id }` }>User Details</Link>
            </div>
        </div>
    );
}

export default User;
