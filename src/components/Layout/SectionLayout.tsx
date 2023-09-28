import React, { FC } from "react";

interface Props {
    children: React.ReactNode
    justify: "start" | "end" | "center" | "between" | "around" | "evenly"
    items: "start" | "end" | "center" | "baseline" | "stretch"
    className?: string
}

const SectionLayout: FC<Props> = ({ children, className, justify, items }) => {
    return (
        <section className={`h-screen w-full flex justify-${justify} items-${items} ${className}`}>
            {children}
        </section>
    )
}

export default SectionLayout;