import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CheckboxValueType } from "antd/es/checkbox/Group";

export type FilterName = string
export type FilterValues = CheckboxValueType[]
export type FiltersMap = Record<FilterName, FilterValues>

export interface FiltersMapState {
    filtersMap: FiltersMap[]
    filteredKeys: string[]
}

const initialState: FiltersMapState = {
    filtersMap: [],
    filteredKeys: []
}

const filtersMapSlice = createSlice({
    name: "filtersMap",
    initialState,
    reducers: {
        setFiltersMap(state, action: PayloadAction<FiltersMap>) {
            const payloadKey = Object.keys(action.payload)[0];
            const hasKey = state.filtersMap.some(a => Object.keys(a)[0] === payloadKey)
            const index = state.filtersMap.findIndex(a => Object.keys(a)[0] === payloadKey)
            const hasNull = action.payload[payloadKey].includes("null")
            const hasNotNull = action.payload[payloadKey].includes("not_null")
            const whatToSet = hasNull ? ["null"] : ["not_null"]

            if ((hasNull || hasNotNull) && hasKey) {
                state.filtersMap[index] = { [payloadKey]: whatToSet }
                return;
            } else if ((hasNull || hasNotNull) && !hasKey) {
                state.filtersMap.push({ [payloadKey]: whatToSet })
                state.filteredKeys.push(payloadKey)
                return;
            }

            if (hasKey) {
                state.filtersMap[index] = action.payload
            } else {
                state.filteredKeys.push(payloadKey)
                state.filtersMap.push(action.payload);
            }
        },
        clearFiltersByKey(state, action: PayloadAction<FilterName>) {
            state.filtersMap = state.filtersMap.filter(a => Object.keys(a)[0] !== action.payload)
            state.filteredKeys = state.filteredKeys.filter(a => a !== action.payload)
        },
        clearFiltersMap(state) {
            state.filtersMap = []
        }
    }
})

export const { setFiltersMap, clearFiltersMap, clearFiltersByKey } = filtersMapSlice.actions
export default filtersMapSlice.reducer;