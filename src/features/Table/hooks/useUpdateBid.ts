import { Error } from "@/Types";
import { useState } from "react";
import { AxiosError } from "axios";
import { FormBidUpdateValues } from "@/features/Table/Types/FormBidUpdateValues.ts";
import { checkArrayDuplicates } from "@/features/Table/utils/checArrayDuplicates.ts";
import { updateBid } from "@/features/Table/Api/updateBid.ts";

export const useUpdateBid = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const checkIsBidValid = (bid: FormBidUpdateValues) => {
        const orders = bid["order_number"] as string[];
        const declarations = bid["declaration_number"] as string[];
        const insides = bid["inside_number"] as string[];
        const proforms = bid["proform_number"] as string[];
        const isOrderNumberDuplicates = checkArrayDuplicates(orders);
        const isDeclarationDuplicates = checkArrayDuplicates(declarations);
        const isInsidesDuplicates = checkArrayDuplicates(insides);
        const isProformsDuplicates = checkArrayDuplicates(proforms);
        if (isOrderNumberDuplicates) {
            setError({
                message: `Повторяющийся № заказа: ${isOrderNumberDuplicates}`,
                status: null
            });
            return false;
        }
        if (isProformsDuplicates) {
            setError({
                message: `Повторяющийся № проформы: ${isProformsDuplicates}`,
                status: null
            });
            return false;
        }
        if (isInsidesDuplicates) {
            setError({
                message: `Повторяющийся внутренний №: ${isInsidesDuplicates}`,
                status: null
            });
            return false;
        }
        if (isDeclarationDuplicates) {
            setError({
                message: `Повторяющийся № декларации: ${isDeclarationDuplicates}`,
                status: null
            });
            return false;
        }
        return true
    }

    const callUpdateBid = async (bid: FormBidUpdateValues) => {
        if (!checkIsBidValid(bid)) return;
        setLoading(true);
        try {
            await updateBid(bid);
            setSuccess(true);
            setLoading(false)
        } catch (e) {
            const err = e as AxiosError;
            setError({
                message: (err.response?.data as { error: string }).error,
                status: err.request.status
            });
            setLoading(false)
        }
    }

    return { loading, error, success, setError, callUpdateBid }
}