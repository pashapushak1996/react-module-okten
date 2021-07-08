import {Todo} from "../todo/Todo";

export const TodoList = ({todos, setIsEditForm}) => {
    return (
        <div>
            { todos.map((todo) => <Todo setIsEditForm={ setIsEditForm } key={ todo.id } todo={ todo }/>) }
        </div>
    );
}


