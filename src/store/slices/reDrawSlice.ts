import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CanSubmitState {
  reDraw: boolean
  filterApplied: boolean
}

const initialState: CanSubmitState = {
  reDraw: false,
  filterApplied: false,
}

const reDrawSlice = createSlice({
  name: 'reDraw',
  initialState,
  reducers: {
    setReDraw(state) {
      state.reDraw = !state.reDraw
    },
    setFilterApplied(state, action: PayloadAction<boolean>) {
      state.filterApplied = action.payload
    },
  },
})

export const { setReDraw, setFilterApplied } = reDrawSlice.actions
export default reDrawSlice.reducer
