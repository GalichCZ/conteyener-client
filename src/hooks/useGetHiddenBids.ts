import { useEffect, useState } from "react";
import { FollowBid } from "@/Types";
import { useGetHiddenBidsQuery } from "@/store/api/bidsApi.ts";

export const useGetHiddenBids = (page: number) => {
    const { data, isLoading, error } = useGetHiddenBidsQuery({ page, reDraw: null });
    const [hiddenBids, setHiddenBids] = useState<FollowBid[]>();

    useEffect(() => {
        if (data) {
            setHiddenBids(data.items);
        }
    }, [data])

    return { hiddenBids, isLoading, error };
}

export default useGetHiddenBids;