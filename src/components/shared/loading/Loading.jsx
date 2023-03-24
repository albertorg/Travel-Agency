import React, { useState } from 'react'
import { Backdrop, CircularProgress } from '@mui/material'


export const Loading = (open) => {
    // const [open, setOpen] = useState(false)


    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}
