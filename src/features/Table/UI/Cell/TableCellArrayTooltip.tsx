import React, { FC } from 'react';
import { Tooltip } from "antd";
import { stringCut } from "@/utils/stringCut.ts";

interface Props {
    className?: string;
    cutLength?: number;
    dataArray: string[];
}

const TableCellArray: FC<Props> = ({ dataArray, cutLength, className }) => {
    return (
        <td className={`border-2 px-4 border-black h-full text-center relative ${className}`}>
            <div>
                {dataArray.map((data, key) => {
                    const isCut = cutLength ? stringCut(data, cutLength) : data;
                    return <Tooltip title={data} key={key} destroyTooltipOnHide>
                        <p key={key}>{isCut}</p>
                    </Tooltip>
                })}
            </div>
        </td>
    );
}

export default TableCellArray;