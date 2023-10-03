import React from "react";
import SectionLayout from "@/components/Layout/SectionLayout.tsx";
import Stores from "@/features/Store/components/Stores.tsx";

const StoresPage = () => {
    return (
        <SectionLayout items="center" justify="center">
            <Stores/>
        </SectionLayout>
    );
}

export default StoresPage;