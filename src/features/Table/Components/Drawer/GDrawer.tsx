import React, { useState } from 'react';
import GDrawerWrap from "./GDrawerWrap.tsx";
import CreateBidModalTrigger from "@/features/CreateBidModal/CreateBidModalTrigger.tsx";
import UploadBids from "@/features/Table/Components/UploadBids.tsx";
import DownloadExcel from "@/features/Table/Components/DownloadExcel.tsx";

const GDrawer = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setOpen((prev) => !prev);
    }

    return (
        <GDrawerWrap handleOpen={handleOpen} open={open}>
            <div className='flex flex-col gap-4'>
                <CreateBidModalTrigger triggerClose={handleOpen}/>
                {/*<GlobalUpload/>*/}
                <UploadBids/>
                <DownloadExcel setOpen={setOpen}/>
            </div>
        </GDrawerWrap>
    )
}

export default GDrawer;