import React, { FC, useCallback } from 'react';
import { Docs } from "@/Types";
import { onDocsClick, onProductClick } from "@/features/Table/UI/Cell/TableCell.tsx";
import { useColorText } from "@/features/Table/hooks/useColorText.ts";
import { useAppSelector } from "@/hooks/hooksRedux.ts";


interface Props {
    modelArray?: Docs[];
    onClick?: onProductClick | onDocsClick;
    dataArray: string[];
}

const TableCellArray: FC<Props> = ({ dataArray, onClick, modelArray }) => {
    const getColor = useColorText;
    const searchValue = useAppSelector(state => state.search.searchValue);
    const color = useCallback((data: string) => {
        return getColor(data, searchValue)
    }, [getColor, searchValue])


    return (
        <td className={`border-2 px-4 border-black h-full text-center relative`}>
            <div>
                {dataArray.map((data, key) => {
                    return <p className={`${onClick ? 'cursor-pointer' : ''} ${color(data)}`}
                              onClick={() => (onClick && modelArray) && onClick(data, modelArray[key])}
                              key={key}>{data}</p>
                })}
            </div>
        </td>
    );
}

export default TableCellArray;