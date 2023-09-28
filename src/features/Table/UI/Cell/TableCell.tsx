import React, { FC } from 'react';
import TableCellArray from "@/features/Table/UI/Cell/TableCellArray.tsx";
import TableCellArrayTooltip from "@/features/Table/UI/Cell/TableCellArrayTooltip.tsx";

interface Props {
    children: React.ReactNode;
    className?: string
    onClick?: () => void;
}

const Cell: FC<Props> = ({ children, className, onClick }) => {
    return <td onClick={onClick}
               className={`border-2 px-4 border-black h-full text-center relative ${className}`}>{children}</td>;
}

const TableCell = {
    Cell,
    Array: TableCellArray,
    ArrayTooltip: TableCellArrayTooltip,
}

export default TableCell;