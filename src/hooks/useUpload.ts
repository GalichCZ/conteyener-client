import { UploadProps } from "antd";
import { displayMessage } from "@/utils/displayMessage.ts";
import { setReDraw } from "@/store";
import { Dispatch, useState } from "react";
import { AnyAction } from "@reduxjs/toolkit";

export const useUpload = (action: string, dispatch: Dispatch<AnyAction>) => {
    const [response, setResponse] = useState<[] | null>(null);

    const uploadFile = (): UploadProps => {
        return {
            name: 'file',
            action,
            headers: {
                authorization: 'authorization-text',
            },
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    displayMessage(`${info.file.name} файл загружается...`);
                }
                if (info.file.status === 'done') {
                    displayMessage(`${info.file.name} файл успешно загружен`);
                    setResponse(info.file.response)
                    dispatch(setReDraw());
                } else if (info.file.status === 'error') {
                    displayMessage(`${info.file.name} файл не загружен`);
                }
            },
        }
    }

    return { response, uploadFile }
}