import React, { FC } from "react";
import { Button, Form } from "antd";
import { Colors } from "@/assets/colors.ts";

interface Props {
    text: string;
    className?: string;
    classNameWrap?: string;
}

const GButton: FC<Props> = ({ text, className, classNameWrap }) => {
    return (
        <Form.Item className={classNameWrap}>
            <Button id="g-button" style={{ background: Colors.PATRIOT }} className={`text-white ${className}`}
                    htmlType="submit">
                {text}
            </Button>
        </Form.Item>
    )
}

export default GButton;