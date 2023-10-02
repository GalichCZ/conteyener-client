import React, { FC, FormEvent } from "react";

interface Props {
    text: string;
    className?: string;
    disabled?: boolean;
    onClick?: (e?: FormEvent) => void;
}

const Button: FC<Props> = ({ text, disabled, className, onClick }) => {
    return (<button onClick={onClick} disabled={disabled}
                    className={`${className} shadow-2xl rounded-md px-4 py-1`}>{text}</button>);
};

export default Button;
