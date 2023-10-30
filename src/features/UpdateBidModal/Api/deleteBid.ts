import axios from "@/provider/axiosInstanse.ts";

const { axiosInstance } = axios;

export const deleteBid = async (bidId: string) => {
    return await axiosInstance.delete(`item/${bidId}`);
}