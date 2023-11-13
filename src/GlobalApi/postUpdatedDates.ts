import axios from "@/provider/axiosInstanse.ts";

const { axiosInstance } = axios;

export const postUpdatedDates = async (toUpdate: []) => {
    return axiosInstance.post("/item/updateDates", toUpdate);
}