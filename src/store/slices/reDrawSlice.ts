import { createSlice } from "@reduxjs/toolkit";

export interface CanSubmitState {
    reDraw: boolean;
}

const initialState: CanSubmitState = {
    reDraw: false,
}

const reDrawSlice = createSlice({
    name: "reDraw",
    initialState,
    reducers: {
        setReDraw(state) {
            state.reDraw = !state.reDraw;
        }
    }
})

export const { setReDraw } = reDrawSlice.actions
export default reDrawSlice.reducer;