import { useEffect, useState } from "react";
import { Error, Products } from "@/Types";
import { getProducts } from "@/features/UploadProductCellModal/Api/getProducts.ts";
import { AxiosError } from "axios";
import { useAppSelector } from "@/hooks/hooksRedux.ts";

export const useGetProducts = (id: string, product_name: string) => {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState<Products[] | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const reDraw = useAppSelector(state => state.reDraw.reDraw)
    const callGetProducts = async (_id: string, _product_name: string) => {
        setLoading(true)
        try {
            const { data } = await getProducts(_id, _product_name);
            setProducts(data)
            setLoading(false)
        } catch (error) {
            const err = error as AxiosError
            setError({
                message: (err.response?.data as { message: string }).message,
                status: err.request.status
            });
            setLoading(false)
        }
    }

    useEffect(() => {
        if (!id || !product_name) return
        callGetProducts(id, product_name)
    }, [id, product_name, reDraw]);

    return { loading, products, error, setError }
}