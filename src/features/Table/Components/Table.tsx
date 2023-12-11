import React, { useEffect, useState } from 'react';
import TableHead from "@/features/Table/UI/TableHead.tsx";
import TableBody from "@/features/Table/UI/TableBody.tsx";
import GDrawer from "@/features/Table/Components/Drawer/GDrawer.tsx";
import PageHandler from "@/features/Table/UI/PageHandler.tsx";
import FillingSkeleton from "@/components/UI/FillingSkeleton.tsx";
import { handleError } from "@/utils/handleError.ts";
import Search from "@/features/Table/Components/Search/Search.tsx";
import { useGetBids } from "@/features/Table/hooks/useGetBids.ts";
import { useGetRoleType } from "@/hooks/useGetRoleType.ts";

const Table = ({ hidden }: { hidden: boolean }) => {
    const [page, setPage] = useState(1);
    const { loading, bids, error, setError, pages } = useGetBids(page, hidden);

    const roleType = useGetRoleType();

    const decrementPage = () => {
        if (page === 1) return;
        setPage(prev => prev - 1);
    }
    const incrementPage = () => {
        if (page === pages) return;
        setPage(prev => prev + 1);
    }

    useEffect(() => {
        if (error) {
            handleError(error);
            setError(null);
        }
    }, [error, setError]);

    return (
        <>
            {!hidden && roleType?.isRoleType8 && <GDrawer/>}
            <Search/>
            <div id="table2" className="w-[95%] bg-white mt-8 h-[83%] translate-y-[10px] overflow-auto shadow-2xl">
                {loading && <FillingSkeleton/>}
                <table className="relative">
                    <TableHead/>
                    <TableBody bids={bids}/>
                </table>
            </div>
            <PageHandler decrementPage={decrementPage} incrementPage={incrementPage} page={page}
                         totalPages={pages ?? 0}/>
        </>
    )
}

export default Table;