import {Container} from "@/Types/Container.ts";
import {Docs} from "@/Types/Docs.ts";
import {StockPlace} from "@/Types/StockPlace.ts";
import {Store} from "@/Types/Store.ts";

export interface FollowBid {
    id: string;
    request_date: string;
    order_number: string[];
    inside_number: string[];
    proform_number: string[];
    container?: Container;
    container_number: string;
    container_type: string;
    simple_product_name: string[];
    product: string[];
    delivery_method: string;
    providers: string[];
    importers: string[];
    conditions: string[];
    store_name: string;
    store: Store;
    delivery_channel: string;
    agent: string;
    place_of_dispatch: string;
    line: string;
    ready_date: string;
    load_date: string;
    etd: string;
    eta: string;
    eta_update: boolean;
    release: string;
    bl_smgs_cmr: boolean;
    td: boolean;
    date_do: string;
    date_do_update: boolean;
    port: string;
    is_ds: boolean;
    fraht_account: string;
    is_docs: Docs[];
    declaration_number: string[];
    declaration_issue_date: string;
    declaration_issue_date_update: boolean;
    declaration_status: string;
    availability_of_ob: string;
    answer_of_ob: string;
    expeditor: string;
    destination_station: string;
    km_to_dist: number | null;
    train_depart_date: string;
    train_depart_date_update: boolean;
    train_arrive_date: string;
    train_arrive_date_update: boolean;
    pickup: string;
    store_arrive_date: string;
    store_arrive_date_update: boolean;
    comment: string;
    fraht: string;
    bid: number;
    note: string;
    creator: string;
    stock_place_name: string;
    stock_place: StockPlace;
    hidden: boolean;
    direction: string;
}

export type NewFollowBid = Pick<FollowBid, "request_date" | "order_number" | "simple_product_name"
    | "delivery_method" | "providers" | "importers" | "conditions" | "store_name" | "store" | "agent"
    | "container_type" | "place_of_dispatch" | "direction">