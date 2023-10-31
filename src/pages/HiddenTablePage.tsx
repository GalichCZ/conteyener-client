import React from "react";
import SectionLayout from "@/components/Layout/SectionLayout.tsx";
import Table from "@/features/Table/Components/Table.tsx";

const HiddenTablePage = () => {
    return <SectionLayout justify='center' items="center"><Table hidden={true}/></SectionLayout>
}

export default HiddenTablePage;
