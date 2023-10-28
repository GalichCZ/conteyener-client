import React, { FC, useCallback, useEffect, useState } from "react";
import GModal from "@/components/Layout/GModal.tsx";
import { Docs } from "@/Types";
import { useUpdateDocs } from "@/features/UpdateDocsModal/hooks/useUpdateDocs.ts";
import FillingSkeleton from "@/components/UI/FillingSkeleton.tsx";
import { handleError } from "@/utils/handleError.ts";
import { useDispatch } from "react-redux";
import { setReDraw } from "@/store";
import { DocsLabelsEnum, DocsNamesEnum } from "@/features/UpdateDocsModal/enums/DocsEnum.ts";
import { Switch } from "antd";
import Button from "@/components/UI/Button.tsx";

interface Props {
    docs: Docs;
    open: boolean;
    bidId: string;
    setOpen: (open: boolean) => void;
}

const docsNamesArray = Object.values(DocsNamesEnum)

const UpdateDocsModal: FC<Props> = ({ docs, setOpen, open, bidId }) => {
    const [docsState, setDocsState] = useState<Docs | null>(null);
    const [confirmed, setConfirmed] = useState(false);
    const { error, setError, success, loading } = useUpdateDocs(docsState, bidId, confirmed);
    const dispatch = useDispatch();

    console.log(docs, docsState)

    const handleCancel = useCallback(() => {
        setOpen(false);
    }, [setOpen])

    useEffect(() => {
        if (error) {
            handleError(error);
            setError(null);
            setDocsState(null);
        }
    }, [error, setError]);

    useEffect(() => {
        setDocsState(docs);
    }, [docs]);

    useEffect(() => {
        if (success) {
            dispatch(setReDraw());
            setConfirmed(false);
            setDocsState(null);
            handleCancel();
        }
    }, [dispatch, handleCancel, success]);

    const handleConfirm = () => {
        setConfirmed(true);
    }

    const returnState = (key: number) => {
        if (!docsState) return false;
        return docsState[docsNamesArray[key]];
    }

    const onChangeHandler = (key: number) => {
        if (!docsState) return;
        setDocsState({ ...docsState, [docsNamesArray[key]]: !docsState[docsNamesArray[key]] });
    }

    return (
        <GModal open={open} onCancel={handleCancel} width="70%"
                title={`Редактирование документов на заказ ${docs.order_number}`}>
            {loading && <FillingSkeleton/>}
            <div className="grid grid-cols-3 gap-4">
                {Object.values(DocsLabelsEnum).map((key, index) =>
                    <div className="flex flex-col justify-end gap-4">
                        <label>{key}</label>
                        <Switch checked={returnState(index)} onChange={() => onChangeHandler(index)}
                                className="w-[40px]"/>
                    </div>
                )}
            </div>

            <Button onClick={handleConfirm} type="primary" className="mt-5" text="Подтвердить"/>
        </GModal>
    )
}

export default UpdateDocsModal;