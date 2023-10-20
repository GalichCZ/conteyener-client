import { Declaration, Error } from "@/Types";
import { useState } from "react";
import { postStatus } from "@/features/Table/Components/Modals/DeclarationModal/Api/postStatus.ts";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";
import { setReDraw } from "@/store";

export const usePostDeclarationStatus = (declarationStatus: Declaration | null) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    const [success, setSuccess] = useState<boolean>(false);
    const dispatch = useDispatch();

    const postDeclarationStatus = async () => {
        setLoading(true);
        try {
            await postStatus(declarationStatus);
            setLoading(false)
            setSuccess(true)
            dispatch(setReDraw());
        } catch (error) {
            const err = error as AxiosError;
            setError({
                message: err.request?.statusText,
                status: err.request.status
            });
            setLoading(false);
        }
    }

    return { loading, error, success, postDeclarationStatus, setError };
}