import React, { FC } from "react";
import { Checkbox } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { useLocation } from "react-router-dom";

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
                    {filters?.map((filter, key) => (
                        <Checkbox value={filter} key={key}>
                            {filter}
                        </Checkbox>))
                    }
                </div>
            </Checkbox.Group>
        </>
    )
}

export default FilterValues;