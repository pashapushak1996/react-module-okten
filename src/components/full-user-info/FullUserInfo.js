import {useEffect} from "react";
import {getUser} from "../../services/API";
import {setUser} from "../../store/reducer";

const FullUserInfo = ({match: {params: {id}}, user, dispatch}) => {


    useEffect(() => {
        getUser(id).then(data => dispatch(setUser(data)));
    }, [id]);

    return (
        <div>
            { user &&
            <div>
                <div>
                    <b>Name: </b>
                    <span>{ user.name }</span>
                </div>
                <div>
                    <b>Username: </b>
                    <span>{ user.username }</span>
                </div>
                <div>
                    <b>Email: </b>
                    <span>{ user.email }</span>
                </div>
                <div>
                    <b>Phone: </b>
                    <span>{ user.phone }</span>
                </div>
                <div>
                    <b>Website: </b>
                    <span>{ user.website }</span>
                </div>
            </div> }
        </div>
    );
}

export default FullUserInfo;
