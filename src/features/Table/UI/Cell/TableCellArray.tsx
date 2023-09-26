import React, { FC } from 'react';

interface Props {
    dataArray: string[];
}

const TableCellArray: FC<Props> = ({ dataArray }) => {
    return (
        <td>
            <div>
                {dataArray.map((data, key) => <p key={key}>{data}</p>)}
            </div>
        </td>
    );
}

export default TableCellArray;