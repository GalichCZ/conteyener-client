import React, { ChangeEvent } from "react";
import { Input } from "antd";
import { useDebounce } from "@/hooks/useDebounce.ts";
import { useDispatch } from "react-redux";
import { setSearchValue } from "@/store/slices/searchSlice.ts";
import SearchFieldPicker from "@/features/Table/Components/Search/SearchFieldPicker.tsx";

const Search = () => {
    const dispatch = useDispatch()

    const searchHandle = useDebounce((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchValue(e.target.value))
    }, 500);

    return (
        <div className="absolute z-10 top-[65px]">
            <Input onChange={searchHandle} className="w-[300px] h-9" placeholder="Поиск..."/>
            <SearchFieldPicker/>
        </div>
    )
}

export default Search