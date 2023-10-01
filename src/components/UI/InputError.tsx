import React, { FC } from "react";

interface Props {
    children: React.ReactNode;
}

const InputError: FC<Props> = ({ children }) => {
    return (
        <span className="text-red-500">{children}</span>
    )
}

export default InputError;