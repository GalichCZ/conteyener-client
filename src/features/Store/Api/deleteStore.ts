import axios from "@/provider/axiosInstanse.ts";

const { axiosInstance } = axios;

export const deleteStore = async (id: string) => {
    return await axiosInstance.delete(`/store/${id}`);
}