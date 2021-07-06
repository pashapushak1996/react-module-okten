import {axiosInstance} from "./axios-config";

const getUsers = async () => {
    const {data} = await axiosInstance.get(`/users`);
    return data;
};

export {getUsers};
