import React, { useEffect } from "react";
import { useUpload } from "@/hooks/useUpload.ts";
import { useDispatch } from "react-redux";
import { Upload } from "antd";
import Button from "@/components/UI/Button.tsx";

const GlobalUpload = () => {
    const dispatch = useDispatch();
    const { uploadFile, response } = useUpload(`${import.meta.env.VITE_API_URL}/item/global`, dispatch);

    useEffect(() => {
        console.log(response)
    }, [response]);

    return (
        <Upload {...uploadFile()}>
            <Button className="w-[170px]" text="Глобальная загрузка" type="primary"/>
        </Upload>
    )
}

export default GlobalUpload;