import axios from "@/provider/axiosInstanse.ts"
import { DeliveryChannel } from "@/Types";

const { axiosInstance } = axios;

export const updateDeliveryChannel = async (data: DeliveryChannel) => {
    return await axiosInstance.patch('/channel', data)
}