import axios from "@/provider/axiosInstanse.ts";
import { DeliveryChannel } from "@/Types";

const { axiosInstance } = axios;

export const postDeliveryChannel = async (data: DeliveryChannel) => {
    return await axiosInstance.post('/channel', data);
}