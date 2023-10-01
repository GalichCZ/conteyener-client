import React, { FC, FormEvent } from "react";

interface Props {
    text: string;
    className?: string;
    onClick?: (e?: FormEvent) => void;
}

const Button: FC<Props> = ({ text, className, onClick }) => {
    return (<button onClick={onClick} className={`${className} shadow-2xl rounded-md px-4 py-1`}>{text}</button>);
};

export default Button;
