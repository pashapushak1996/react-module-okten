const baseURL = "https://jsonplaceholder.typicode.com";


const getUsers = async () => {
    const res = await fetch(`${ baseURL }/users`);
    return await res.json();
};

export {
    getUsers
}

