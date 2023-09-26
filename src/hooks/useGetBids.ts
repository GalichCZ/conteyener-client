import { useGetBidsQuery } from "@/store/api/bidsApi.ts";
import { useEffect, useState } from "react";
import { FollowBid } from "@/Types";

export const useGetBids = (page: number) => {
    const { data, isLoading, error } = useGetBidsQuery(page);
    const [bids, setBids] = useState<FollowBid[]>();

    useEffect(() => {
        if (data) {
            setBids(data.items);
        }
    }, [data])

    return { bids, isLoading, error };
}

