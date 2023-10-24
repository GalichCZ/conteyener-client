import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UiState {
    tooltipId: string
}

const initialState: UiState = {
    tooltipId: ""
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setTooltipId(state, action: PayloadAction<UiState>) {
            state.tooltipId = action.payload.tooltipId;
        }
    }
})

export const { setTooltipId } = uiSlice.actions
export default uiSlice.reducer;