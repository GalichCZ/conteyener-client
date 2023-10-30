import { useState } from "react";
import { Error } from "@/Types";
import { AxiosError } from "axios";
import { getMe } from "@/GlobalApi/getMe.ts";
import { useDispatch } from "react-redux";
import { setUser } from "@/store";

export const useGetMe = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const dispatch = useDispatch();

    const callGetMe = async () => {
        setLoading(true);
        if (!localStorage.getItem("token")) return
        try {
            const { data } = await getMe();
            dispatch(setUser(data.user))
            setLoading(false);
        } catch (e) {
            const err = e as AxiosError;
            setError({ message: err.message, status: err.request.status });
            setLoading(false);
        }
    }

    return { callGetMe, loading, error };
}