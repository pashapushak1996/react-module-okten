import axios from "axios";

const axiosInstance = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'});

const getUsers = async () => {
    const {data} = await axiosInstance.get(`/users`);
    return data;
};


const getAllUserPosts = async (userId) => {
    const {data} = await axiosInstance.get(`/users/${ userId }/posts`);
    return data;
};


export {
    getAllUserPosts,
    getUsers
}