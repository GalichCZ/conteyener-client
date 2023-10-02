import React, { FC, ReactNode } from "react";

interface Props {
    children: ReactNode
    className?: string
}

const RowWrapper: FC<Props> = ({ children, className }) => {
    return (
        <div className={`flex w-full justify-between border-b-gray-200 ${className}`}>{children}</div>
    );
}

export default RowWrapper;