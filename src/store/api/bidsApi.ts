import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Params {
    page: number;
    reDraw: boolean | null;
}

//TODO: get params from filters to retrieve data from server
// (for server, check what is inside the params and return data based on that)
// same thing for search, search has highest priority and should be checked first, then filters, then page

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
            query: ({ page, reDraw }: Params) => `/item/${page}?reDraw=${reDraw}&timeStamp=${new Date().getTime()}`
        }),
        getHiddenBids: build.query({
            query: ({ page, reDraw }: Params) => `/item/hidden/${page}?reDraw=${reDraw}`
        })
    })
})

export const { useGetBidsQuery, useGetHiddenBidsQuery } = bidsApi;