import React from 'react';
import Users from "@/features/Users/components/Users.tsx";
import SectionLayout from "@/components/Layout/SectionLayout.tsx";
import { useNavigate } from "react-router-dom";
import { useGetRoleType } from "@/hooks/useGetRoleType.ts";
import { RoutesEnum } from "@/enums/routesEnum.ts";

const UsersPage = () => {
    const navigate = useNavigate();
    const userRole = useGetRoleType();
    if (userRole?.isNewOne) navigate(RoutesEnum.MAIN)
    
    return (
        <SectionLayout justify="center" items="start">
            <Users/>
        </SectionLayout>
    );
}

export default UsersPage;
