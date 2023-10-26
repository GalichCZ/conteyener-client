import axios from "@/provider/axiosInstanse.ts";

const { axiosInstance } = axios

export const createExcelFile = async () => {
    return await axiosInstance.get("/file/create");
}

export const downloadFile = async (fileName: string) => {
    const response = await fetch(import.meta.env.VITE_API_URL + `/file/download/${fileName}`);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
}