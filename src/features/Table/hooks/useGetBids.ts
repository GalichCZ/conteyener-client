import { useCallback, useEffect, useState } from "react";
import { Error, FollowBid } from "@/Types";
import { AxiosError } from "axios";
import { getBids } from "@/features/Table/Api/getBids.ts";
import { useAppSelector } from "@/hooks/hooksRedux.ts";
import { useLocation } from "react-router-dom";

export const useGetBids = (page: number, hidden: boolean) => {
    const [loading, setLoading] = useState(false);
    const [bids, setBids] = useState<FollowBid[]>();
    const [pages, setPages] = useState<number>(0);
    const [error, setError] = useState<Error | null>(null)
    const reDraw = useAppSelector(state => state.reDraw.reDraw);
    const searchValue = useAppSelector(state => state.search.searchValue);
    const location = useLocation()
    const params = location.search;
    const searchField = useAppSelector(state => state.search.searchField)
    const callGetBids = useCallback(async () => {
        setLoading(true)
        try {
            const { data } = await getBids(page, hidden, params, searchValue || "null", searchField);
            setBids(data.items);
            console.log(data.items);
            setPages(data.totalPages);
            setLoading(false);
        } catch (e) {
            setLoading(false)
            const err = e as AxiosError;
            setError({ message: err.message, status: err.request.status });
        }
    }, [hidden, page, params, searchValue]);

    useEffect(() => {
        callGetBids();
    }, [callGetBids, page, reDraw, params, searchValue]);

    return { loading, error, setError, bids, pages };
}