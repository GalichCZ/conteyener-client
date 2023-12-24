import React, { FC, useEffect, useMemo } from "react";
import { Checkbox } from "antd";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { useAppSelector } from "@/hooks/hooksRedux.ts";
import {getProperString} from "@/utils/getProperString.ts";
import {DocsLabelsEnum, DocsNamesEnum} from "@/enums/DocsEnum.ts";

interface Props {
    onCheck: (checkedValues: CheckboxValueType[]) => void;
    filters: string[] | null;
    tooltipId: string
}

export const FilterValues: FC<Props> = ({ onCheck, filters, tooltipId }) => {
    const { filtersMap } = useAppSelector(state => state.filtersMap)
    const filtersValues: CheckboxValueType[] = useMemo(() => [], [])

    const isDocs = tooltipId === 'IS_DOCS'

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

    const docsCheckBoxes = useMemo(() => {
        return Object.keys(DocsNamesEnum).map(key => (
          <Checkbox value={key} key={key}>
            {DocsLabelsEnum[key as keyof typeof DocsLabelsEnum]}
          </Checkbox>
        ))
    }, [])

    const data = useMemo(()=>(value: string | Date | number | boolean) => {
        return getProperString(value, tooltipId)
    }, [tooltipId])

    const otherCheckBoxes = useMemo(() => {
        return(
            <>
                {/*<Checkbox value={'asc'}>От А до Я</Checkbox>*/}
                {/*<Checkbox value={'desc'}>От Я до А</Checkbox>*/}
                {filters?.map((filter, key) =>
                    (<Checkbox value={filter} key={key}>
                        {data(filter)}
                    </Checkbox>)
                )}
            </>
        )
    },[data, filters])

    const noData = (!filters || filters.length === 0) && !isDocs

    return (
        <>
            <Checkbox.Group key={filtersMap.length} defaultValue={filtersValues} onChange={onCheck}>
                <div className="flex flex-col p-2">
                    <Checkbox value="null">Пустые</Checkbox>
                    <Checkbox value="not_null">Не пустые</Checkbox>

                    <br/>

                    {noData && <p>Нет данных</p>}

                    {isDocs ? docsCheckBoxes : otherCheckBoxes}
                </div>
            </Checkbox.Group>
        </>
    )
}

export default FilterValues;