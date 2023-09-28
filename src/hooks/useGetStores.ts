import { Error, Store } from "@/Types";
import { useEffect, useState } from "react";
import { getStores } from "@/features/Store/Api/getStores.ts";
import { AxiosError } from "axios";

export const useGetStores = () => {
    const [stores, setStores] = useState<Store[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<Error>()

    useEffect(() => {
        const callGetStores = async () => {
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
        }
        return () => {
            callGetStores()
        }
    }, []);

    return { stores, isLoading, error }
}