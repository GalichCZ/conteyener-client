import axios from "@/provider/axiosInstanse.ts";
import { SearchField } from "@/store/slices/searchSlice.ts";

const { axiosInstance } = axios

export const getBids = async (page: number, hidden: boolean, filters: string, searchValue: string, searchField: SearchField) => {
    const _filters = filters === "" ? "?" : filters + "&"

    return await axiosInstance.post(`item/${page}${_filters}timeStamp=${new Date().getTime()}`, JSON.stringify({
        search_query: searchValue,
        search_filter: searchField,
        hidden
    }))
}