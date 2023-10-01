import React, { FC, useState } from "react";
import Button from "@/components/UI/Button.tsx";
import { createPortal } from "react-dom";
import CreateBidModal from "./CreateBidModal.tsx";

interface Props {
    triggerClose: () => void;
}

const CreateBidModalTrigger: FC<Props> = ({ triggerClose }) => {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => {
        setOpen((prev) => !prev);
    }

    const handleOnClick = () => {
        triggerClose();
        handleOpen();
    }

    return (
        <>
            <Button onClick={handleOnClick} text="Создать запись" className="border-2 border-gray-300"/>
            {open && createPortal(<CreateBidModal open={open}
                                                  handleOpen={handleOpen}/>, document.body)}
        </>
    )
}

export default CreateBidModalTrigger;