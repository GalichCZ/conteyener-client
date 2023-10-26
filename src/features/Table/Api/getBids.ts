import axios from "@/provider/axiosInstanse.ts";

const { axiosInstance } = axios
//&query_string=${searchValue}&search_filter=other&timeStamp=${new Date().getTime()}
export const getBids = async (page: number, hidden: boolean, filters: string, searchValue: string) => {
    const url = hidden ? "item/hidden" : "item";
    return await axiosInstance.get(`${url}/${page}/${searchValue}/other${filters}`)
}