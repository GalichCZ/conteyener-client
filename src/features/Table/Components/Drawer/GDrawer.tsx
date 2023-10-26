import React, { useState } from 'react';
import GDrawerWrap from "./GDrawerWrap.tsx";
import CreateBidModalTrigger from "@/features/Table/Components/Modals/CreateBidModal/CreateBidModalTrigger.tsx";
import GlobalUpload from "@/features/Table/Components/GlobalUpload.tsx";
import UploadBids from "@/features/Table/Components/UploadBids.tsx";

const GDrawer = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setOpen((prev) => !prev);
    }

    return (
        <GDrawerWrap handleOpen={handleOpen} open={open}>
            <div className='flex flex-col gap-4'>
                <CreateBidModalTrigger triggerClose={handleOpen}/>
                <GlobalUpload/>
                <UploadBids/>
            </div>
        </GDrawerWrap>
    )
}

export default GDrawer;