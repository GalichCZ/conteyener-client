import axios from "@/provider/axiosInstanse.ts";
import { FormBidUpdateValues } from "@/features/Table/Types/FormBidUpdateValues.ts";

const { axiosInstance } = axios;

export const updateBid = async (bid: FormBidUpdateValues) => {
    return await axiosInstance.patch(`/bid`, bid)
}