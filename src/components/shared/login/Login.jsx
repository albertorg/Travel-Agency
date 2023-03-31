import React from 'react'
import { CircularProgress, Backdrop } from '@mui/material'
import './styles.css'

export const Login = ({type}) => {
  return (
    <Backdrop
      sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
      open={checkingPayment}
    >
      <div className='payment-verify'>
        <CircularProgress />
        <span>Verifying payment</span>
      </div>
    </Backdrop>
  )
}
