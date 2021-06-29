import User from "../user/User";

const Users = ({users, match: {url}}) => {

    return (
        <div>
            { users.map(user => <User url={ url } key={ user.id } { ...user }/>) }
        </div>
    );
}

export default Users;
