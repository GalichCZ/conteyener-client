import React, { FC, useCallback } from 'react';
import TableCellArray from "@/features/Table/UI/Cell/TableCellArray.tsx";
import TableCellArrayTooltip from "@/features/Table/UI/Cell/TableCellArrayTooltip.tsx";
import { Docs } from "@/Types";
import { useColorText } from "@/features/Table/hooks/useColorText.ts";
import { useAppSelector } from "@/hooks/hooksRedux.ts";

export type onProductClick = (product: string) => void;
export type onDocsClick = (docsCount: string, docs: Docs) => void;

interface Props {
    children: React.ReactNode;
    className?: string
    onClick?: () => void;
}

const Cell: FC<Props> = ({ children, className, onClick }) => {
    const getColor = useColorText;
    const searchValue = useAppSelector(state => state.search.searchValue);

    function getString() {
        if (Array.isArray(children)) return "";
        if (!(children as string)) return "";
        if (!children) return "";

        return children.toString();
    }

    const string = getString()

    const color = useCallback(() => {
        return getColor(string, searchValue)
    }, [getColor, searchValue, string])


    return <td onClick={onClick}
               className={`border-2 px-4 border-black h-full text-center relative ${onClick && "cursor-pointer "} ${className}`}>
        <p className={`${color()}`}>
            {children}
        </p>
    </td>;
}

const TableCell = {
    Cell,
    Array: TableCellArray,
    ArrayTooltip: TableCellArrayTooltip,
}

export default TableCell;