import { StockPlace, Store } from "@/Types";

export const prepareValuesAndNames = (array: Store[] | StockPlace[]) => {
    const values: string[] = [];
    const names: string[] = [];

    array.forEach((item) => {
        values.push(<string>item._id);
        names.push(item.name);
    })

    return {
        values,
        names,
    }
}