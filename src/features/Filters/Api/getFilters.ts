import axios from '@/provider/axiosInstanse.ts';

const { axiosInstance } = axios

export const getFilters = async (filter_key: string, is_hidden: boolean, has_filters: boolean) => {
    return await axiosInstance.get(`/filter/key/?key_name=${filter_key.toLowerCase()}&has_filters=${has_filters}&is_hidden=${is_hidden}&timeStamp=${new Date().getTime()}`)
}