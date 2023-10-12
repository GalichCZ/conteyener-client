import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UiState {
    topScroll: number | null;
    leftScroll: number | null;
}

const initialState: UiState = {
    topScroll: null,
    leftScroll: null,
}

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setScroll(state, action: PayloadAction<UiState>) {
            state.topScroll = action.payload.topScroll;
            state.leftScroll = action.payload.leftScroll;
        }
    }
})

export const { setScroll } = uiSlice.actions
export default uiSlice.reducer;