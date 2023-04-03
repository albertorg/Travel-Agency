import React, { useMemo, useState } from 'react'
import { Backdrop } from '@mui/material'
import { useForm } from '../../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { MdOutlineClose } from 'react-icons/md'
import google from '../../../assets/socilals/google.svg'
import facebook from '../../../assets/socilals/facebook.svg'
// import twitter from '../../../assets/socilals/twitter.svg'
import { checkingAuthentication, startOAthSignIn } from '../../../store/thunks/auth-thunks'
import './styles.css'

const formData = {
  email: 'ticoc911@gmail.com',
  password: '12345678'
}

const formValidations = {
  email: [(value) => value.includes('@'), 'Insert a valid email'],
  password: [(value) => value.length >= 8, 'The password must be at least 8 characters']
}


export const AuthForm = ({open, setOpen}) => {

  const dispatch = useDispatch()
  const { status } = useSelector(state => state.auth)

  const [formType, setFormType] = useState('login')
  const {email, password, onInputChange, emailValid, passwordValid } = useForm(formData, formValidations)
  
  
  console.log(passwordValid)

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(checkingAuthentication(email, password))
  }

  const onGoogleSignIn = () => {
    console.log('onGoogleSignIn')

    dispatch(startOAthSignIn('google'))
  }

  const onFacebookSignIn = () => {
    console.log('onFacebookSignIn')

    dispatch(startOAthSignIn('facebook'))
  }

  return (
    <Backdrop
      sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        alignItems: 'flex-start',
        overflowY: 'scroll'
      }}
      open={open}
    >
      <div className='modal-dialog' role='document'>
        <div className="modal-header">
          {formType === 'signup' && <span>Signup</span>}
          {formType === 'login' && <span>Login</span>}
          <button onClick={() => setOpen(false)} disabled={isAuthenticating}>
            <MdOutlineClose />
          </button>
        </div>

        <div className="modal-body">
          <div className='social-bottom-container'>
            <button name='google' onClick={ onGoogleSignIn } disabled={ isAuthenticating }>
              <img src={google} alt="google-logo" width='21' height='18'/>
              <span>Continue with Google</span> 
            </button>
            <button name='facebook' onClick={onFacebookSignIn} disabled={isAuthenticating}>
              <img src={facebook} alt="Facebook-logo" width='17' height='18' />
              <span>Continue with Facebook</span>
            </button>
            {/* <button name='twitter'>
              <img src={twitter} alt="twitter-logo" width='21' height='18' />
              <span>Continue with Twitter</span>
            </button> */}
          </div>

          <div className='separator'>
            <span>OR</span>
            <div className='line'></div>
          </div>

          <form 
            className='authForm'
            onSubmit={handleSubmit}
          >
            <div>
              <div className='forgot-password-input'>
                <label htmlFor="email-01">Email address</label>
                {formType === 'login' && <span>Forgot password?</span>}
              </div>
              <input
                type="email"
                name="email"
                id="email-01"
                placeholder='example@example.com'
                onChange={onInputChange}
                value={email}
              />
            </div>

            <div>
              <label htmlFor="password-01">Password</label>
              <input
                type="password"
                name="password"
                id="password-01"
                onChange={onInputChange}
                value={password}
              />
            </div>
            

            <button type="submit" disabled={isAuthenticating}>
              Continue
            </button>
          </form>

          {formType === 'login' && 
            <span className='change-type-auth-text'>
              New user?
              <button onClick={() => setFormType('signup')} >
                Create an account
                </button>
            </span>
          }
          
          {formType === 'signup' && 
            <span className='change-type-auth-text'>
              Already have an account?
              <button onClick={() => setFormType('login')} >
                Sign in
              </button>
            </span>
          }
          
        </div>
      </div>
    </Backdrop>
  )
}
