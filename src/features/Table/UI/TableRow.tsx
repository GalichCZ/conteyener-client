import React, { FC } from 'react';

interface Props {
    children: React.ReactNode;
    className?: string
}

const TableRow: FC<Props> = ({ children, className }) => {
    return <tr className={className}>{children}</tr>;
}

export default TableRow;