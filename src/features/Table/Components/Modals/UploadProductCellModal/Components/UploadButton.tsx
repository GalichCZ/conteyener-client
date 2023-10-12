import { Upload, UploadProps } from "antd";
import React, { FC } from "react";
import Button from "@/components/UI/Button.tsx";
import { displayMessage } from "@/utils/displayMessage.ts";
import { useDispatch } from "react-redux";
import { setReDraw } from "@/store";

interface Props {
    bidId: string;
    simpleProductName: string;
}

const UploadButton: FC<Props> = ({ bidId, simpleProductName }) => {
    const dispatch = useDispatch();
    const props: UploadProps = {
        name: 'file',
        action: `${import.meta.env.VITE_API_URL}/product/${bidId}/${simpleProductName}`,
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
    };

    return (
        <Upload {...props}>
            <Button type="primary" className="mt-4 text-lg" text="Загрузить"/>
        </Upload>
    )
}

export default UploadButton;