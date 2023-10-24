import axios from "@/provider/axiosInstanse.ts";

const { axiosInstance } = axios

export const getBids = async (page: number, hidden: boolean) => {
    const url = hidden ? "item/hidden" : "item";
    return await axiosInstance.get(`${url}/${page}&timeStamp=${new Date().getTime()}`)
}