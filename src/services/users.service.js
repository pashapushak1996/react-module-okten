import {basicUrl} from "./basic-url";


const getUsers = async () => {
    const response = await fetch(basicUrl + `/users`);
    return await response.json();
};

const getUserById = async (id) => {
    const response = await fetch(`${ basicUrl }/users/${ id }`);
    return await response.json();
}

export {
    getUsers,
    getUserById
}