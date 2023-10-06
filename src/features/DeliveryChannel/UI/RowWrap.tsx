import React, { FC } from "react";

interface Props {
    children: React.ReactNode;
    className?: string;
}

const RowWrap: FC<Props> = ({ children, className }) => {
    return (
        <div className={`${className} flex justify-between text-center items-center p-4 border-b-2 border-b-gray-200`}>
            {children}
        </div>
    );
}

export default RowWrap;