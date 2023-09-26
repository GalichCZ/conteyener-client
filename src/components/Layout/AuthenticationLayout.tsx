import React, { FC } from "react";
import { Form } from "antd";
import FillingSkeleton from "@/components/FillingSkeleton.tsx";

interface Props {
    children: React.ReactNode
    onFinish: () => void
    className?: string
    isLoading?: boolean
}

const AuthenticationLayout: FC<Props> = ({ children, onFinish, className, isLoading }) => {
    return (
        <Form layout="vertical" className={`bg-white relative shadow-2xl p-6 rounded-2xl w-[450px] ${className}`}
              onFinish={onFinish}>
            {isLoading && <FillingSkeleton/>}
            {children}
        </Form>
    )
}

export default AuthenticationLayout;