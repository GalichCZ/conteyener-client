import { useEffect, useState } from "react";
import { Error } from "@/Types";
import { getFilters } from "@/features/Filters/Api/getFilters.ts";
import { AxiosError } from "axios";

export const useGetFilters = (filter_key: string, is_hidden: boolean) => {
    const [filters, setFilters] = useState<string[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const callGetFilters = async () => {
            setIsLoading(true);
            try {
                const { data } = await getFilters(filter_key, is_hidden);
                setFilters(data.values);
                setIsLoading(false);
            } catch (error) {
                const err = error as AxiosError;
                setError({ message: err.message, status: err.request.status });
                setIsLoading(false);
            }
        };
        callGetFilters();
    }, [filter_key, is_hidden]);

    return { filters, isLoading, error, setError };
}