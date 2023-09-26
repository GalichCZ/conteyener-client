export interface Channel {
    _id?: string;
    name: string;
    eta: number | null;
    date_do: number | null;
    declaration_issue_date: number | null;
    train_depart_date: number | null;
    train_arrive_date: number | null;
    store_arrive_date: number | null;
}