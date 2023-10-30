import React, { FC, FormEvent } from "react";
import { Colors } from "@/assets/colors.ts";

interface Props {
    text: string;
    className?: string;
    disabled?: boolean;
    onClick?: (e?: FormEvent) => void;
    type?: "primary" | "delete";
}

const Button: FC<Props> = ({ text, type, disabled, className, onClick }) => {
    const getButtonStyles = () => {
        if (type === "primary") {
            return { backgroundColor: Colors.PATRIOT, color: "#fff" }
        }
        if (type === "delete") {
            return { backgroundColor: Colors.DELETE, border: `solid 2px ${Colors.DELETE_BORDER}`, color: "#fff" }
        }
        return {};
    }

    return (<button onClick={onClick} disabled={disabled}
                    style={getButtonStyles()}
                    className={`${className} shadow-2xl rounded-md px-4 py-1`}>{text}</button>);
};

export default Button;
