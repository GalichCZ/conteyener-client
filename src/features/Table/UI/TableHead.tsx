import React, { useEffect, useState } from "react";
import TableRow from "@/features/Table/UI/TableRow.tsx";
import { useAppSelector } from "@/hooks/hooksRedux.ts";
import { getColumns } from "@/features/Table/utils/getColumns.ts";
import TableCell from "@/features/Table/UI/Cell/TableCell.tsx";
import { RolesEnum } from "@/enums/rolesEnum.ts";
import Filter from "@/features/Filters/Components/Filter.tsx";

const TableHead = () => {
    const user = useAppSelector(state => state.authentication.user);
    const { columnsNames, columnsKeys } = getColumns(RolesEnum.MANAGER_INT);
    const [columns, setColumns] = useState<string[]>([]);

    useEffect(() => {
        if (user) {
            // setColumns(getColumns(user.role));
        }
        setColumns(columnsNames);
    }, [columnsNames, user]);

    return (
        <thead className="h-10 sticky top-0 z-10 bg-gray-300">
        <TableRow className="">
            {columns.map((column, key) => (
                <TableCell.Cell className="min-w-[100px]" key={key}>
                    {column}
                    <Filter key_name={columnsKeys[key]}/>
                </TableCell.Cell>
            ))}
        </TableRow>
        </thead>
    );
}

export default TableHead;