import { Declaration, Error } from "@/Types";
import { useCallback, useEffect, useState } from "react";
import { getStatuses } from "@/features/DeclarationModal/Api/getStatuses.ts";
import { AxiosError } from "axios";
import { useAppSelector } from "@/hooks/hooksRedux.ts";

export const useGetDeclarationStatuses = (declaration_number: string) => {
    const [statuses, setStatuses] = useState<Declaration[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    const reDraw = useAppSelector(state => state.reDraw.reDraw)

    const getDeclarationStatuses = useCallback(async () => {
        setLoading(true);
        try {
            const { data } = await getStatuses(declaration_number);
            setStatuses(data);
            setLoading(false)
        } catch (error) {
            const err = error as AxiosError;
            setError({
                message: err.request?.statusText,
                status: err.request.status
            });
            setLoading(false);
        }
    }, [declaration_number]);

    useEffect(() => {
        getDeclarationStatuses()
    }, [getDeclarationStatuses, reDraw]);

    return { statuses, loading, error, setError };
}