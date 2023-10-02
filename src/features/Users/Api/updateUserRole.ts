import axios from "@/provider/axiosInstanse";
import { UserRoleUpdate } from "@/features/Users/Types/userRoleUpdate.ts";

const { axiosInstance } = axios;

export const updateUserRole = async (data: UserRoleUpdate) => {
    return await axiosInstance.patch(`/role`, data);
}