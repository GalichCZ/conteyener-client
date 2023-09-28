import React from 'react';
import TableHead from "@/features/Table/UI/TableHead.tsx";
import TableBody from "@/features/Table/UI/TableBody.tsx";

const Table = () => {
    return (
        <div className="w-[95%] bg-white mt-8 h-[85%] overflow-auto shadow-2xl">
            <table className="relative">
                <TableHead/>
                <TableBody/>
            </table>
        </div>
    )
}

export default Table;