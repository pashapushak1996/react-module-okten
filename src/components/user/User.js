import {useDispatch} from "react-redux";
import {setUser} from "../../redux/reducers/users-reducer";

export const User = ({item}) => {
    const dispatch = useDispatch();

    return (
        <div>
            { item.id }- { item.name }
            <button onClick={ () => {
                dispatch(setUser(item));
            } }>details
            </button>
        </div>
    );
}


