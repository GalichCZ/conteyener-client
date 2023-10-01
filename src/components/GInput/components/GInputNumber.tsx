import React, { FC } from "react";
import { InputNumber } from "antd";
import { GInputType } from "../types/GInputType.ts";
import { FormItem } from "react-hook-form-antd";

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
            <InputNumber min={min} max={max} onChange={onChange} placeholder={placeholder}
                         className={className}/>
        </FormItem>
    )
}

export default GInputNumber;