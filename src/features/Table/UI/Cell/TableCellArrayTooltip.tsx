import React, { FC } from 'react';
import { Tooltip } from "antd";

interface Props {
    dataArray: string[];
}

const TableCellArray: FC<Props> = ({ dataArray }) => {
    return (
        <td>
            <div>
                {dataArray.map((data, key) => (
                    <Tooltip title={data} key={key} destroyTooltipOnHide>
                        <p key={key}>{data}</p>
                    </Tooltip>
                ))}
            </div>
        </td>
    );
}

export default TableCellArray;