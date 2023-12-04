import { Container } from "@/Types/Container.ts";
import { Docs } from "@/Types/Docs.ts";

export interface FollowBid {
    _id: string;
    request_date: string | null;
    order_number: string[];
    inside_number: string[];
    proform_number: string[];
    container?: Container;
    container_number: string | undefined;
    container_type: string | undefined
    simple_product_name: string[];
    product: string[];
    delivery_method: string;
    providers: string[];
    importers: string[];
    conditions: string[];
    store_name: string | undefined;
    store: { _id: string, name: string };
    delivery_channel: string;
    agent: string | undefined;
    place_of_dispatch: string | undefined;
    line: string | undefined;
    ready_date: string | null;
    load_date: string | null;
    etd: string;
    eta: string;
    eta_update: boolean;
    release: string | null;
    bl_smgs_cmr: boolean;
    td: boolean;
    date_do: string;
    date_do_update: boolean;
    port: string | undefined;
    is_ds: boolean;
    fraht_account: string | undefined;
    is_docs: Docs[];
    declaration_number: string[];
    declaration_issue_date: string;
    declaration_issue_date_update: boolean;
    declaration_status: string;
    availability_of_ob: string | null;
    answer_of_ob: string | null;
    expeditor: string | undefined;
    destination_station: string | undefined;
    km_to_dist: number | null;
    train_depart_date: string;
    train_depart_date_update: boolean;
    train_arrive_date: string;
    train_arrive_date_update: boolean;
    pickup: string | undefined;
    store_arrive_date: string;
    store_arrive_date_update: boolean;
    comment: string;
    fraht: string | undefined;
    bid: number;
    note: string;
    creator: string;
    stock_place_name: string | undefined;
    stock_place: { _id: string, name: string };
    hidden: boolean;
    direction: string | undefined;

    [key: string]: any;
}

export enum Dates {
    request_date = "request_date",
    ready_date = "ready_date",
    load_date = "load_date",
    availability_of_ob = "availability_of_ob",
    answer_of_ob = "answer_of_ob",
    date_do = "date_do",
    eta = "eta",
    etd = "etd",
    train_depart_date = "train_depart_date",
    train_arrive_date = "train_arrive_date",
    store_arrive_date = "store_arrive_date",
    declaration_issue_date = "declaration_issue_date"
}