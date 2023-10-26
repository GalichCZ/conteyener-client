import React, { FC } from "react";
import { Checkbox } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { useLocation } from "react-router-dom";
import { Dates } from "@/Types";
import { formatDate } from "@/utils/convertDate.ts";

interface Props {
    onCheck: (checkedValues: CheckboxValueType[]) => void;
    filters: string[] | null;
    tooltipId: string
}

export const FilterValues: FC<Props> = ({ onCheck, filters, tooltipId }) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const defaultCheckedValues: CheckboxValueType[] = [];

    searchParams.forEach((value, key) => {
        if (key === tooltipId.toLowerCase()) {
            defaultCheckedValues.push(value);
        }
    });

    return (
        <>
            <Checkbox.Group defaultValue={defaultCheckedValues} onChange={onCheck}>
                <div className="flex flex-col p-2">
                    <Checkbox value="null">Пустые</Checkbox>
                    <Checkbox value="not_null">Не пустые</Checkbox>
                    {(!filters || filters.length === 0) && <p>Нет данных</p>}
                    {filters?.map((filter, key) => {
                        const data = Dates[tooltipId.toLowerCase() as keyof typeof Dates] ? formatDate(filter) : filter
                        return <Checkbox value={filter} key={key}>
                            {data}
                        </Checkbox>

                    })
                    }
                </div>
            </Checkbox.Group>
        </>
    )
}

export default FilterValues;