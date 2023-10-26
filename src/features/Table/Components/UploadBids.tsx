import React from "react";
import { upload } from "@/utils/upload.ts";
import { useDispatch } from "react-redux";
import { Upload } from "antd";
import Button from "@/components/UI/Button.tsx";

const UploadBids = () => {
    const dispatch = useDispatch();
    const props = upload(`${import.meta.env.VITE_API_URL}/item/upload`, dispatch);
    return (
        <Upload {...props}>
            <Button text="Загрузка слежений" type="primary" className="w-[170px]"/>
        </Upload>
    )
}

export default UploadBids;