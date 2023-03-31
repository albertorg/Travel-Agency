import React from 'react'
import { Backdrop } from '@mui/material'
import './styles.css'
import { useForm } from '../../../hooks/useForm'
import { MdOutlineClose } from 'react-icons/md'


export const AuthForm = ({open, formType = 'login'}) => {

  const [values, handleInputChange] = useForm({
    email: '',
    password: ''
  })

  return (
    <Backdrop
      sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        alignItems: 'flex-start'
      }}
      open={open}
    >
      <div className='modal-dialog' role='document'>
        <div className="modal-header">
          {formType === 'signup' && <span>Signup</span>}
          {formType === 'login' && <span>Login</span>}
          <button>
            <MdOutlineClose />
          </button>
        </div>

        <div className="modal-body">
          
        </div>
      </div>
    </Backdrop>
  )
}
