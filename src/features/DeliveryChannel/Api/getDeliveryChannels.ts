import axios from '@/provider/axiosInstanse';

const { cacheAxios } = axios;

export const getDeliveryChannels = async () => {
    return await cacheAxios.get("/delivery-channels");
}