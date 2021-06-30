import axios from "axios";


const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});


const getUsers = async () => {
    const {data} = await axiosInstance.get(`/users`);
    return data;
};

const getPosts = async () => {
    const {data} = await axiosInstance.get(`/posts`);
    return data;
};

const getComments = async () => {
    const {data} = await axiosInstance.get(`/comments`);
    return data;
};
const getComment = async (id) => {
    const {data} = await axiosInstance.get(`/comments/${ id }`);
    return data;
}
const getPostComments = async (id) => {
    const {data} = await axiosInstance.get(`/posts/${ id }/comments`);
    return data;
}

const getUser = async (id) => {
    const {data} = await axiosInstance.get(`/users/${ id }`);
    return data;
};

export {
    getComments,
    getPosts,
    getUsers,
    getUser,
    getPostComments
}