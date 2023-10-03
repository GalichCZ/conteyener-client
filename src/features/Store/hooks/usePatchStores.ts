import { useEffect, useState } from "react";
import { Error, Store } from "@/Types";
import { patchStore } from "@/features/Store/Api/patchStore.ts";
import { AxiosError } from "axios";

export const usePatchStores = (store: Store | null) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)
    const [isSuccess, setIsSuccess] = useState(false)

    useEffect(() => {
        if (!store) return;

        const callPatchStore = async () => {
            setIsLoading(true);
            try {
                await patchStore(store);
                setIsSuccess(true);
                setIsLoading(false);
            } catch (error) {
                const err = error as AxiosError;
                setError({ message: err.message, status: err.request.status });
                setIsLoading(false);
            }
        }

        callPatchStore();
    }, [store]);

    return { isLoading, error, setError, isSuccess }
}