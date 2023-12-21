import React, { FC, useCallback, useEffect, useMemo } from "react";
import { Checkbox } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { Dates } from "@/Types";
import { formatDate } from "@/utils/convertDate.ts";
import { useAppSelector } from "@/hooks/hooksRedux.ts";

interface Props {
    onCheck: (checkedValues: CheckboxValueType[]) => void;
    filters: string[] | null;
    tooltipId: string
}

export const FilterValues: FC<Props> = ({ onCheck, filters, tooltipId }) => {
    const { filtersMap } = useAppSelector(state => state.filtersMap)
    const filtersValues: CheckboxValueType[] = useMemo(() => [], [])

    useEffect(() => {
        if (filtersMap.length === 0 || tooltipId === '') return

        const filterName = tooltipId.toLowerCase()

        const filterValuesMapArr = filtersMap.filter(filter =>
            Object.keys(filter)[0] === filterName)

        if (filterValuesMapArr.length === 0) return

        const filterValuesArr = filterValuesMapArr[0][filterName]
            .map(value => value.toString())

        filtersValues.length = 0

        filterValuesArr.forEach(value => filtersValues.push(value))
    }, [filtersMap, filtersValues, tooltipId]);

    const data = useCallback((value: string | Date | number | boolean): string => {
        const isDate = Dates[tooltipId.toLowerCase() as keyof typeof Dates]
        const isBoolean = typeof value === 'boolean'
        const isBooleanString = value === 'true' || value === 'false'
        const isNumber = typeof value === 'number'

        if (isDate) return formatDate(value as string)
        if (isBoolean) return value ? '+' : '-'
        if (isBooleanString) return value === 'true' ? '+' : '-'
        if (isNumber) return value.toString()
        return value.toString();
    }, [tooltipId])

    return (
        <>
            <Checkbox.Group key={filtersMap.length} defaultValue={filtersValues} onChange={onCheck}>
                <div className="flex flex-col p-2">
                    <Checkbox value="null">Пустые</Checkbox>
                    <Checkbox value="not_null">Не пустые</Checkbox>

                    {(!filters || filters.length === 0) && <p>Нет данных</p>}

                    {filters?.map((filter, key) => {
                        return <Checkbox value={filter} key={key}>
                            {data(filter)}
                        </Checkbox>
                    })
                    }
                </div>
            </Checkbox.Group>
        </>
    )
}

export default FilterValues;