import {useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {FilterName, setFiltersMap} from "@/store/slices/filtersMapSlice.ts";
import {useEffect, useState} from "react";

export const useSearchThroughArray = (array: string[] | null, searchValue: string, key: FilterName) => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const [filteredList, setFilteredList] = useState<string[]>([]);

    useEffect(() => {
        if (!array) return;
        setFilteredList(array)
        if(searchValue === '') return;
        const filtered = array?.filter((item) => item.toLowerCase().includes(searchValue.toLowerCase()));
        setFilteredList(filtered);

        //TODO: fix second search rewrite first search
        dispatch(setFiltersMap({ [key]: filtered }));

    }, [array, searchValue, key, dispatch]);

    return {filtered: filteredList, searchParams, setSearchParams};
}