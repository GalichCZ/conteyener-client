import React from "react";
import { FormItem } from "react-hook-form-antd";
import { GInputType } from "@/components/GInput/types/GInputType.ts";
import { Controller, FieldValues } from "react-hook-form";


function GInputArea<T extends FieldValues>({ name, label, className, classNameWrap, control }: GInputType<T>) {
    return (
        <FormItem control={control} name={name} className={classNameWrap} label={label}>
            <Controller name={name} render={
                ({ field: { value } }) => <input className={className} checked={value} type="checkbox"/>
            } control={control}/>
        </FormItem>
    )
}

export default GInputArea