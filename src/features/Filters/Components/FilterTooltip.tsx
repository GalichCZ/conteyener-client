import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import { useIsHidden } from "@/hooks/useIsHidden.ts";
import { useGetFilters } from "@/features/Filters/hooks/useGetFilters.ts";
import { handleError } from "@/utils/handleError.ts";
import FillingSkeleton from "@/components/UI/FillingSkeleton.tsx";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { useDispatch } from "react-redux";
import { setParams } from "@/store";
import FilterValues from "@/features/Filters/Components/FilterValues.tsx";
import { useSearchThroughArray } from "@/features/Filters/hooks/useSearchThroughArray.ts";
import FilterHead from "@/features/Filters/Components/FilterHead.tsx";

interface Props {
    tooltipId: string;
    open: boolean;
}

const FilterTooltip: FC<Props> = ({ tooltipId, open }) => {
    const isHidden = useIsHidden();
    const { filters, setError, isLoading, error } = useGetFilters(tooltipId, isHidden);
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState<string>("");
    const filtered = useSearchThroughArray(filters, searchValue);

    const searchHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    useEffect(() => {
        if (error) {
            handleError(error);
            setError(null);
        }
    }, [error, setError]);

    const onCheck = (checkedValues: CheckboxValueType[]) => {
        checkedValues.forEach((value) => {
            dispatch(setParams({ key: tooltipId, value: encodeURI(value.toString()) }));
        });
    }

    return (
        <Tooltip opacity="1" clickable className="z-10" style={{ background: "none" }} id={tooltipId} isOpen={open}>
            <div className="bg-white text-black shadow-2xl w-[200px] overflow-auto h-[400px]">
                {isLoading ? <FillingSkeleton/> :
                    <>
                        <FilterHead searchValue={searchValue} searchHandle={searchHandle}/>
                        <FilterValues onCheck={onCheck} filters={filtered}/>
                    </>
                }
            </div>
        </Tooltip>
    )
}

export default FilterTooltip;