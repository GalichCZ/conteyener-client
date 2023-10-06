import React, { FC } from "react";
import { InputNumber } from "antd";
import { GInputType } from "../types/GInputType.ts";
import { FormItem } from "react-hook-form-antd";
import { Controller } from "react-hook-form";

interface Props extends GInputType {
    min: number;
    max: number;
    onChange?: (value: number | null) => void;
}

const GInputNumber: FC<Props> = ({
                                     min, max, onChange, placeholder,
                                     name, className, classNameWrap, label, control
                                 }) => {
    return (
        <FormItem control={control} name={name} label={label} className={classNameWrap}>
            <Controller control={control} render={
                ({ field }) => (
                    <InputNumber min={min} max={max} {...field} onChange={onChange} placeholder={placeholder}
                                 className={className}/>)
            } name={name}/>
        </FormItem>
    )
}

export default GInputNumber;