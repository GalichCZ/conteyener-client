import { Upload } from "antd";
import React, { FC } from "react";
import Button from "@/components/UI/Button.tsx";
import { useDispatch } from "react-redux";
import { upload } from "@/utils/upload.ts";

interface Props {
    bidId: string;
    simpleProductName: string;
}

const UploadButton: FC<Props> = ({ bidId, simpleProductName }) => {
    const dispatch = useDispatch();
    const props = upload(`${import.meta.env.VITE_API_URL}/product/${bidId}/${simpleProductName}`, dispatch);

    return (
        <Upload {...props}>
            <Button type="primary" className="mt-4 text-lg" text="Загрузить"/>
        </Upload>
    )
}

export default UploadButton;