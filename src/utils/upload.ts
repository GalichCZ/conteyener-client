import { UploadProps } from "antd";
import { displayMessage } from "@/utils/displayMessage.ts";
import { setReDraw } from "@/store";
import { Dispatch } from "react";
import { AnyAction } from "@reduxjs/toolkit";

export const upload = (action: string, dispatch: Dispatch<AnyAction>): UploadProps => {
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
                dispatch(setReDraw());
            } else if (info.file.status === 'error') {
                displayMessage(`${info.file.name} файл не загружен`);
            }
        },
    }
}