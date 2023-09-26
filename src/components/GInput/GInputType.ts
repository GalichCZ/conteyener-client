import { Control } from "react-hook-form";

export interface GInputType {
    className?: string;
    classNameWrap?: string;
    placeholder: string;
    name: string;
    label: string;
    type?: string;
    control: Control<any>;
}