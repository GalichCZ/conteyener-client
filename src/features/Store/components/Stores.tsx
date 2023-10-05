import React, { useEffect, useState } from "react";
import HeadNames from "@/features/Store/UI/HeadNames.tsx";
import StoreInfo from "@/features/Store/components/StoreInfo.tsx";
import { useGetStores } from "@/hooks/useGetStores.ts";
import FillingSkeleton from "@/components/UI/FillingSkeleton.tsx";
import { handleError } from "@/utils/handleError.ts";
import CreateStoreButton from "@/features/Store/components/CreateStoreButton.tsx";
import StoreCreateModal from "@/features/Store/components/StoreCreateModal.tsx";
import { createPortal } from "react-dom";

const Stores = () => {
    const { stores, isLoading, error, setError } = useGetStores()
    const [open, setOpen] = useState(false);

    const noStores = stores.length === 0 && !isLoading;

    const handleOpen = () => {
        setOpen(prev => !prev);
    }

    useEffect(() => {
        if (error) {
            handleError(error)
            setError(null);
        }
    }, [error, setError]);

    return (
        <>
            {open && createPortal(<StoreCreateModal open={open} setOpen={setOpen}/>, document.body)}
            <div className="bg-white shadow-2xl overflow-auto relative max-h-[60%] w-3/4">
                {isLoading && <FillingSkeleton/>}
                <HeadNames/>
                {noStores && <p className="text-center text-2xl">Нет складов</p>}
                {stores.map((store) => (
                    <StoreInfo key={store._id} store={store}/>
                ))}
                <CreateStoreButton onClick={handleOpen}/>
            </div>
        </>
    );
}

export default Stores;