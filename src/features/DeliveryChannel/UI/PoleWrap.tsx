import React, { FC } from "react";

interface Props {
    children: React.ReactNode;
    className?: string;
}

const PoleWrap: FC<Props> = ({ children, className }) => {
    return (
        <div className={`${className} w-[150px]`}>
            {children}
        </div>
    )
}

export default PoleWrap;