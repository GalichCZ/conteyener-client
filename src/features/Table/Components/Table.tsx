import React, { useEffect, useState } from 'react';
import TableHead from "@/features/Table/UI/TableHead.tsx";
import TableBody from "@/features/Table/UI/TableBody.tsx";
import GDrawer from "@/features/Table/Components/Drawer/GDrawer.tsx";
import PageHandler from "@/features/Table/UI/PageHandler.tsx";
import FillingSkeleton from "@/components/UI/FillingSkeleton.tsx";
import { useGetBids } from "@/features/Table/Hooks/useGetBids.ts";
import { handleError } from "@/utils/handleError.ts";

//TODO: finish the update modal
// make all dates set time 13:00 (dayjs)
const Table = () => {
    const [page, setPage] = useState(1);

    // const { isLoading, data, error, isFetching } = useGetBidsQuery({ page, reDraw });
    const { loading, bids, error, setError, pages } = useGetBids(page, false);

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
            <GDrawer/>
            <div id="table2" className="w-[95%] bg-white mt-8 h-[85%] overflow-auto shadow-2xl">
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