import React, { FC, useState } from "react";
import { FilterFilled } from "@ant-design/icons";
import { createPortal } from "react-dom";
import FilterTooltip from "@/features/Filters/Components/FilterTooltip.tsx";

interface Props {
    key_name: string;
}

const Filter: FC<Props> = ({ key_name }) => {
    const [open, setOpen] = useState(false);
    const [tooltipId, setTooltipId] = useState<string>("");

    const handleFilter = () => {
        setTooltipId(key_name);
        setOpen((prev) => !prev);
    }

    return (
        <>
            {open && createPortal(<FilterTooltip tooltipId={tooltipId} open={open}/>, document.body)}
            <FilterFilled data-tooltip-id={key_name} data-tooltip-place="bottom" onClick={handleFilter}
                          className="absolute top-1 right-0"/>
        </>
    )
}

export default Filter;