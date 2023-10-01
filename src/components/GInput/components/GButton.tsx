import React, { FC } from "react";
import { Button, Form } from "antd";
import { Colors } from "@/assets/colors.ts";

interface Props {
    text: string;
    className?: string;
    classNameWrap?: string;
    disabled?: boolean;
}

const GButton: FC<Props> = ({ text, className, classNameWrap, disabled }) => {
    return (
        <Form.Item className={classNameWrap}>
            <Button disabled={disabled} id="g-button" style={{ background: Colors.PATRIOT }}
                    className={`text-white ${className}`}
                    htmlType="submit">
                {text}
            </Button>
        </Form.Item>
    )
}

export default GButton;