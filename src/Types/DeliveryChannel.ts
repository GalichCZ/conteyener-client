export interface DeliveryChannel {
    id: number;
    name: string;
    eta: number;
    date_do: number;
    declaration_issue_date: number;
    train_depart_date: number,
    train_arrive_date: number,
    store_arrive_date: number,
}