import React, { FC, useState } from 'react';
import { GInputType } from "./GInputType.ts";
import { FormItem } from "react-hook-form-antd";
import { Button, Input } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from 'uuid';
import { UseFormSetValue } from "react-hook-form";


type InputType = Record<string, string>

interface Props extends GInputType {
    setValue: UseFormSetValue<any>;
}

//TODO: change logic of inputs to save values after delete but avoid re-renders
const GInputArray: FC<Props> = ({
                                    setValue,
                                    control,
                                    name,
                                    className,
                                    classNameWrap,
                                    label,
                                    placeholder
                                }) => {
    const [inputList, setInputList] = useState<InputType[]>([]);

    const handleAddInput = () => {
        const uuid = uuidv4();
        const newInputName = name + uuid;
        const toUpdate = [...inputList];
        const newInput = { [newInputName]: "" };
        toUpdate.push(newInput);
        setInputList(toUpdate);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, input: InputType, index: number) => {
        const keyName = Object.keys(input)[0];
        const { value } = e.target;
        const updatedList = [...inputList];
        updatedList[index] = { [keyName]: value };
        setInputList(updatedList);
    }

    const handleRemoveInput = (i: InputType, index: number) => {
        const keyName = Object.keys(i)[0];
        const newInputList = [...inputList]
        setValue(keyName, '');
        newInputList.splice(index, 1)
        setInputList(newInputList);
    }

    return (
        <>
            {inputList.map((_i, key) => (
                <FormItem key={key} label={label} className={classNameWrap} control={control} name={Object.keys(_i)[0]}>
                    <div className="flex gap-1">
                        <Input value={_i[Object.keys(_i)[0]]} onChange={(e) => {
                            handleInputChange(e, _i, key)
                        }} placeholder={placeholder} className={className}/>
                        <CloseOutlined onClick={() => handleRemoveInput(_i, key)}/>
                    </div>
                </FormItem>
            ))}
            <Button onClick={handleAddInput}>Добавить поле</Button>
        </>
    )
}

export default GInputArray;