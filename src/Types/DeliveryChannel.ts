import { Dayjs } from "dayjs";

export interface DeliveryChannel {
    _id: string;
    name: string;
    eta: number;
    date_do: number;
    declaration_issue_date: number;
    train_depart_date: number,
    train_arrive_date: number,
    store_arrive_date: number,
}

export type DeliveryChannelFormType = Omit<DeliveryChannel, "_id">;

export interface DateCalculateFormType {
    date: Dayjs;
    date_type: number;
    bidId: string;
    delivery_channel: string;
}