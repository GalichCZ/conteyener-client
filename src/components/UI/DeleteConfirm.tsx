import React, { FC } from "react";
import Button from "@/components/UI/Button.tsx";

interface Props {
    handleDelete: () => void;
    handleOpen: () => void;
    theme: string
}

const DeleteConfirm: FC<Props> = ({ handleDelete, theme, handleOpen }) => {
    return (
        <div className="flex flex-col">
            <b className="text-lg">Удалить {theme}?</b>
            <div className="w-1/2 mt-10 flex justify-between">
                <Button onClick={handleDelete} text="Удалить"
                        type="delete"/>
                <Button onClick={handleOpen} className="border-2 border-gray-300" text="Отменить"/>
            </div>
        </div>
    )
}

export default DeleteConfirm;