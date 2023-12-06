import React, { FC, useCallback } from "react";
import GModal from "@/components/Layout/GModal.tsx";
import DeclarationTable from "@/features/DeclarationModal/components/DeclarationTable.tsx";
import DeclarationStatusForm from "@/features/DeclarationModal/components/DeclarationStatusForm.tsx";
import { useForm } from "react-hook-form";
import { Declaration } from "@/Types";
import { yupResolver } from "@hookform/resolvers/yup";
import { DeclarationSchema } from "@/features/DeclarationModal/validation/declaration.schema.js";
import { ModalProps } from "@/Types/ModalProps.ts";
import { useGetRoleType } from "@/hooks/useGetRoleType.ts";

interface Props extends ModalProps {
    declaration: string;
}

const DeclarationModal: FC<Props> = ({ open, setOpen, declaration }) => {
    const { control, handleSubmit } = useForm<Declaration>({ resolver: yupResolver(DeclarationSchema) });
    const roleTypes = useGetRoleType();

    const onSubmitHandle = (data: Declaration) => {
        console.log(data);
    }

    const onCancelHandle = useCallback(() => {
        setOpen(false);
    }, [setOpen])

    return (
        <GModal title="Статус декларации" open={open} onCancel={onCancelHandle}>
            {roleTypes?.isRoleType7 &&
                <DeclarationStatusForm onClick={handleSubmit(onSubmitHandle)} control={control}/>}
            <DeclarationTable declarationNumber={declaration}/>
        </GModal>
    )
}

export default DeclarationModal;