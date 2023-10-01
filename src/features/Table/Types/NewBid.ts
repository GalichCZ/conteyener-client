import { FollowBid } from "@/Types/FollowBid.ts";

export type NewBid = Pick<FollowBid, "request_date" | "order_number" | "simple_product_name"
    | "providers" | "importers" | "conditions" | "store" | "direction" | "agent" | "container_type" | "place_of_dispatch">