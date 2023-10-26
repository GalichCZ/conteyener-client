import React, { useState } from "react"
import { UpOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { SearchField, setSearchField } from "@/store/slices/searchSlice.ts";
import { useAppSelector } from "@/hooks/hooksRedux.ts";

const SearchFieldPicker = () => {
    const dispatch = useDispatch()
    const [drop, setDrop] = useState(false)
    const searchField = useAppSelector(state => state.search.searchField);

    const handleSearchField = (field: SearchField) => {
        dispatch(setSearchField(field))
    }
    const handleDrop = () => {
        setDrop((prev) => !prev);
    }


    return (
        <>
            <UpOutlined onClick={handleDrop}
                        className={`absolute right-3 top-2 ${drop ? "rotate-180" : ""} transition-all`}/>
            {drop &&
                <div
                    className="flex flex-col bg-white rounded-md translate-x-[100%] mt-1 shadow-lg w-[150px] cursor-pointer">

                    <span className={`${searchField === "other" ? "bg-orange-200" : ""} rounded-t-md p-1`}
                          onClick={() => {
                              handleSearchField("other")
                          }}>Остальное</span>

                    <span className={`${searchField === "products" ? "bg-orange-200" : ""} rounded-b-md p-1`}
                          onClick={() => {
                              handleSearchField("products")
                          }}>Продукты</span>

                </div>
            }
        </>

    )
}

export default SearchFieldPicker