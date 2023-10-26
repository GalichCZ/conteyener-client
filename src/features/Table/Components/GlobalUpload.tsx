import React from "react";
import { upload } from "@/utils/upload.ts";
import { useDispatch } from "react-redux";
import { Upload } from "antd";
import Button from "@/components/UI/Button.tsx";

const GlobalUpload = () => {
    const dispatch = useDispatch();
    const props = upload(`${import.meta.env.VITE_API_URL}/item/global`, dispatch);
    return (
        <Upload {...props}>
            <Button className="w-[170px]" text="Глобальная загрузка" type="primary"/>
        </Upload>
    )
}

export default GlobalUpload;