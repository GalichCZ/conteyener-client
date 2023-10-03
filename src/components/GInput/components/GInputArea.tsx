import React, { FC } from "react";
import { FormItem } from "react-hook-form-antd";
import { GInputType } from "@/components/GInput/types/GInputType.ts";
import { Controller } from "react-hook-form";
import { Input } from "antd";

const GInputArea: FC<GInputType> = ({
                                        name, label, placeholder, className
                                        , classNameWrap, control
                                    }) => {
    return (
        <FormItem control={control} name={name} className={classNameWrap} label={label}>
            <Controller control={control} render={
                ({ field }) => <Input.TextArea className={className} placeholder={placeholder} {...field}/>
            } name={name}/>
        </FormItem>
    )
}

export default GInputArea