import React from "react";
import { Button, Form } from "antd";
import { SubmitHandler, useForm } from "react-hook-form";
import GInputs from "@/components/GInput/GInputs.ts";
import { Dayjs } from "dayjs";
import { cleanUpMap } from "@/utils/cleanUpMap.ts";

interface FormValues {
    number: number;
    text: string;
    date: string | Dayjs;

    [key: string]: string | number | Dayjs | undefined;
}

const CreateBid = () => {
    const { handleSubmit, control, setValue } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(cleanUpMap(data));
    }

    return (
        <Form className="w-1/2 border-2 border-amber-950 p-4" onFinish={handleSubmit(onSubmit)}>
            <GInputs.Number control={control} min={0} max={10} placeholder="number" name="number"
                            label="number"/>
            <GInputs.Text control={control} placeholder="text" name="text" label="text"/>
            <GInputs.Date control={control} placeholder="date" name="date" label="date"/>
            <GInputs.Array setValue={setValue} control={control} placeholder="array" name="array"
                           label="array"/>
            <Button htmlType="submit">Submit</Button>
        </Form>
    )
}

export default CreateBid;