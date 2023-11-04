import axios from "@/provider/axiosInstanse.ts";
import { NewComment } from "@/Types"

const { axiosInstance } = axios

export const createComment = async (comment: NewComment) => {
    return await axiosInstance.post('comment', comment);
}