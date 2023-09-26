import { Error, User } from "@/Types";
import { useEffect, useState } from "react";
import { getUsers } from "../Api/getUsers.ts";
import { AxiosError } from "axios";

export const useGetUsers = () => {
    const [users, setUsers] = useState<User[]>();
    const [error, setError] = useState<Error>();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const callGetUsers = async () => {
            setIsLoading(true);
            try {
                const { data } = await getUsers();
                setUsers(data);
                setIsLoading(false);
            } catch (error) {
                const err = error as AxiosError;
                setError({ message: err.message, status: err.request.status });
                setIsLoading(false);
            }
        }

        callGetUsers();
    }, []);

    return { users, error, isLoading };
}