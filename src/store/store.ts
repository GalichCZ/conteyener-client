import { configureStore } from "@reduxjs/toolkit";
import { bidsApi } from "@/store/api/bidsApi.ts";
import authenticationSlice from "./slices/authenticationSlice.ts";

export const store = configureStore({
    reducer: {
        [bidsApi.reducerPath]: bidsApi.reducer,
        authentication: authenticationSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([bidsApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;