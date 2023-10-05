import React, { FC } from "react";
import { Modal } from "antd";

interface Props {
    open: boolean
    setOpen: (open: boolean) => void
}

const DeliveryChannelCreateModal: FC<Props> = ({ open, setOpen }) => {
    const handleOpen = () => {
        setOpen(false);
    }

    return (
        <Modal footer={null} title="Создание канала поставки" open={open} onCancel={handleOpen}>

        </Modal>
    );
}

export default DeliveryChannelCreateModal;