import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import { useIsHidden } from "@/hooks/useIsHidden.ts";
import { useGetFilters } from "@/features/Filters/hooks/useGetFilters.ts";
import { handleError } from "@/utils/handleError.ts";
import FillingSkeleton from "@/components/UI/FillingSkeleton.tsx";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import FilterValues from "@/features/Filters/Components/FilterValues.tsx";
import { useSearchThroughArray } from "@/features/Filters/hooks/useSearchThroughArray.ts";
import FilterHead from "@/features/Filters/Components/FilterHead.tsx";
import { useSearchParams } from "react-router-dom";
import Button from "@/components/UI/Button.tsx";
import { setTooltipId } from "@/store/slices/uiSlice.ts";
import { useDispatch } from "react-redux";

interface Props {
    tooltipId: string;
    open: boolean;
}

const FilterTooltip: FC<Props> = ({ tooltipId, open }) => {
    const isHidden = useIsHidden();
    const dispatch = useDispatch();
    const { filters, setError, isLoading, error } = useGetFilters(tooltipId, isHidden);
    const [searchValue, setSearchValue] = useState<string>("");
    const filtered = useSearchThroughArray(filters, searchValue);
    const [searchParams, setSearchParams] = useSearchParams();

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
        const params = new URLSearchParams(searchParams);

        params.delete(tooltipId.toLowerCase());

        checkedValues.forEach(value => {
            params.append(tooltipId.toLowerCase(), value.toString());
        })
        setSearchParams(params)
    }

    const clearAllFilters = () => {
        setSearchParams(undefined);
        dispatch(setTooltipId({ tooltipId: "" }))
    }

    return (
        <Tooltip opacity="1" clickable className="z-10" style={{ background: "none" }} id={tooltipId} isOpen={open}>
            <div className="bg-white text-black shadow-2xl w-[200px] relative overflow-auto h-[400px]">
                {isLoading ? <FillingSkeleton/> :
                    <>
                        <FilterHead searchValue={searchValue} searchHandle={searchHandle}/>
                        <FilterValues tooltipId={tooltipId} onCheck={onCheck} filters={filtered}/>
                        <Button onClick={clearAllFilters} type="primary" className="absolute bottom-0 left-0 m-2"
                                text="Сбросить фильтры"/>
                    </>
                }
            </div>
        </Tooltip>
    )
}

export default FilterTooltip;