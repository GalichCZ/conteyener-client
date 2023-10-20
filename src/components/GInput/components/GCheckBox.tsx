import React, { FC } from "react";
import { FormItem } from "react-hook-form-antd";
import { GInputType } from "@/components/GInput/types/GInputType.ts";
import { Controller } from "react-hook-form";

const GInputArea: FC<GInputType> = ({
                                        name, label, className, classNameWrap, control
                                    }) => {
    return (
        <FormItem control={control} name={name} className={classNameWrap} label={label}>
            <Controller name={name} render={
                ({ field: { value } }) => <input className={className} checked={value} type="checkbox"/>
            } control={control}/>
        </FormItem>
    )
}

export default GInputArea