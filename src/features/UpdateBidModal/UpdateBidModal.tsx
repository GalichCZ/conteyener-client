import React, { FC, useCallback, useEffect, useState } from "react";
import Button from "@/components/UI/Button.tsx";
import { useForm } from "react-hook-form";
import { handleError } from "@/utils/handleError.ts";
import { FormBidUpdateValues } from "@/features/UpdateBidModal/Type/FormBidUpdateValues.ts";
import { FollowBid } from "@/Types";
import GModal from "@/components/Layout/GModal.tsx";
import { setValuesInForm } from "@/features/UpdateBidModal/utils/setValuesInForm.ts";
import UpdateBidForm from "@/features/UpdateBidModal/UpdateBidForm.tsx";
import { useUpdateBid } from "@/features/UpdateBidModal/hooks/useUpdateBid.ts";
import FillingSkeleton from "@/components/UI/FillingSkeleton.tsx";
import { prepareBidObject } from "@/features/UpdateBidModal/utils/prepareBidObject.ts";
import { useDispatch } from "react-redux";
import { setReDraw } from "@/store";
import { ModalProps } from "@/Types/ModalProps.ts";
import UpdateBidModalDelete from "@/features/UpdateBidModal/UpdateBidModalDelete.tsx";
import { useHideBid } from "@/features/UpdateBidModal/hooks/useHideBid.ts";

interface Props extends ModalProps {
    followBid: FollowBid;
}

const UpdateBidModal: FC<Props> = ({ open, followBid, setOpen }) => {
    const dispatch = useDispatch();
    const { control, setValue, handleSubmit, unregister } = useForm<FormBidUpdateValues>();
    const { loading, error, success, setError, callUpdateBid } = useUpdateBid();
    const {
        loading: hideLoading,
        error: hideError,
        setError: setHideError,
        callHideBid,
        success: hideSuccess
    } = useHideBid();
    const [deleteModal, setDeleteModal] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);

    const handleOpen = useCallback(() => {
        setOpen(false)
    }, [setOpen])

    const handleDelete = () => {
        setDeleteModal(true);
    }

    const handleHide = () => {
        callHideBid(followBid._id);
    }

    useEffect(() => {
        if (followBid) {
            setValuesInForm(followBid, setValue);
        }
    }, [followBid, setValue]);


    const onSubmit = (data: FormBidUpdateValues) => {
        callUpdateBid(prepareBidObject(data, followBid._id));
    }

    useEffect(() => {
        if (success || isDeleted || hideSuccess) {
            dispatch(setReDraw());
            handleOpen()
        }
    }, [dispatch, handleOpen, hideSuccess, isDeleted, success]);

    useEffect(() => {
        if (hideError) {
            handleError(hideError);
            setHideError(null);
        }
    }, [hideError, setHideError]);

    useEffect(() => {
        if (error) {
            handleError(error);
            setError(null);
        }
    }, [error, setError]);

    return (
        <GModal width="90%" title="Изменение слежения" open={open}
                onCancel={handleOpen}>
            {(loading || hideLoading) && <FillingSkeleton/>}
            {deleteModal && <UpdateBidModalDelete setIsDeleted={setIsDeleted} bidId={followBid._id} open={deleteModal}
                                                  setOpen={setDeleteModal}/>}
            <UpdateBidForm control={control} setValue={setValue} followBid={followBid}
                           unregister={unregister} onSubmit={handleSubmit(onSubmit)}/>

            <Button className="mt-10 border-red-500 border-[1px] text-red-500" text="Отмена"/>
            <Button onClick={handleHide} text="Скрыть" type="side" className="translate-x-20"/>
            <Button onClick={handleDelete} text="Удалить" type="delete" className="absolute right-5 bottom-5"/>
        </GModal>
    )
}

export default UpdateBidModal;