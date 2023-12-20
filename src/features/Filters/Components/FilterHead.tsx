import React, { ChangeEvent, FC } from "react";
import { Input } from "antd";
import {useDebounce} from "@/features/Table/hooks/useDebounce.ts";

interface Props {
    setSearchValue: (value: string) => void;
}

export const FilterHead: FC<Props> = ({ setSearchValue }) => {
    const searchHandle = useDebounce((e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }, 500);

    return (
        <div className="bg-white sticky p-2 z-10 top-0">
            <p>Фильтрация</p>
            <Input onChange={searchHandle} placeholder="Поиск"/>
        </div>
    );
}

export default FilterHead;