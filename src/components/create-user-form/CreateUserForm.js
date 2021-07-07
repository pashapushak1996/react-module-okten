import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {createUser} from "../../redux/";


export const CreateUserForm = ({setIsCreateUser}) => {
    const dispatch = useDispatch();

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        if (!data.name) return;

        data.id = Date.now().toString();
        dispatch(createUser(data));
        setIsCreateUser(false);
    };
    return (
        <div>
            <h1>CREATE USER</h1>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <div>
                    <b>Name: </b>
                    <input { ...register('name') }/>
                </div>
                <div>
                    <b>Username: </b>
                    <input { ...register('username') }/>
                </div>
                <div>
                    <b>Email: </b>
                    <input { ...register('email') }/>
                </div>
                <div>
                    <b>Phone: </b>
                    <input { ...register('phone') }/>
                </div>
                <div>
                    <b>Website: </b>
                    <input { ...register('website') }/>
                </div>
                <button type={ 'submit' }>Save</button>
            </form>
        </div>

    );
}


