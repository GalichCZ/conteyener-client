import React, { FC } from "react";
import FormLayout from "@/components/Layout/FormLayout.tsx";
import { Control } from "react-hook-form";
import { Declaration } from "@/Types";
import GInputs from "@/components/GInput/GInputs.ts";
import GButton from "@/components/GInput/components/GButton.tsx";

interface Props {
    onClick: () => void;
    control: Control<Declaration>;
}

const DeclarationStatusForm: FC<Props> = ({ onClick, control }) => {
    return (
        <FormLayout onFinish={onClick}>
            <GInputs.Date name="declaration_status_date" label="Дата" control={control}/>
            <GInputs.Text name="declaration_status" label="Статус" control={control}/>
            <GInputs.Text name="declaration_status_message" label="Сообщение" control={control}/>
            <GButton text="Добавить"/>
        </FormLayout>
    )
}

export default DeclarationStatusForm;