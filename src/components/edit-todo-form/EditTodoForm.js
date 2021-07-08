import {useSelector} from "react-redux";

export const EditTodoForm = () => {
    const todo = useSelector((state) => state.todo);

    return (
        <div>
            { todo && Object.keys(todo).map((key) => {
                return typeof todo[key] === "boolean" ? <div>
                        <span>Completed: </span>
                        <input type="checkbox" defaultValue={ todo[key] }/>
                    </div> :
                    <div>
                        <span>{ key }: </span>
                        <input type="text" defaultValue={ todo[key] }/>
                    </div>
            }) }
        </div>
    );
}





