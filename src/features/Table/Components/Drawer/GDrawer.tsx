import React, { useState } from 'react';
import GDrawerWrap from "./GDrawerWrap.tsx";
import CreateBidModalTrigger from "@/features/Table/Components/Modals/CreateBidModal/CreateBidModalTrigger.tsx";

const GDrawer = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setOpen((prev) => !prev);
    }

    return (
        <GDrawerWrap handleOpen={handleOpen} open={open}>
            <CreateBidModalTrigger triggerClose={handleOpen}/>
        </GDrawerWrap>
    )
}

export default GDrawer;