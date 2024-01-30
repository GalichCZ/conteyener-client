import React, { FC, useEffect, useMemo } from 'react'
import { Checkbox } from 'antd'
import { CheckboxValueType } from 'antd/es/checkbox/Group'
import { useAppSelector } from '@/hooks/hooksRedux.ts'
import { getProperString } from '@/utils/getProperString.ts'
import { DocsLabelsEnum, DocsNamesEnum } from '@/enums/DocsEnum.ts'
import { DbObject } from '@/Types'

interface Props {
  onCheck: (checkedValues: CheckboxValueType[]) => void
  filters: string[] | null | DbObject[]
  tooltipId: string
}

const BOOLEANS = {
  BL_SMGS_CMR: 'BL_SMGS_CMR',
  TD: 'TD',
  IS_DS: 'IS_DS',
}

export const FilterValues: FC<Props> = ({ onCheck, filters, tooltipId }) => {
  const { filtersMap } = useAppSelector((state) => state.filtersMap)
  const filtersValues: CheckboxValueType[] = useMemo(() => [], [])

  const isDocs = tooltipId === 'IS_DOCS'

  const booleanKey = BOOLEANS[tooltipId as keyof typeof BOOLEANS]

  useEffect(() => {
    if (filtersMap.length === 0 || tooltipId === '') return

    const filterName = tooltipId.toLowerCase()

    const filterValuesMapArr = filtersMap.filter((filter) => Object.keys(filter)[0] === filterName)

    if (filterValuesMapArr.length === 0) return

    const filterValuesArr = filterValuesMapArr[0][filterName].map((value) => value.toString())

    filtersValues.length = 0

    filterValuesArr.forEach((value) => filtersValues.push(value))
  }, [filtersMap, filtersValues, tooltipId])

  const docsCheckBoxes = useMemo(() => {
    return Object.keys(DocsNamesEnum).map((key) => (
      <Checkbox value={key} key={key}>
        {DocsLabelsEnum[key as keyof typeof DocsLabelsEnum]}
      </Checkbox>
    ))
  }, [])

  const data = useMemo(
    () => (value: string | Date | number | boolean) => {
      return getProperString(value, tooltipId)
    },
    [tooltipId]
  )

  const otherCheckBoxes = useMemo(() => {
    return (
      <>
        <Checkbox value={'asc'}>По возрастанию</Checkbox>
        <Checkbox value={'desc'}>По убыванию</Checkbox>
        <br />
        {(filters as string[])?.map((filter, key) => (
          <Checkbox value={filter} key={key}>
            {data(filter)}
          </Checkbox>
        ))}
      </>
    )
  }, [data, filters])

  const objectArr = useMemo(() => {
    return (filters as DbObject[])?.map((filter) => (
      <Checkbox value={filter._id} key={filter._id}>
        {data(filter.name)}
      </Checkbox>
    ))
  }, [data, filters])

  const checkboxArr = useMemo(() => {
    const isObject = (filters as DbObject[])[0]?._id
    if (isObject) return objectArr
    if (isDocs) return docsCheckBoxes
    return otherCheckBoxes
  }, [docsCheckBoxes, filters, isDocs, objectArr, otherCheckBoxes])

  const noData = (!filters || filters.length === 0) && !isDocs

  return (
    <>
      <Checkbox.Group key={filtersMap.length} defaultValue={filtersValues} onChange={onCheck}>
        <div className="flex flex-col p-2">
          {!booleanKey && <Checkbox value="null">Пустые</Checkbox>}
          {!booleanKey && <Checkbox value="not_null">Не пустые</Checkbox>}

          {!booleanKey && <br />}

          {noData && <p>Нет данных</p>}

          {checkboxArr}
        </div>
      </Checkbox.Group>
    </>
  )
}

export default FilterValues
