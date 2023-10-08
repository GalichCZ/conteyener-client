import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

type KeyName = string;
type Value = string | number | boolean;

type Parameter = {
    key: KeyName;
    value: Value;
}

export interface QueryParamsState {
    params: string;
}

const initialState: QueryParamsState = {
    params: "",
}

const queryParamsSlice = createSlice({
    name: "queryParams",
    initialState,
    reducers: {
        setParams(state, action: PayloadAction<Parameter>) {
            const { key, value } = action.payload;
            const params = new URLSearchParams(state.params);
            params.append(key.toLowerCase(), value.toString());
            state.params = params.toString();
        }
    }
});

export const { setParams } = queryParamsSlice.actions;
export default queryParamsSlice.reducer;