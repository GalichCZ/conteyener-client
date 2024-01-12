import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CheckboxValueType} from "antd/es/checkbox/Group";

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
    alphabetKey: ''
}

const filtersMapSlice = createSlice({
    name: "filtersMap",
    initialState,
    reducers: {
        setFiltersMap(state, action: PayloadAction<FiltersMap>) {
            const payloadKey = Object.keys(action.payload)[0];
            const payloadValue = action.payload[payloadKey]

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const _payloadValueIsSort = payloadValue.toString() === 'asc' || payloadValue.toString() === 'desc'
            const hasKey = state.filtersMap.some(a => Object.keys(a)[0] === payloadKey)
            const hasNull = payloadValue.includes("null")
            const hasNotNull = payloadValue.includes("not_null")

            const index = state.filtersMap.findIndex(a => Object.keys(a)[0] === payloadKey)

            // TODO: find the element with asc or desc change it for new
            /* TODO: if array that had had alphabet key(AK) have had more than 1 => key clear AK else delete item from array
             *  than change filteredKeys and add new keyValue to Map
             */
            // if (payloadValueIsSort && state.alphabetKey) {
            //     const alphabetIndex = state.filtersMap.findIndex(a => Object.keys(a)[0] === state.alphabetKey)
            //     /*
            //     * key: ['filter', 'filter', 'asc/desc'] if key !== payload_key => delete 'asc/desc' else change asc for desc or asc
            //     * key: ['asc/desc'] if key !== payload_key => delete key from array else change asc for desc or asc
            //     * */
            //     const element = state.filtersMap[alphabetIndex]
            //     // console.log(state.filtersMap)
            // }
            //
            // state.alphabetKey = payloadKey
            // if (payloadValueIsSort) {
            //     if(state.alphabetKey && state.filtersMap.length > 0){
            //         const alphabetIndex = state.filtersMap.findIndex(a => Object.keys(a)[0] === state.alphabetKey)
            //         state.filtersMap[alphabetIndex][state.alphabetKey] = state.filtersMap[alphabetIndex][state.alphabetKey].filter(i => i !== 'asc' && i !== 'desc')
            //         state.filteredKeys = state.filteredKeys.filter(i => i !== payloadKey)
            //         state.filtersMap.push({ [payloadKey]: payloadValue })
            //         state.alphabetKey = payloadKey
            //         return
            //     }
            //
            //     // const indexOfAlphabetKey = state.filtersMap.findIndex(a => Object.keys(a)[0] === state.alphabetKey)
            //
            //     // console.log(indexOfAlphabetKey)
            //     state.alphabetKey = payloadKey
            //
            //     state.filtersMap.push({ [payloadKey]: payloadValue })
            //     state.filteredKeys.push(payloadKey)
            //     return
            // }

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