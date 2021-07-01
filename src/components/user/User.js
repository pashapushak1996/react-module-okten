import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import {useEffect} from "react";

const User = ({item, url}) => {
    //     в юзері створити лінк котрий поаинен виглядати як /users/USER_ID/allposts.
//     При натисканні на цей лінк, в батьківській компоненті відображаються всі пости цього юзера
    return (
        <div>
            <div>
                <span>{ item.name } - </span>
                <Link to={ `${ url }/${ item.id }/posts` }>All user posts</Link>
            </div>
        </div>
    );
}

export default User;
