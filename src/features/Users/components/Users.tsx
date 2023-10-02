import React, { useEffect } from "react";
import UserInfo from "@/features/Users/components/UserInfo.tsx";
import ListHead from "@/features/Users/UI/ListHead.tsx";
import { useGetUsers } from "@/features/Users/hooks/useGetUsers.ts";
import FillingSkeleton from "@/components/UI/FillingSkeleton.tsx";
import { handleError } from "@/utils/handleError.ts";

const Users = () => {
    const { isLoading, users, error, setError } = useGetUsers();

    useEffect(() => {
        if (error) {
            handleError(error);
            setError(null);
        }
    }, [error, setError]);

    const noUsers = (!isLoading && users === undefined) || (!isLoading && users?.length === 0);

    return (
        <div className="w-[70%] relative overflow-auto h-[70%] mt-20 bg-white px-7 rounded-lg shadow-2xl">
            <ListHead/>
            {isLoading && <FillingSkeleton/>}
            {noUsers && <p className="text-center text-2xl mt-10">Нет пользователей</p>}
            {users?.map((user) => <UserInfo key={user._id}
                                            user={user}/>)}
        </div>
    );
}

export default Users;