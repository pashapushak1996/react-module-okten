import User from "../user/User";
import UserDetails from "../user-details/UserDetails";
import {Route} from "react-router-dom";

const AllUsers = ({match: {url}, users}) => {
    return (
        <div>
            { users.map((user) =>
                <User
                    key={ user.id }
                    user={ user }
                    url={ url }/>
            ) }
            <hr/>
            <Route path={ `${ url }/:id` } render={ (props) => <UserDetails { ...props }/> }/>
        </div>
    );
}

export default AllUsers;
