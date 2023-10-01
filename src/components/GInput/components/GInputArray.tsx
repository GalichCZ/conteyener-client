import React, { FC, FormEvent, useCallback, useEffect, useState } from 'react';
import { GInputType } from "../types/GInputType.ts";
import { FormItem } from "react-hook-form-antd";
import { Input } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { v4 as uuidv4 } from 'uuid';
import { UseFormSetValue } from "react-hook-form";
import Button from "@/components/UI/Button.tsx";
import InputError from "@/components/UI/InputError.tsx";
import { InputRecord } from "@/components/GInput/types/InputRecord.ts";
import { useValidateCreateArray } from "@/components/GInput/hooks/useValidateCreateArray.ts";
import { useValidateFilledAllPoles } from "@/components/GInput/hooks/useValidateFilledAllPoles.ts";


interface Props extends GInputType {
    dataArray?: string[];
    isSubmitted?: boolean;
    isCreation?: boolean;
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
                                    placeholder,
                                    dataArray,
                                    isSubmitted,
                                    isCreation,
                                }) => {
    const [inputList, setInputList] = useState<InputRecord[]>([]);
    const existenceError = useValidateCreateArray({ inputList, isCreation })
    const isAllFilled = useValidateFilledAllPoles({ inputList, isSubmitted });

    const addDataToInputList = useCallback(() => {
        if (!dataArray) return;

        dataArray.forEach((data) => {
            const keyName = name + uuidv4();
            const newInput = { [keyName]: data };
            setValue(keyName, data);
            setInputList((prev) => [...prev, newInput]);
        })
    }, [dataArray, name, setValue]);

    useEffect(() => {
        return () => addDataToInputList();

    }, [addDataToInputList, dataArray, name]);

    const handleAddInput = (e: FormEvent | undefined) => {
        e?.preventDefault();
        const uuid = uuidv4();
        const newInputName = name + uuid;
        const toUpdate = [...inputList];
        const newInput = { [newInputName]: "" };
        toUpdate.push(newInput);
        setInputList(toUpdate);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, input: InputRecord, index: number) => {
        const keyName = Object.keys(input)[0];
        const { value } = e.target;
        const updatedList = [...inputList];
        updatedList[index] = { [keyName]: value };
        setInputList(updatedList);
    }

    const handleRemoveInput = (i: InputRecord, index: number) => {
        const keyName = Object.keys(i)[0];
        const newInputList = [...inputList]
        setValue(keyName, '');
        newInputList.splice(index, 1)
        setInputList(newInputList);
    }

    return (
        <div className="flex flex-col">
            <label>{label}</label>

            {inputList.map((_i, key) => (
                <FormItem key={key} className={`mb-0 w-full ${classNameWrap}`} control={control}
                          name={Object.keys(_i)[0]}>
                    <div className="flex mt-2">
                        <Input value={_i[Object.keys(_i)[0]]} onChange={(e) => {
                            handleInputChange(e, _i, key)
                        }} placeholder={placeholder} className={className}/>

                        <CloseOutlined onClick={() => handleRemoveInput(_i, key)}/>
                    </div>
                </FormItem>
            ))}

            <Button className="border-gray-300 bg-gray-200 max-w-fit mt-3 border-[1px]" text="Добавить поле"
                    onClick={(e) => handleAddInput(e)}/>

            {existenceError && isSubmitted && <InputError>Поля не могут отсутствовать</InputError>}
            {!isAllFilled && isSubmitted && <InputError>Все поля должны быть заполнены</InputError>}
        </div>
    )
}

export default GInputArray;