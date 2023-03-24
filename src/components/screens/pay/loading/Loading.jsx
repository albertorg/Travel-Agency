import React from 'react'
import { Box, LinearProgress } from '@mui/material'
import logo from '../../../../assets/funtravels_logo_transparent_small.png'
import { BsCreditCard } from 'react-icons/bs'
import './styles.css'

export const Loading = (open) => {
    
    return (
        <div className='loading-container '>
            <div className='main_container loading-toPay'>
                <img src={logo} alt="Logo" />

                <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>

                <span>You are in the right direction of travel</span>

                <div className="textInfo">
                    <div className='textInfo-icon'>
                        <BsCreditCard />
                    </div>

                    <span>
                        We are calculating your estimate. In a little while you will be able to add
                        passenger data and all the services you need.
                    </span>
                </div>
            </div>
              
        </div>
    )
}
