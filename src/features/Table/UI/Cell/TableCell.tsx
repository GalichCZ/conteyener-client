import React, { FC } from 'react';
import TableCellArray from "@/features/Table/UI/Cell/TableCellArray.tsx";
import TableCellArrayTooltip from "@/features/Table/UI/Cell/TableCellArrayTooltip.tsx";

interface Props {
    children: React.ReactNode[];
}

const Cell: FC<Props> = ({ children }) => {
    return <td>{children}</td>;
}

const TableCell = {
    Cell,
    Array: TableCellArray,
    ArrayTooltip: TableCellArrayTooltip,
}

export default TableCell;