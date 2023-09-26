import React, { FC } from "react";

interface Props {
    children: React.ReactNode
    className?: string
}

const SectionLayout: FC<Props> = ({ children, className }) => {
    return (
        <section className={`h-screen w-full flex justify-center items-center ${className}`}>
            {children}
        </section>
    )
}

export default SectionLayout;