import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {setUser, updateUser} from "../../redux";


const replaceFirstLetter = (string) => {
    string = string.split('');
    string[0] = string[0].toUpperCase();
    return string.join('');
}

export const EditUserForm = ({user, setIsEditUser}) => {

    const dispatch = useDispatch();

    const {register, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        console.log(e);
        const editedUser = JSON.parse(JSON.stringify(user));
        Object.keys(data).forEach((key) => {
            editedUser[key] = data[key];
        });
        dispatch(setUser(editedUser));
        dispatch(updateUser({id: user.id, user: editedUser}));
        setIsEditUser(false);
    };

    return (
        user && <div>
            <h1>EDIT USER</h1>
            <form onSubmit={ handleSubmit(onSubmit) }>
                { Object.keys(user).map((key) => typeof user[key] !== "object" && key !== 'id' &&
                    <div>
                        <b>{ replaceFirstLetter(key) }: </b>
                        <input defaultValue={ user[key] } { ...register(key) }/>
                    </div>
                ) }
                <button type={ 'submit' }>Save</button>
            </form>
        </div>
    );
}


