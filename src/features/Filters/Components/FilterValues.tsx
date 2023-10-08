import React, { FC } from "react";
import { Checkbox } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";

interface Props {
    onCheck: (checkedValues: CheckboxValueType[]) => void;
    filters: string[] | null;
}

export const FilterValues: FC<Props> = ({ onCheck, filters }) => {
    return (
        <>
            <Checkbox.Group onChange={onCheck}>
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