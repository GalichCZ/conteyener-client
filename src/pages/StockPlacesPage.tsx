import React from 'react';
import SectionLayout from "@/components/Layout/SectionLayout.tsx";
import StockPlaces from "@/features/StockPlaces/components/StockPlaces.tsx";
import { useNavigate } from "react-router-dom";
import { useGetRoleType } from "@/hooks/useGetRoleType.ts";
import { RoutesEnum } from "@/enums/routesEnum.ts";

const StockPlacesPage = () => {
    const navigate = useNavigate();
    const userRole = useGetRoleType();
    if (userRole?.isNewOne) navigate(RoutesEnum.MAIN)
    
    return (
        <SectionLayout items="start" justify="center">
            <StockPlaces/>
        </SectionLayout>
    );
}

export default StockPlacesPage;
