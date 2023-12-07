import React, { FC } from "react";
import { Control } from "react-hook-form";
import { DateCalculateFormType } from "@/Types";
import FormLayout from "@/components/Layout/FormLayout.tsx";
import GInputs from "@/components/GInput/GInputs.ts";
import GButton from "@/components/GInput/components/GButton.tsx";
import { useGetRoleType } from "@/hooks/useGetRoleType.ts";

interface Props {
    onSubmit: () => void;
    control: Control<DateCalculateFormType>;
    label: string;
}

const DateCalculateForm: FC<Props> = ({ onSubmit, control, label }) => {
    const roleTypes = useGetRoleType();

    return (
        <FormLayout className="shadow-none" onFinish={onSubmit}>
            <GInputs.Date disabled={!roleTypes?.isRoleType8} name="date" label={label} control={control}/>
            {roleTypes?.isRoleType8 && <GButton text="Пересчитать" className="mt-8 mb-0"/>}
        </FormLayout>
    )
}

export default DateCalculateForm;