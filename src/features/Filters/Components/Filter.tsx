import React, { FC, useEffect, useMemo, useState } from "react";
import { FilterFilled } from "@ant-design/icons";
import { createPortal } from "react-dom";
import FilterTooltip from "@/features/Filters/Components/FilterTooltip.tsx";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/hooks/hooksRedux.ts";
import { setTooltipId } from "@/store/slices/uiSlice.ts";
import { Colors } from "@/assets/colors.ts";

interface Props {
    key_name: string;
    isFiltered: boolean;
}

const Filter: FC<Props> = ({ key_name, isFiltered }) => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const tooltipId = useAppSelector(state => state.ui.tooltipId);

    const filterColor = useMemo(() => isFiltered ? { color: Colors.PATRIOT } : { color: "" }, [isFiltered])

    const handleFilter = () => {
        const id = open ? "" : key_name
        dispatch(setTooltipId({ tooltipId: id }))
        setOpen(true);
    }

    useEffect(() => {
        if (tooltipId === "") setOpen(false)
    }, [tooltipId]);

    return (
        <>
            {open && createPortal(<FilterTooltip tooltipId={tooltipId} open={open}/>, document.body)}
            <FilterFilled style={filterColor} data-tooltip-id={key_name} data-tooltip-place="bottom"
                          onClick={handleFilter}
                          className="absolute top-1 right-0"/>
        </>
    )
}

export default Filter;