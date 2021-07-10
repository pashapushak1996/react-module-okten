const baseUrl = 'http://localhost:8888';

const getTodos = async () => {
    const response = await fetch(`${ baseUrl }/get-todos`);
    return await response.json();
};

const getTodoById = async (id) => {
    const response = await fetch(`${ baseUrl }/todo/${ id }`);
    return await response.json();
};

const createTodo = async (data) => {
    console.log(JSON.stringify(data));
    const response = await fetch(`${ baseUrl }/create-todo`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await response.json();
};

const updateTodo = async (id, data) => {
    const response = await fetch(`${ baseUrl }/update-todo/${ id }`, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    });

    return await response.json();
};

const deleteTodo = async (id) => {
    const response = await fetch(`${ baseUrl }/delete-todo/${ id }`, {
        method: "DELETE",
    });
    return await response.json();
};

export {
    getTodos,
    getTodoById,
    createTodo,
    deleteTodo,
    updateTodo,
}