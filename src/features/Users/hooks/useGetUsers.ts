import { Error, User } from "@/Types";
import { useCallback, useEffect, useState } from "react";
import { getUsers } from "../Api/getUsers.ts";
import { AxiosError } from "axios";
import { useAppSelector } from "@/hooks/hooksRedux.ts";

export const useGetUsers = () => {
    const [users, setUsers] = useState<User[] | null>();
    const [error, setError] = useState<Error | null>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const reDraw = useAppSelector((state) => state.reDraw.reDraw);

    const callGetUsers = useCallback(async () => {
        setIsLoading(true);
        setUsers(null);
        try {
            const { data } = await getUsers();
            setUsers(data);
            setIsLoading(false);
        } catch (error) {
            const err = error as AxiosError;
            setError({ message: err.message, status: err.request.status });
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        callGetUsers();
    }, [callGetUsers, reDraw]);


    return { users, error, isLoading, setError };
}