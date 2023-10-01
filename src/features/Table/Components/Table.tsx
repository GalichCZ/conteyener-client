import React from 'react';
import TableHead from "@/features/Table/UI/TableHead.tsx";
import TableBody from "@/features/Table/UI/TableBody.tsx";
import GDrawer from "@/features/Table/Components/Drawer/GDrawer.tsx";

const Table = () => {
    return (
        <>
            <GDrawer/>
            <div className="w-[95%] bg-white mt-8 h-[85%] overflow-auto shadow-2xl">
                <table className="relative">
                    <TableHead/>
                    <TableBody/>
                </table>
            </div>
        </>
    )
}

export default Table;