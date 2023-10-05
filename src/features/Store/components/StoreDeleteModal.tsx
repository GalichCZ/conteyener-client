import React, { FC } from "react";
import { Modal } from "antd";
import Button from "@/components/UI/Button.tsx";

interface Props {
    open: boolean;
    setOpen: (value: boolean) => void;
}

const DeleteStoreModal: FC<Props> = ({ open, setOpen }) => {
    const handleOpen = () => {
        setOpen(false);
    }
    return (
        <Modal onCancel={handleOpen} open={open} footer={null}>
            <b>Удалить склад?</b>
            <Button text="Удалить"/>
            <Button onClick={handleOpen} text="Отменить"/>
        </Modal>
    )
}

export default DeleteStoreModal;