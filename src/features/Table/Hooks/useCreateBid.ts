import { useEffect, useState } from "react";
import { NewBid } from "@/features/Table/Types/NewBid.ts";
import { createBid } from "@/features/Table/Api/createBid.ts";
import { Error } from "@/Types";
import { AxiosError } from "axios";
import { createDataValidate } from "@/features/Table/Components/Modals/CreateBidModal/validation/createDataValidate.ts";
import { checkArrayDuplicates } from "@/features/Table/utils/checArrayDuplicates.ts";

export const useCreateBid = (newBid: NewBid | null) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (newBid) {
            const isAllArraysValid = createDataValidate(newBid);
            const isOrderNumberDuplicates = checkArrayDuplicates(newBid.order_number);

            if (isOrderNumberDuplicates) return (setError({
                message: "Номера заказов не должны повторяться",
                status: null
            }));
            if (!isAllArraysValid) return setError({ message: "Заполните все поля", status: null });

            const callCreateBid = async () => {
                setIsLoading(true);
                try {
                    await createBid(newBid)
                    setIsSuccess(true);
                    setIsLoading(false);
                } catch (error) {
                    const err = error as AxiosError;
                    setError({
                        message: (err.response?.data as { message: string }).message,
                        status: err.request.status
                    });
                    setIsLoading(false);
                }
            }

            callCreateBid()
        }

    }, [newBid]);


    return { isLoading, isSuccess, error, setError };
}