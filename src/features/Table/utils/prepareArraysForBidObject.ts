import { FormBidUpdateValues } from "@/features/Table/Types/FormBidUpdateValues.ts";
import { FormBidCreateValues } from "@/features/Table/Types/FormBidCreateValues.ts";

export const prepareArraysForBidObject = (array: FormBidUpdateValues | FormBidCreateValues) => {
    const order_number: string[] = [];
    const inside_number: string[] = [];
    const proform_number: string[] = [];
    const simple_product_number: string[] = [];
    const providers: string[] = [];
    const importers: string[] = [];
    const conditions: string[] = [];
    const declaration_number: string[] = [];

    Object.keys(array).forEach((key) => {
        if (key.includes("order_number")) {
            order_number.push(<string>array[key]);
        }
        if (key.includes("inside_number")) {
            inside_number.push(<string>array[key]);
        }
        if (key.includes("proform_number")) {
            proform_number.push(<string>array[key]);
        }
        if (key.includes("simple_product_name")) {
            simple_product_number.push(<string>array[key]);
        }
        if (key.includes("providers")) {
            providers.push(<string>array[key]);
        }
        if (key.includes("importers")) {
            importers.push(<string>array[key]);
        }
        if (key.includes("conditions")) {
            conditions.push(<string>array[key]);
        }
        if (key.includes("declaration_number")) {
            declaration_number.push(<string>array[key]);
        }
    })

    return {
        order_number,
        inside_number,
        proform_number,
        simple_product_number,
        providers,
        importers,
        conditions,
        declaration_number,
    }
}