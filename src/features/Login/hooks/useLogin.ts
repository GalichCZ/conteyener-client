import { useEffect, useState } from "react";
import { Credentials } from "../types/Credentials.ts";
import { Error } from "@/Types";
import { login } from "../Api/login.ts";
import { AxiosError } from "axios";
import { useAppDispatch } from "@/hooks/hooksRedux.ts";
import { setToken, setUser } from "@/store/slices/authenticationSlice.ts";

export const useLogin = (credentials: Credentials | null) => {
    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!credentials) return;

        //TODO: make it as function that will be returned from the hook, so i can avoid side effects
        const callLogin = async () => {
            setIsLoading(true);
            try {
                const { data } = await login(credentials);
                dispatch(setUser(data.user));
                dispatch(setToken(data.token));
                localStorage.setItem("token", data.token);
                setSuccess(true);
                setIsLoading(false);
            } catch (error) {
                const err = error as AxiosError;

                setError({ message: (err.response?.data as { message: string }).message, status: err.request.status });
                setIsLoading(false);
            }
        }
        callLogin();
    }, [credentials, dispatch]);


    return { success, error, isLoading, setError }
}