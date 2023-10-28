import axios from "@/provider/axiosInstanse.ts";

const { axiosInstance } = axios

export const deleteProducts = async (id: string, bidId: string) => {
    return await axiosInstance.delete(`/product/${id}/${bidId}`)
}

