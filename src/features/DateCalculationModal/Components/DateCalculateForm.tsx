import React, { FC } from "react";
import { Control } from "react-hook-form";
import { DateCalculateFormType } from "@/Types";
import FormLayout from "@/components/Layout/FormLayout.tsx";
import GInputs from "@/components/GInput/GInputs.ts";
import GButton from "@/components/GInput/components/GButton.tsx";

interface Props {
    onSubmit: () => void;
    control: Control<DateCalculateFormType>;
    label: string;
}

const DateCalculateForm: FC<Props> = ({ onSubmit, control, label }) => {
    return (
        <FormLayout className="shadow-none" onFinish={onSubmit}>
            <GInputs.Date name="date" label={label} control={control}/>
            <GButton text="Пересчитать" className="mt-8 mb-0"/>
        </FormLayout>
    )
}

export default DateCalculateForm;