import React, { useEffect, useState } from 'react';
import TableHead from "@/features/Table/UI/TableHead.tsx";
import TableBody from "@/features/Table/UI/TableBody.tsx";
import GDrawer from "@/features/Table/Components/Drawer/GDrawer.tsx";
import PageHandler from "@/features/Table/UI/PageHandler.tsx";
import { useGetBidsQuery } from "@/store";
import { useAppSelector } from "@/hooks/hooksRedux.ts";
import { displayMessage } from "@/utils/displayMessage.ts";
import FillingSkeleton from "@/components/UI/FillingSkeleton.tsx";

//TODO: finish the update modal
// make all dates set time 13:00 (dayjs)
const Table = () => {
    const [page, setPage] = useState(1);
    const reDraw = useAppSelector(state => state.reDraw.reDraw)

    const { isLoading, data, error, isFetching } = useGetBidsQuery({ page, reDraw });

    const decrementPage = () => {
        if (page === 1) return;
        setPage(prev => prev - 1);
    }
    const incrementPage = () => {
        if (page === data.totalPages) return;
        setPage(prev => prev + 1);
    }

    useEffect(() => {
        if (error) {
            displayMessage(error.toString())
        }
    }, [error]);

    return (
        <>
            <GDrawer/>
            <div id="table2" className="w-[95%] bg-white mt-8 h-[85%] overflow-auto shadow-2xl">
                {isLoading || isFetching && <FillingSkeleton/>}
                <table className="relative">
                    <TableHead/>
                    <TableBody bids={data?.items}/>
                </table>
            </div>
            <PageHandler decrementPage={decrementPage} incrementPage={incrementPage} page={page}
                         totalPages={data?.totalPages ?? 0}/>
        </>
    )
}

export default Table;