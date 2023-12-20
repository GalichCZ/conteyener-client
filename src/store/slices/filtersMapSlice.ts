import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CheckboxValueType} from "antd/es/checkbox/Group";

export type FilterName = string
export type FilterValues = CheckboxValueType[]
type FiltersMap = Record<FilterName, FilterValues>
export interface FiltersMapState {
    filtersMap: FiltersMap[]
}

const initialState: FiltersMapState = {
    filtersMap: [],
}

const filtersMapSlice = createSlice({
    name: "filtersMap",
    initialState,
    reducers: {
        setFiltersMap(state, action: PayloadAction<FiltersMap>) {
            const payloadKey = Object.keys(action.payload)[0];
            const hasKey = state.filtersMap.some(a=>Object.keys(a)[0] === payloadKey)
            if(hasKey) {
                const index = state.filtersMap.findIndex(a=>Object.keys(a)[0] === payloadKey)
                state.filtersMap[index] = action.payload
            }
            else {
                state.filtersMap.push(action.payload);
            }
        },
        clearFiltersMap(state) {
            state.filtersMap = []
        }
    }
})

export const {setFiltersMap, clearFiltersMap} = filtersMapSlice.actions
export default filtersMapSlice.reducer;