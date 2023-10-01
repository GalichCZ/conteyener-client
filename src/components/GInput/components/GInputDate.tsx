import React, { FC } from 'react'
import { GInputType } from "@/components/GInput/types/GInputType.ts";
import { ConfigProvider, DatePicker, DatePickerProps } from "antd";
import { FormItem } from "react-hook-form-antd";
import { Controller } from "react-hook-form";
import { theme } from "@/assets/antdConfig.ts";

interface Props extends GInputType {
    onChange?: DatePickerProps['onChange']
}

const GInputDate: FC<Props> = ({
                                   classNameWrap, className,
                                   name, placeholder, label, control
                               }) => {

    return (
        <FormItem control={control} className={classNameWrap} name={name} label={label}>
            <Controller control={control} render={
                ({ field }) =>
                    <ConfigProvider theme={{ ...theme }}>
                        <DatePicker format="DD-MM-YYYY" placeholder={placeholder}
                                    className={className} {...field}/>
                    </ConfigProvider>

            } name={name}/>
            {/*<DatePicker onChange={onChange} placeholder={placeholder} className={className}/>*/}
        </FormItem>
    )
}

export default GInputDate