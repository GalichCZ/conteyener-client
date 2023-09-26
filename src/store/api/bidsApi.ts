import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
            query: (page: number) => `/item/${page}`
        }),
        getHiddenBids: build.query({
            query: (page: number) => `/item/hidden/${page}`
        })
    })
})

export const { useGetBidsQuery, useGetHiddenBidsQuery } = bidsApi;