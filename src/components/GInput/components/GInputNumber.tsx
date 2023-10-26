import React from "react";
import { InputNumber } from "antd";
import { GInputType } from "../types/GInputType.ts";
import { FormItem } from "react-hook-form-antd";
import { Controller, FieldValues } from "react-hook-form";

interface Props<T extends FieldValues> extends GInputType<T> {
    min: number;
    max: number;
}

function GInputNumber<T extends FieldValues>({
                                                 min, max, placeholder,
                                                 name, className, classNameWrap, label, control
                                             }: Props<T>) {
    return (
        <FormItem control={control} name={name} label={label} className={classNameWrap}>
            <Controller control={control} render={
                ({ field }) => (
                    <InputNumber min={min} max={max} {...field} placeholder={placeholder}
                                 className={className}/>)
            } name={name}/>
        </FormItem>
    )
}

export default GInputNumber;