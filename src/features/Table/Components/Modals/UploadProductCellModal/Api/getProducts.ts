import axios from "@/provider/axiosInstanse.ts";

const { axiosInstance } = axios

export const getProducts = async (id: string, product_name: string) => {
    return await axiosInstance.get(`/product/${id}/${product_name}?timeStamp=${new Date().getTime()}`)
}