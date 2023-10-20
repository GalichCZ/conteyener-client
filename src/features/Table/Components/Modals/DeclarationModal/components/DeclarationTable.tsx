import React, { FC, useEffect } from "react";
import DeclarationTableHead from "@/features/Table/Components/Modals/DeclarationModal/UI/DeclarationTableHead.tsx";
import DeclarationTableBody from "@/features/Table/Components/Modals/DeclarationModal/UI/DeclarationTableBody.tsx";
import {
    useGetDeclarationStatuses
} from "@/features/Table/Components/Modals/DeclarationModal/hooks/useGetDeclarationStatuses.ts";
import { handleError } from "@/utils/handleError.ts";

interface Props {
    declarationNumber: string;
}

const DeclarationTable: FC<Props> = ({ declarationNumber }) => {
    const { error, setError, statuses, loading } = useGetDeclarationStatuses(declarationNumber);

    useEffect(() => {
        if (error) {
            handleError(error);
            setError(null);
        }
    }, [error, setError]);

    return (
        <table>
            <DeclarationTableHead/>
            {loading ? <tr>
                    <td colSpan={4}>Загрузка...</td>
                </tr> :
                <DeclarationTableBody declarations={statuses}/>}
        </table>
    )
}

export default DeclarationTable;