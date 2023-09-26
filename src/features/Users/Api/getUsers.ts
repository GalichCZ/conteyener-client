import axios from '@/provider/axiosInstanse';

const { cacheAxios } = axios;
export const getUsers = async () => {
    return await cacheAxios.get("/users");
}
