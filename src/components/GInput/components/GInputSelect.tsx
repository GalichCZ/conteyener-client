import React from "react";
import { FormItem } from "react-hook-form-antd";
import { GInputType } from "@/components/GInput/types/GInputType.ts";
import { ConfigProvider, Select, Tooltip } from "antd";
import { Controller, FieldValues } from "react-hook-form";
import InputSkeleton from "@/components/UI/InputSkeleton.tsx";
import { theme } from "@/assets/antdConfig.ts";
import { SelectOption } from "@/Types";

interface Props<T extends FieldValues> extends GInputType<T> {
    values: SelectOption[];
    tooltips: string[];
    isLoading?: boolean;
}

function GInputSelect<T extends FieldValues>({
                                                 values,
                                                 tooltips,
                                                 name,
                                                 control,
                                                 className,
                                                 classNameWrap,
                                                 label,
                                                 placeholder,
                                                 isLoading
                                             }: Props<T>) {

    if (isLoading) {
        return (<InputSkeleton/>);
    }

    return (
        <FormItem label={label} control={control} name={name} className={classNameWrap}>
            <Controller render={
                ({ field }) =>
                    <ConfigProvider
                        theme={{ ...theme }}
                    >
                        <Select
                            placeholder={placeholder} className={className} {...field}>
                            {values.map((value, index) => (
                                <Select.Option key={index} value={value.key} label={label}>
                                    {tooltips.length > 0 ?
                                        <Tooltip destroyTooltipOnHide={true} title={tooltips[index]}>
                                            <p>{value.value}</p>
                                        </Tooltip>
                                        :
                                        <p>{value.value}</p>
                                    }
                                </Select.Option>
                            ))}
                        </Select>
                    </ConfigProvider>

            } name={name} control={control}/>
        </FormItem>
    )

}

export default GInputSelect;