import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface CanSubmitState {
    canSubmit: boolean;
}

const initialState: CanSubmitState = {
    canSubmit: false,
}

const canSubmitSlice = createSlice({
    name: "canSubmit",
    initialState,
    reducers: {
        setCanSubmit(state, action: PayloadAction<boolean>) {
            state.canSubmit = action.payload
        }
    }
})

export const { setCanSubmit } = canSubmitSlice.actions
export default canSubmitSlice.reducer;