import React, { FC, useCallback, useEffect } from "react";
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
import dayjs from "dayjs";

interface Props {
    open: boolean;
    setOpen: (c: boolean) => void;
    followBid: FollowBid;
}


const UpdateBidModal: FC<Props> = ({ open, followBid, setOpen }) => {
    const dispatch = useDispatch();
    const { control, setValue, handleSubmit, unregister } = useForm<FormBidUpdateValues>();
    const { loading, error, success, setError, callUpdateBid } = useUpdateBid();

    const handleOpen = useCallback(() => {
        setOpen(false)
    }, [setOpen])

    useEffect(() => {
        if (followBid) {
            setValuesInForm(followBid, setValue);
            //TODO: need to find the reason of this wierd null behaviour
            setValue("ready_date", dayjs(followBid.ready_date));
            setValue("answer_of_ob", dayjs(followBid.answer_of_ob));
            setValue("availability_of_ob", dayjs(followBid.availability_of_ob));
            setValue("request_date", dayjs(followBid.request_date));
            setValue("load_date", dayjs(followBid.load_date));
        }
    }, [followBid, setValue]);


    const onSubmit = (data: FormBidUpdateValues) => {
        callUpdateBid(prepareBidObject(data, followBid._id));
    }

    useEffect(() => {
        if (success) {
            dispatch(setReDraw());
            handleOpen()
        }
    }, [dispatch, handleOpen, success]);

    useEffect(() => {
        if (error) {
            handleError(error);
            setError(null);
        }
    }, [error, setError]);

    return (
        <GModal width="90%" title="Изменение слежения" open={open}
                onCancel={handleOpen}>
            {loading && <FillingSkeleton/>}
            <UpdateBidForm control={control} setValue={setValue} followBid={followBid}
                           unregister={unregister} onSubmit={handleSubmit(onSubmit)}/>

            <Button className="mt-10 border-red-500 border-[1px] text-red-500" text="Отмена"/>
        </GModal>
    )
}

export default UpdateBidModal;