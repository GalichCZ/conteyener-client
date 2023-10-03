import React, { FC } from "react";
import Button from "@/components/UI/Button.tsx";

interface Props {
    onClick: () => void;
}

const CreateStoreButton: FC<Props> = ({ onClick }) => {
    return (
        <div className="p-4">
            <Button onClick={onClick} type="primary" text="Создать склад"
                    className="hover:scale-105 transition-all ease-linear duration-75"/>
        </div>
    );
}

export default CreateStoreButton;