import React from 'react'
import { GInputType } from "@/components/GInput/types/GInputType.ts";
import { ConfigProvider, DatePicker, DatePickerProps } from "antd";
import { FormItem } from "react-hook-form-antd";
import { Controller, FieldValues } from "react-hook-form";
import { theme } from "@/assets/antdConfig.ts";

interface Props<T extends FieldValues> extends GInputType<T> {
    onChange?: DatePickerProps['onChange']
}

function GInputDate<T extends FieldValues>({
                                               classNameWrap, className,
                                               name, placeholder, label, control
                                           }: Props<T>) {

    return (
        <FormItem control={control} className={classNameWrap} name={name} label={label}>
            <Controller control={control} render={
                ({ field }) =>
                    <ConfigProvider theme={{ ...theme }}>
                        <DatePicker format="DD-MM-YYYY" placeholder={placeholder}
                                    className={className} {...field}/>
                    </ConfigProvider>

            } name={name}/>
        </FormItem>
    )
}

export default GInputDate