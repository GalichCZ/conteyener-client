import axios from "@/provider/axiosInstanse.ts";
import { DocsFormType } from "@/Types";

const { axiosInstance } = axios

export const updateDocs = async (is_docs: DocsFormType, bidId: string) => {
    return await axiosInstance.patch("/item/docs", { is_docs, bidId });
}