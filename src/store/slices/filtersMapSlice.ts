import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CheckboxValueType } from 'antd/es/checkbox/Group'

export type FilterName = string
export type FilterValues = CheckboxValueType[]
export type FiltersMap = Record<FilterName, FilterValues>

export interface FiltersMapState {
  filtersMap: FiltersMap[]
  filteredKeys: string[]
  alphabetKey: string
}

const initialState: FiltersMapState = {
  filtersMap: [],
  filteredKeys: [],
  alphabetKey: '',
}

const filtersMapSlice = createSlice({
  name: 'filtersMap',
  initialState,
  reducers: {
    setFiltersMap(state, action: PayloadAction<FiltersMap>) {
      const payloadKey = Object.keys(action.payload)[0]
      const payloadValue = action.payload[payloadKey]

      const hasKey = state.filtersMap.some((a) => Object.keys(a)[0] === payloadKey)
      const hasNull = payloadValue.includes('null')
      const hasNotNull = payloadValue.includes('not_null')

      const index = state.filtersMap.findIndex((a) => Object.keys(a)[0] === payloadKey)

      const whatToSet = hasNull ? ['null'] : ['not_null']

      if (payloadValue.includes('asc') || payloadValue.includes('desc')) {
        state.filtersMap.forEach((filter, i) => {
          const existingKey = Object.keys(filter)[0]
          if (existingKey !== payloadKey) {
            state.filtersMap[i][existingKey] = state.filtersMap[i][existingKey].filter(
              (val) => val !== 'asc' && val !== 'desc'
            )
          }
        })
      }

      state.filtersMap[index] = {
        [payloadKey]: payloadValue.filter((val) => val === 'asc' || val === 'desc'),
      }

      // Handle "null" and "not_null" cases
      if ((hasNull || hasNotNull) && hasKey) {
        state.filtersMap[index] = { [payloadKey]: whatToSet }
        return
      } else if ((hasNull || hasNotNull) && !hasKey) {
        state.filtersMap.push({ [payloadKey]: whatToSet })
        state.filteredKeys.push(payloadKey)
        return
      }

      if (hasKey) {
        state.filtersMap[index] = action.payload
      } else {
        state.filteredKeys.push(payloadKey)
        state.filtersMap.push(action.payload)
      }

      state.filteredKeys = state.filteredKeys.filter((key) =>
        state.filtersMap.some((filter) => Object.keys(filter)[0] === key && filter[key].length > 0)
      )

      state.filtersMap = state.filtersMap.filter((map) => Object.values(map)[0].length !== 0)
    },
    clearFiltersByKey(state, action: PayloadAction<FilterName>) {
      state.filtersMap = state.filtersMap.filter((a) => Object.keys(a)[0] !== action.payload)
      state.filteredKeys = state.filteredKeys.filter((a) => a !== action.payload)
    },
    clearFiltersMap(state) {
      state.filtersMap = []
    },
  },
})

export const { setFiltersMap, clearFiltersMap, clearFiltersByKey } = filtersMapSlice.actions
export default filtersMapSlice.reducer
