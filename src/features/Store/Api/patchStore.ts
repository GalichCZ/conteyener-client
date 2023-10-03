import axios from "@/provider/axiosInstanse.ts";
import { Store } from "@/Types";

const { axiosInstance } = axios;

export const patchStore = async (data: Store) => {
    return await axiosInstance.patch(`/store`, data);
}