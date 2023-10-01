import { Input } from "antd";
import React, { ChangeEvent, FC } from "react";
import { GInputType } from "../types/GInputType.ts";
import { FormItem } from "react-hook-form-antd";
import { Controller } from "react-hook-form";

interface Props extends GInputType {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const GInputText: FC<Props> = ({
                                   name, label, placeholder,
                                   className, classNameWrap, control, type
                               }) => {
    return (
        <FormItem name={name} control={control} label={label} className={classNameWrap}>
            <Controller control={control} render={
                ({ field }) => <Input type={type} className={className} placeholder={placeholder} {...field}/>
            } name={name}/>
        </FormItem>
    );
}

export default GInputText;