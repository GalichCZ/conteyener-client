import { createExcelFile, downloadFile } from "@/features/Table/Api/downloadExcel.ts";
import { useState } from "react";
import { Error } from "@/Types"
import { AxiosError } from "axios";


export const useDownloadExcel = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [success, setSuccess] = useState(false);

    const createDownload = async () => {
        setLoading(true);
        try {
            const { data } = await createExcelFile();
            await downloadFile(data.fileName);
            setSuccess(true);
            setLoading(false);
        } catch (e) {
            const err = error as AxiosError
            setLoading(false)
            setError({ message: err.message, status: err.status || 500 })
        }
    }

    return { loading, error, setError, success, createDownload }
}