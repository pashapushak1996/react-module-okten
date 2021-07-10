import {Todo} from "../todo/Todo";

export const TodoList = ({todos, setIsEditForm, fetchData}) => {
    return (
        <div>
            { todos.map((todo) => <Todo fetchData={ fetchData } setIsEditForm={ setIsEditForm } key={ todo.id }
                                        todo={ todo }/>) }
        </div>
    );
}


