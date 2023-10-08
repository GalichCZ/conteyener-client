import { configureStore } from "@reduxjs/toolkit";
import reDrawSlice from "./slices/reDrawSlice.ts";
import authenticationSlice from "./slices/authenticationSlice.ts";
import queryParamsSlice from "./slices/queryParamsSlice.ts";
import { bidsApi } from "./api/bidsApi.ts";

export const store = configureStore({
    reducer: {
        [bidsApi.reducerPath]: bidsApi.reducer,
        authentication: authenticationSlice,
        reDraw: reDrawSlice,
        queryParams: queryParamsSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([bidsApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;