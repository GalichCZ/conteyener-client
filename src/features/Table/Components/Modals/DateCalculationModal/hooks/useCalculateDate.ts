import { useCallback, useEffect, useState } from "react";
import { DateCalculateFormType, Error } from "@/Types"
import { AxiosError } from "axios";
import { calculateDate } from "@/features/Table/Components/Modals/DateCalculationModal/Api/calculateDate.ts";

export const useCalculateDate = (date: DateCalculateFormType | null) => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(false);

    const callCalculateDate = useCallback(async (_data: DateCalculateFormType) => {
        setLoading(true);
        setSuccess(false);
        try {
            await calculateDate(_data);
            setSuccess(true);
            setLoading(false);
        } catch (error) {
            const err = error as AxiosError;
            setError({ message: err.message, status: err.request.status });
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        if (!date) return;
        callCalculateDate(date);
    }, [callCalculateDate, date]);

    return { setError, error, success, loading }
}
