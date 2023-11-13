import React, { useCallback, useEffect, useState } from "react";
import { useUpload } from "@/hooks/useUpload.ts";
import { useDispatch } from "react-redux";
import { Upload } from "antd";
import Button from "@/components/UI/Button.tsx";
import { usePostUpdatedDates } from "@/hooks/usePostUpdatedDates.ts";
import { handleError } from "@/utils/handleError.ts";
import { displayMessage } from "@/utils/displayMessage.ts";
import { createPortal } from "react-dom";
import FillingSkeleton from "@/components/UI/FillingSkeleton.tsx";

const UploadBids = () => {
    const dispatch = useDispatch();
    const { uploadFile, response } = useUpload(`${import.meta.env.VITE_API_URL}/item/upload`, dispatch);
    const { loading, success, error, updateDates } = usePostUpdatedDates();

    const [called, setCalled] = useState(false);

    const reloadPage = useCallback(() => {
        displayMessage("Страница будет перезагружена")
        setTimeout(() => {
            location.reload()
        }, 2000)
    }, [])

    useEffect(() => {
        if (response && !called) {
            updateDates(response);
            setCalled(true);
        }
    }, [called, response, updateDates]);

    useEffect(() => {
        if (error) {
            handleError(error);
            reloadPage();
        }
    }, [error, reloadPage]);

    useEffect(() => {
        if (success) {
            reloadPage();
        }
    }, [reloadPage, success]);

    return (
        <>
            {loading && createPortal(<FillingSkeleton/>, document.body)}
            <Upload {...uploadFile()}>
                <Button text="Загрузка слежений" type="primary" className="w-[170px]"/>
            </Upload>
        </>

    )
}

export default UploadBids;