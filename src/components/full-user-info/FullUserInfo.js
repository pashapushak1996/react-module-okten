import {setUser} from "../../store";
import {getUser} from "../../services";
import {useEffect} from "react";
import Address from "../full-comment/Address";

const FullUserInfo = ({match: {params: {id}}, user, dispatch}) => {


//First solution of routing

    useEffect(() => {
        getUser(id).then(data => dispatch(setUser(data)));
    }, [id]);

    //Second solution of routing

    //Можна в Link кидати ключ state а значення любе і відловлювати в Location

    // const {state} = useLocation();
    // console.log(state);


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
                <div>
                    <h2>Address: </h2>
                    <Address items={ [Object.keys(user.address), user.address] }/>
                </div>
            </div> }
        </div>
    );
}

export default FullUserInfo;
