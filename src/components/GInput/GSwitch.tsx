import React, { FC } from "react";
import { Switch } from "antd";
import { GInputType } from "@/components/GInput/GInputType.ts";
import { Controller } from "react-hook-form";
import { FormItem } from "react-hook-form-antd";

const GSwitch: FC<GInputType> = ({ control, className, classNameWrap, name, label }) => {
    return (
        <FormItem valuePropName="checked" label={label} control={control} name={name} className={classNameWrap}>
            <Controller
                render={
                    ({ field }) => <Switch id="g-switch" className={className} {...field}/>
                } name={name} control={control}/>
        </FormItem>
    )
}

export default GSwitch;