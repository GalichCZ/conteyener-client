import { configureStore } from "@reduxjs/toolkit";
import reDrawSlice from "./slices/reDrawSlice.ts";
import authenticationSlice from "./slices/authenticationSlice.ts";
import queryParamsSlice from "./slices/queryParamsSlice.ts";
import uiSlice from "./slices/uisSlice.ts";

export const store = configureStore({
    reducer: {
        authentication: authenticationSlice,
        reDraw: reDrawSlice,
        queryParams: queryParamsSlice,
        ui: uiSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;