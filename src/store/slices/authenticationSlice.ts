import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { User } from "@/Types";

export interface AuthenticationState {
    token: string | null;
    user: User | null;
}

const token = localStorage.getItem("token") ? localStorage.getItem("token") : null;

const initialState: AuthenticationState = {
    token,
    user: null,
}

const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        setToken(state, action: PayloadAction<string>) {
            state.token = action.payload
        },
        setUser(state, action: PayloadAction<User>) {
            state.user = action.payload
        }
    }
})

export const { setToken, setUser } = authenticationSlice.actions
export default authenticationSlice.reducer;