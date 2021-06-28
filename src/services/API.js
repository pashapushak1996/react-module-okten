import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});


const getAllUsers = async () => {
    const {data} = await axiosInstance.get(`/users`);
    return data;
};
const getUser = async (id) => {
    const {data} = await axiosInstance.get(`/users/${ id }`);
    return data;
};
const getUserPosts = async (id) => {
    const {data} = await axiosInstance.get(`/posts?userId=${ id }`);
    return data;
}
const getUserPost = async (id) => {
    let {data} = await axiosInstance.get(`/posts/${ id }`);
    return data;
}

export {
    getUser,
    getAllUsers,
    getUserPosts,
    getUserPost
}
