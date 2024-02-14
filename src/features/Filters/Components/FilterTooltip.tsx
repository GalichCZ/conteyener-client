import React, { FC, useEffect, useState } from 'react'
import { useIsHidden } from '@/hooks/useIsHidden.ts'
import { useGetFilters } from '@/features/Filters/hooks/useGetFilters.ts'
import { handleError } from '@/utils/handleError.ts'
import FillingSkeleton from '@/components/UI/FillingSkeleton.tsx'
import { CheckboxValueType } from 'antd/es/checkbox/Group'
import FilterValues from '@/features/Filters/Components/FilterValues.tsx'
import { useSearchThroughArray } from '@/features/Filters/hooks/useSearchThroughArray.ts'
import FilterHead from '@/features/Filters/Components/FilterHead.tsx'
import { setTooltipId } from '@/store/slices/uiSlice.ts'
import { useDispatch } from 'react-redux'
import Button from '@/components/UI/Button.tsx'
import { clearFiltersByKey, FilterName, setFiltersMap } from '@/store/slices/filtersMapSlice.ts'
import { setFilterApplied } from '@/store'
import TooltipUI from '@/features/Filters/UI/TooltipUI.tsx'

interface Props {
  tooltipId: string
  open: boolean
}

const FilterTooltip: FC<Props> = ({ tooltipId, open }) => {
  const isHidden = useIsHidden()
  const dispatch = useDispatch()
  const { filters, setError, isLoading, error } = useGetFilters(tooltipId, isHidden)
  const [searchValue, setSearchValue] = useState<string>('')
  const { filtered } = useSearchThroughArray(filters, searchValue, tooltipId.toLowerCase())

  useEffect(() => {
    if (error) {
      handleError(error)
      setError(null)
    }
  }, [error])

  const applyFiltersHandler = () => {
    dispatch(setTooltipId({ tooltipId: '' }))
    dispatch(setFilterApplied(true))
  }

  const onCheck = (checkedValues: CheckboxValueType[]) => {
    const filterName: FilterName = tooltipId.toLowerCase() as FilterName

    dispatch(setFiltersMap({ [filterName]: checkedValues }))
  }

  const clearFilters = () => {
    dispatch(clearFiltersByKey(tooltipId.toLowerCase() as FilterName))
    dispatch(setFilterApplied(true))
    dispatch(setTooltipId({ tooltipId: '' }))
  }

  return (
    <TooltipUI tooltipId={tooltipId} open={open}>
      <div>
        <FilterHead setSearchValue={setSearchValue} />
        <div className="bg-white text-black relative pb-8 overflow-auto h-[300px]">
          {isLoading ? (
            <FillingSkeleton />
          ) : (
            <>
              <FilterValues tooltipId={tooltipId} onCheck={onCheck} filters={filtered} />
            </>
          )}
        </div>
        <div className="bottom-1 w-full bg-white p-2 flex justify-between">
          <Button onClick={applyFiltersHandler} text="OK" type="primary" />
          <Button onClick={clearFilters} type="side" className="" text="Сбросить фильтры" />
        </div>
      </div>
    </TooltipUI>
  )
}

export default FilterTooltip
