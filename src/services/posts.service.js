import {basicUrl} from "./basic-url";

const getPosts = async () => {
    const response = await fetch(basicUrl + `/posts`);
    return await response.json()
}
const getUsersPosts = async (id) => {
    const response = await fetch(`${ basicUrl }/users/${ id }/posts`);
    return await response.json();
};

export {
    getPosts,
    getUsersPosts
}