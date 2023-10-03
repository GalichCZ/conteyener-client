import React, { FC, FormEvent } from "react";
import { Colors } from "@/assets/colors.ts";

interface Props {
    text: string;
    className?: string;
    disabled?: boolean;
    onClick?: (e?: FormEvent) => void;
    type?: "primary";
}

const Button: FC<Props> = ({ text, type, disabled, className, onClick }) => {
    return (<button onClick={onClick} disabled={disabled}
                    style={type === "primary" ? { backgroundColor: Colors.PATRIOT, color: "#fff" } : {}}
                    className={`${className} shadow-2xl rounded-md px-4 py-1`}>{text}</button>);
};

export default Button;
