import React, { FC } from 'react';

interface Props {
    children: React.ReactNode[];
}

const TableRow: FC<Props> = ({ children }) => {
    return <tr>{children}</tr>;
}

export default TableRow;