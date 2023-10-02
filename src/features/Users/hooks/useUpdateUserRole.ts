import { useEffect, useState } from "react";
import { updateUserRole } from "@/features/Users/Api/updateUserRole.ts";
import { UserRoleUpdate } from "@/features/Users/Types/userRoleUpdate.ts";
import { AxiosError } from "axios";
import { Error } from "@/Types";

export const useUpdateUserRole = (userData: UserRoleUpdate | null) => {
    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if (!userData) return;
        const callUpdateUserRole = async () => {
            setIsLoading(true);
            try {
                await updateUserRole(userData);
                setSuccess(true);
                setIsLoading(false);
            } catch (error) {
                const err = error as AxiosError;
                setError({ message: err.message, status: err.request.status });
                setIsLoading(false);
            }
        }
        callUpdateUserRole()
    }, [userData]);

    return { success, error, isLoading, setError, setSuccess }
}