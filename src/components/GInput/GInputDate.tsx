import React, { FC } from 'react'
import { GInputType } from "@/components/GInput/GInputType.ts";
import { DatePicker, DatePickerProps } from "antd";
import { FormItem } from "react-hook-form-antd";

interface Props extends GInputType {
    onChange?: DatePickerProps['onChange']
}

const GInputDate: FC<Props> = ({
                                   onChange, classNameWrap, className,
                                   name, placeholder, label, control
                               }) => {

    return (
        <FormItem control={control} className={classNameWrap} name={name} label={label}>
            <DatePicker onChange={onChange} placeholder={placeholder} className={className}/>
        </FormItem>
    )
}

export default GInputDate