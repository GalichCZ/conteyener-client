import React, { ChangeEvent, FC } from "react";
import { Input } from "antd";

interface Props {
    searchValue: string;
    searchHandle: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const FilterHead: FC<Props> = ({ searchHandle, searchValue }) => {
    return (
        <div className="bg-white sticky p-2 z-10 top-0">
            <p>Фильтрация</p>
            <Input value={searchValue} onChange={searchHandle} placeholder="Поиск"/>
        </div>
    );
}

export default FilterHead;