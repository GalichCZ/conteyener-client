import { useEffect, useState } from "react";
import { Error } from "@/Types";
import { AxiosError } from "axios";
import { deleteStore } from "@/features/Store/Api/deleteStore.ts";

export const useDeleteStore = (storeId: string | null) => {
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!storeId) return;

        const callDeleteStore = async () => {
            setIsLoading(true)
            try {
                await deleteStore(storeId);
                setSuccess(true);
                setIsLoading(false);
            } catch (error) {
                const err = error as AxiosError;
                setError({ message: err.message, status: err.request.status });
                setIsLoading(false);
            }
        }

        callDeleteStore();
    }, [storeId]);

    return { isLoading, success, error, setError }
}