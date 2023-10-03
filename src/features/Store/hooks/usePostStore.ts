import { useEffect, useState } from "react";
import { Error, StoreFormType } from "@/Types";
import { AxiosError } from "axios";
import { postStore } from "@/features/Store/Api/postStore.ts";

export const usePostStore = (data: StoreFormType | null) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (!data) return;
        const callPostStore = async () => {
            setIsLoading(true);
            try {
                await postStore(data);
                setIsSuccess(true);
                setIsLoading(false);
            } catch (error) {
                const err = error as AxiosError;
                setError({ message: err.message, status: err.request.status });
                setIsLoading(false);
            }
        }
        callPostStore();
    }, [data]);

    return { isLoading, error, setError, isSuccess };
}