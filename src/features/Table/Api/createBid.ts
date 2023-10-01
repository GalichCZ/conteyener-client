import axios from "@/provider/axiosInstanse.ts";
import { NewBid } from "@/features/Table/Types/NewBid.ts";

const { axiosInstance } = axios;

export const createBid = async (data: NewBid) => {
    return await axiosInstance.post("/bid", data);
}