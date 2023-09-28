import React, { useEffect, useState } from "react";
import TableRow from "@/features/Table/UI/TableRow.tsx";
import { useAppSelector } from "@/hooks/hooksRedux.ts";
import { getColumns } from "@/features/Table/utils/getColumns.ts";
import TableCell from "@/features/Table/UI/Cell/TableCell.tsx";
import { FilterFilled } from "@ant-design/icons";
import { RolesEnum } from "@/enums/rolesEnum.ts";

const TableHead = () => {
    const user = useAppSelector(state => state.authentication.user);

    const [columns, setColumns] = useState<string[]>([]);

    useEffect(() => {
        if (user) {
            // setColumns(getColumns(user.role));
        }
        setColumns(getColumns(RolesEnum.MANAGER_INT));
    }, [user]);

    return (
        <thead className="h-10 sticky top-0 z-10 bg-gray-300">
        <TableRow className="">
            {columns.map((column, key) => (
                <TableCell.Cell className="min-w-[100px]" key={key}>
                    {column}
                    <FilterFilled className="absolute top-1 right-0"/>
                </TableCell.Cell>
            ))}
        </TableRow>
        </thead>
    );
}

export default TableHead;