import { Input } from "antd";
import React, { ChangeEvent, FC } from "react";
import { GInputType } from "./GInputType.ts";
import { FormItem } from "react-hook-form-antd";

interface Props extends GInputType {
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const GInputText: FC<Props> = ({
                                   onChange, name, label, placeholder,
                                   className, classNameWrap, control, type
                               }) => {
    return (
        <FormItem name={name} control={control} label={label} className={classNameWrap}>
            <Input.Password type={type} className={className} onChange={onChange} placeholder={placeholder}/>
        </FormItem>
    );
}

export default GInputText;