import React, { FC } from 'react';
import { Docs } from "@/Types";

type onProductClick = (product: string) => void;
type onDocsClick = (docsCount: string, docs: Docs) => void;

interface Props {
    modelArray: Docs[];
    onClick?: onProductClick | onDocsClick;
    dataArray: string[];
}

const TableCellArray: FC<Props> = ({ dataArray, onClick, modelArray }) => {

    return (
        <td className={`border-2 px-4 border-black h-full text-center relative`}>
            <div>
                {dataArray.map((data, key) => <p className={onClick && 'cursor-pointer'}
                                                 onClick={() => onClick && onClick(data, modelArray[key])}
                                                 key={key}>{data}</p>)}
            </div>
        </td>
    );
}

export default TableCellArray;