import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Params {
    page: number;
    reDraw: boolean;
}

export const bidsApi = createApi({
    reducerPath: "bidsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL,
        prepareHeaders: (headers) => {
            headers.set("Authorization",
                `Bearer ${localStorage.getItem("token")}`)
        },
    }),
    endpoints: (build) => ({
        getBids: build.query({
            query: ({ page, reDraw }: Params) => `/item/${page}?reDraw=${reDraw}`
        }),
        getHiddenBids: build.query({
            query: ({ page, reDraw }: Params) => `/item/hidden/${page}?reDraw=${reDraw}`
        })
    })
})

export const { useGetBidsQuery, useGetHiddenBidsQuery } = bidsApi;