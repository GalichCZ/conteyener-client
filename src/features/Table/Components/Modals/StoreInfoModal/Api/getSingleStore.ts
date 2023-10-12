import axios from "@/provider/axiosInstanse.ts";

const { axiosInstance } = axios;

export const getSingleStore = async (id: string) => {
    return await axiosInstance.get(`/store/${id}`);
}