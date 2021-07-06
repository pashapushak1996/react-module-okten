import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {editUser, setUser} from "../../redux/reducers/users-reducer";

const replaceFirstLetter = (string) => {
    string = string.split('');
    string[0] = string[0].toUpperCase();
    return string.join('');
}

export const EditUserForm = ({user}) => {
    const dispatch = useDispatch();

    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        Object.keys(data).forEach((key) => {
            user[key] = data[key];
        });
        dispatch(setUser(user));
        dispatch(editUser());
    };
    return (
        <div>
            <h1>EDIT USER</h1>
            <form onSubmit={ handleSubmit(onSubmit) }>
                { Object.keys(user).map((key, index) => typeof user[key] !== "object" && key !== 'id' &&
                    <div>
                        <b>{ replaceFirstLetter(key) }: </b>
                        <input key={ key } defaultValue={ user[key] } { ...register(key) }/>
                    </div>
                ) }
                <button onClick={ () => {

                } }>Save
                </button>
            </form>
        </div>

    );
}


