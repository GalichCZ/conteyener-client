import React, { FC } from "react";
import { FormItem } from "react-hook-form-antd";
import { GInputType } from "@/components/GInput/GInputType.ts";
import { ConfigProvider, Select, Tooltip } from "antd";
import { Controller } from "react-hook-form";
import InputSkeleton from "@/components/UI/InputSkeleton.tsx";
import { theme } from "@/assets/antdConfig.ts";

interface Props extends GInputType {
    values: string[];
    labels: string[];
    tooltips: string[];
    isLoading?: boolean;
}

const GInputSelect: FC<Props> = ({
                                     values,
                                     labels,
                                     tooltips,
                                     name,
                                     control,
                                     className,
                                     classNameWrap,
                                     label,
                                     placeholder,
                                     isLoading
                                 }) => {

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
                                <Select.Option key={index} value={value} label={labels[index]}>
                                    {tooltips.length > 0 ?
                                        <Tooltip destroyTooltipOnHide={true} title={tooltips[index]}>
                                            <p>{labels[index]}</p>
                                        </Tooltip>
                                        :
                                        <p>{labels[index]}</p>
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