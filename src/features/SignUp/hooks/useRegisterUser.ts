import { useEffect, useState } from "react";
import { Error } from "@/Types";
import { registerUser } from "../Api/registerUser.ts";
import { UserRegister } from "../Types/UserRegister.ts";
import { AxiosError } from "axios";
import { useAppDispatch } from "@/hooks/hooksRedux.ts";
import { setToken, setUser } from "@/store/slices/authenticationSlice.ts";

export const useRegisterUser = (userData: UserRegister | null) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>();
    const [success, setSuccess] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!userData) return;
        //TODO: make it as function that will be returned from the hook, so i can avoid side effects
        const callRegisterUser = async () => {
            setIsLoading(true);
            try {
                const { data } = await registerUser(userData);
                dispatch(setUser(data.user));
                dispatch(setToken(data.token));
                localStorage.setItem("token", data.token);
                setSuccess(true);
                setIsLoading(false);
            } catch (error) {
                const err = error as AxiosError;
                setError({ message: err.message, status: err.request.status });
                setSuccess(false);
                setIsLoading(false);
            }
        }
        callRegisterUser();
    }, [dispatch, userData]);

    return { isLoading, error, success, setError };
}