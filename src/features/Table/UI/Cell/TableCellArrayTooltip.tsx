import React, { FC } from 'react';
import { Tooltip } from "antd";
import { stringCut } from "@/utils/stringCut.ts";
import { onProductClick } from "@/features/Table/UI/Cell/TableCell.tsx";

interface Props {
    className?: string;
    cutLength?: number;
    dataArray: string[];
    onClick?: onProductClick;
}

const TableCellArray: FC<Props> = ({ dataArray, cutLength, className, onClick }) => {
    return (
        <td className={`border-2 px-4 border-black h-full text-center relative ${className}`}>
            <div>
                {dataArray.map((data, key) => {
                    const isCut = cutLength ? stringCut(data, cutLength) : data;
                    return <Tooltip title={data} key={key} destroyTooltipOnHide>
                        <p className={onClick && 'cursor-pointer'}
                           onClick={() => onClick && onClick(data)}
                           key={key}>{isCut}</p>
                    </Tooltip>
                })}
            </div>
        </td>
    );
}

export default TableCellArray;