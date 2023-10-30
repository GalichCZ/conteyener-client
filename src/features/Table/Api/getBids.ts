import axios from "@/provider/axiosInstanse.ts";
import { SearchField } from "@/store/slices/searchSlice.ts";

const { axiosInstance } = axios

export const getBids = async (page: number, hidden: boolean, filters: string, searchValue: string, searchField: SearchField) => {
    const url = hidden ? "item/hidden" : "item";
    return await axiosInstance.post(`${url}/${page}${filters}&timeStamp=${new Date().getTime()}`, JSON.stringify({
        search_query: searchValue,
        search_filter: searchField
    }))
}