import {Link, Route} from "react-router-dom";
import {Posts} from "../posts/Posts";

const styles = {marginRight: "20px"}

export const User = ({user, url}) => {
    return (<div
        key={ user.id }>
        <span>{ user.name } - </span>

        <Link style={ styles } to={ `${ url }/${ user.id }` }>Details</Link>
        <Link to={ `${ url }/${ user.id }/posts` }>User Posts</Link>

        <Route path={ `${ url }/${ user.id }/posts` } render={ (props) => <Posts { ...props }/> }/>
    </div>);
};


