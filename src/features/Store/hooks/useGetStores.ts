import { Error, Store } from "@/Types";
import { useCallback, useEffect, useState } from "react";
import { getStores } from "@/features/Store/Api/getStores.ts";
import { AxiosError } from "axios";
import { useAppSelector } from "@/hooks/hooksRedux.ts";

export const useGetStores = () => {
    const [stores, setStores] = useState<Store[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error | null>()
    const reDraw = useAppSelector((state) => state.reDraw.reDraw);

    const callGetStores = useCallback(async () => {
        setIsLoading(true)
        try {
            const { data } = await getStores()
            setStores(data)
            setIsLoading(false)
        } catch (error) {
            const err = error as AxiosError
            setError({ message: err.message, status: err.request.status })
            setIsLoading(false)
        }
    }, [])

    useEffect(() => {
        callGetStores()
    }, [callGetStores, reDraw]);

    return { stores, isLoading, error, setError }
}