import { InputRecord } from "../types/InputRecord.ts";
import { useEffect, useState } from "react";

interface Params {
    isCreation: boolean | undefined;
    inputList: InputRecord[];
}

export const useValidateCreateArray = ({ isCreation, inputList }: Params) => {
    const [existenceError, setExistenceError] = useState<boolean>(false);

    useEffect(() => {
        if (isCreation && inputList.length === 0) {
            setExistenceError(true)
        }

        if (isCreation && inputList.length > 0) {
            setExistenceError(false)
        }
    }, [inputList.length, isCreation]);

    return existenceError;
}