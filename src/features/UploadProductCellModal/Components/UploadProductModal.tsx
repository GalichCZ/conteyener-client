import React, { FC, useEffect, useState } from "react";
import GModal from "@/components/Layout/GModal.tsx";
import { useGetProducts } from "@/features/UploadProductCellModal/hooks/useGetProducts.ts";
import ProductTableHead from "@/features/UploadProductCellModal/UI/ProductTableHead.tsx";
import ProductTableBody from "@/features/UploadProductCellModal/UI/ProductTableBody.tsx";
import FillingSkeleton from "@/components/UI/FillingSkeleton.tsx";
import { handleError } from "@/utils/handleError.ts";
import { useDeleteProduct } from "@/features/UploadProductCellModal/hooks/useDeleteProduct.ts";
import { useDispatch } from "react-redux";
import { setReDraw } from "@/store";
import UploadButton from "@/features/UploadProductCellModal/Components/UploadButton.tsx";

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
    product: string;
    bidId: string;
}

const UploadProductModal: FC<Props> = ({ open, product, setOpen, bidId }) => {
    const { products, setError, error, loading } = useGetProducts(bidId, product);
    const [productId, setProductId] = useState<string>("")
    const {
        error: deleteError,
        success,
        setError: setDeleteError,
        loading: deleteLoading
    } = useDeleteProduct(productId, bidId);
    const dispatch = useDispatch();

    useEffect(() => {
        if (error) {
            handleError(error);
            setError(null);
        }
    }, [error, setError]);

    useEffect(() => {
        if (deleteError) {
            handleError(deleteError);
            setDeleteError(null);
        }
    }, [deleteError, setDeleteError])

    useEffect(() => {
        if (success) {
            setProductId("");
            dispatch(setReDraw());
        }
    }, [dispatch, success]);

    const handleCancel = () => {
        setOpen(false);
    }

    const handleDelete = (id: string) => {
        setProductId(id);
    }

    return (
        <GModal title={product} width="90%" open={open} onCancel={handleCancel}>
            {loading && <FillingSkeleton/>}
            {deleteLoading && <FillingSkeleton/>}
            <table className="mt-3">
                <ProductTableHead/>
                <ProductTableBody handleDelete={handleDelete} products={products}/>
            </table>
            <UploadButton bidId={bidId} simpleProductName={product}/>
        </GModal>
    )
}

export default UploadProductModal;