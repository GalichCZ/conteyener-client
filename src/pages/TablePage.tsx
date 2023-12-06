import Table from "@/features/Table/Components/Table.tsx";
import SectionLayout from "@/components/Layout/SectionLayout.tsx";
import React from "react";
import { useGetRoleType } from "@/hooks/useGetRoleType.ts";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "@/enums/routesEnum.ts";

const TablePage = () => {
    const navigate = useNavigate();
    const userRole = useGetRoleType();
    if (userRole?.isNewOne) navigate(RoutesEnum.MAIN)

    return <SectionLayout justify='center' items="center"><Table hidden={false}/></SectionLayout>
}

export default TablePage;