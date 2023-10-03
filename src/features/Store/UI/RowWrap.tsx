import React, { FC } from "react";

interface Props {
    children: React.ReactNode;
    className?: string;
}

const RowWrap: FC<Props> = ({ children, className }) => {
    return (
        <div className={`flex w-full border-b-2 border-b-gray-200 p-4 items-center justify-around ${className}`}>
            {children}
        </div>
    );
}

export default RowWrap;