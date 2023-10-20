import React, { FC, useCallback } from "react";
import GModal from "@/components/Layout/GModal.tsx";
import DeclarationTable from "@/features/Table/Components/Modals/DeclarationModal/components/DeclarationTable.tsx";
import DeclarationStatusForm
    from "@/features/Table/Components/Modals/DeclarationModal/components/DeclarationStatusForm.tsx";
import { useForm } from "react-hook-form";
import { Declaration } from "@/Types";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    DeclarationSchema
} from "@/features/Table/Components/Modals/DeclarationModal/validation/declaration.schema.js";

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
    declaration: string;
}

const DeclarationModal: FC<Props> = ({ open, setOpen, declaration }) => {
    const { control, handleSubmit } = useForm<Declaration>({ resolver: yupResolver(DeclarationSchema) });

    const onSubmitHandle = (data: Declaration) => {
        console.log(data);
    }

    const onCancelHandle = useCallback(() => {
        setOpen(false);
    }, [setOpen])

    return (
        <GModal title="Статус декларации" open={open} onCancel={onCancelHandle}>
            <DeclarationStatusForm onClick={handleSubmit(onSubmitHandle)} control={control}/>
            <DeclarationTable declarationNumber={declaration}/>
        </GModal>
    )
}

export default DeclarationModal;