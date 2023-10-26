import { configureStore } from "@reduxjs/toolkit";
import reDrawSlice from "./slices/reDrawSlice.ts";
import authenticationSlice from "./slices/authenticationSlice.ts";
import uiSlice from "./slices/uiSlice.ts";
import searchSlice from "@/store/slices/searchSlice.ts";

export const store = configureStore({
    reducer: {
        authentication: authenticationSlice,
        reDraw: reDrawSlice,
        ui: uiSlice,
        search: searchSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;