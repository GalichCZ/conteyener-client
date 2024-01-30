import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type SearchField = 'other' | 'products'

export interface SearchSlice {
  searchValue: string
  searchField: SearchField
}

const initialState: SearchSlice = {
  searchValue: '',
  searchField: 'other',
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload
    },
    setSearchField: (state, action: PayloadAction<SearchField>) => {
      state.searchField = action.payload
    },
  },
})

export const { setSearchValue, setSearchField } = searchSlice.actions
export default searchSlice.reducer
