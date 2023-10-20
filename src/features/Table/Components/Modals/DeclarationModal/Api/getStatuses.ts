import axios from "@/provider/axiosInstanse.ts";

const { axiosInstance } = axios

export const getStatuses = async (declaration_number: string) => {
    return await axiosInstance.post('/declaration/get', { declaration_number });
}