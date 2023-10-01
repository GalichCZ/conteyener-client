import { NewBid } from "@/features/Table/Types/NewBid.ts";

export const createDataValidate = (bid: NewBid | null) => {
    if (!bid) return false;

    const isOrderNumberValid = bid.order_number.length > 0;
    const isSimpleProductNameValid = bid.simple_product_name.length > 0;
    const isProvidersValid = bid.providers.length > 0;
    const isImportersValid = bid.importers.length > 0;
    const isConditionsValid = bid.conditions.length > 0;

    return isOrderNumberValid && isSimpleProductNameValid && isProvidersValid && isImportersValid && isConditionsValid;
}