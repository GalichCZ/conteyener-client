import axios from '@/provider/axiosInstanse.ts'

const { axiosInstance } = axios

export const getFilters = async (filter_key: string, is_hidden: boolean, has_filters: boolean) => {
  const key = filter_key === 'COMMENT' ? 'latest_comment' : filter_key
  return await axiosInstance.get(
    `/filter/key/?key_name=${key.toLowerCase()}&has_filters=${has_filters}&is_hidden=${is_hidden}&timeStamp=${new Date().getTime()}`
  )
}
