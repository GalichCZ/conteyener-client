import React from 'react';
import SectionLayout from "@/components/Layout/SectionLayout.tsx";
import StockPlaces from "@/features/StockPlaces/components/StockPlaces.tsx";

const StockPlacesPage = () => {
    return (
        <SectionLayout items="start" justify="center">
            <StockPlaces/>
        </SectionLayout>
    );
}

export default StockPlacesPage;
