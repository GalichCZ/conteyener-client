import axios from '@/provider/axiosInstanse';

const { cacheAxios } = axios;

export const getStores = async () => {
    return await cacheAxios.get("/stores");
}