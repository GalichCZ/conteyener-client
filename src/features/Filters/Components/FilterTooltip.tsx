import React, { FC, useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import { useIsHidden } from "@/hooks/useIsHidden.ts";
import { useGetFilters } from "@/features/Filters/hooks/useGetFilters.ts";
import { handleError } from "@/utils/handleError.ts";
import FillingSkeleton from "@/components/UI/FillingSkeleton.tsx";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import FilterValues from "@/features/Filters/Components/FilterValues.tsx";
import { useSearchThroughArray } from "@/features/Filters/hooks/useSearchThroughArray.ts";
import FilterHead from "@/features/Filters/Components/FilterHead.tsx";
import { setTooltipId } from "@/store/slices/uiSlice.ts";
import { useDispatch } from "react-redux";
import Button from "@/components/UI/Button.tsx";
import {FilterName, setFiltersMap} from "@/store/slices/filtersMapSlice.ts";

interface Props {
    tooltipId: string;
    open: boolean;
}

const FilterTooltip: FC<Props> = ({ tooltipId, open }) => {
    const isHidden = useIsHidden();
    const dispatch = useDispatch();
    const { filters, setError, isLoading, error } = useGetFilters(tooltipId, isHidden);
    const [searchValue, setSearchValue] = useState<string>("");
    const {filtered, searchParams, setSearchParams} = useSearchThroughArray(filters, searchValue, tooltipId.toLowerCase());

    useEffect(() => {
        if (error) {
            handleError(error);
            setError(null);
        }
    }, [error, setError]);

    const onCheck = (checkedValues: CheckboxValueType[]) => {
        const params = new URLSearchParams(searchParams);

        const filterName: FilterName = tooltipId.toLowerCase() as FilterName;

        dispatch(setFiltersMap({[filterName]: checkedValues}))

        params.delete(tooltipId.toLowerCase());

        // checkedValues.forEach(value => {
        //     params.append(tooltipId.toLowerCase(), value.toString());
        // })

        if(setSearchParams) setSearchParams(params)
    }

    const clearAllFilters = () => {
        if(setSearchParams) setSearchParams(undefined);
        dispatch(setTooltipId({ tooltipId: "" }))
    }

    return (
        <Tooltip opacity="1" clickable className="z-10" style={{ background: "none" }} id={tooltipId} isOpen={open}>
            <div className="bg-white text-black shadow-2xl w-[200px] relative pb-8 overflow-auto h-[400px]">
                {isLoading ? <FillingSkeleton/> :
                    <>
                        <FilterHead setSearchValue={setSearchValue} />
                        <FilterValues tooltipId={tooltipId} onCheck={onCheck} filters={filtered}/>
                    </>
                }
            </div>
            <Button onClick={clearAllFilters} type="primary" className="absolute bottom-1 mb-2 ml-3"
                    text="Сбросить фильтры"/>
        </Tooltip>
    )
}

export default FilterTooltip;