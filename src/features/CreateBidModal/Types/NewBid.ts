import { FollowBid } from "@/Types/FollowBid.ts";

interface NewBidStore {
    store: string;
}

type NewBidPoles = Pick<FollowBid, "request_date" | "order_number" | "simple_product_name"
    | "providers" | "importers" | "conditions" | "direction" | "agent" | "container_type" | "place_of_dispatch" | "delivery_method">

export type NewBid = NewBidStore & NewBidPoles;
