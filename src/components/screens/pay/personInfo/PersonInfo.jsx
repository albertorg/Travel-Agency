import React, { useEffect, useState } from 'react'
import passport from '../../../../assets/payment/Blue_Passport.svg'
import PhoneInput from 'react-phone-number-input'
import { useForm } from '../../../../hooks/useForm'
import { useDispatch } from 'react-redux'
import { setholderBook } from '../../../../store/slices/booking-slice'
import 'react-phone-number-input/style.css'
import './styles.css'

const formData = {
  name: 'Julio',
  surname: 'Cesar',
  email: 'alberto@gmail.com'
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const formValidations = {
  name: [(value) => value.length > 2, 'Insert the name'],
  surname: [(value) => value.length > 2, 'Insert your last name'],
  email: [(value) => emailRegex.test(value), 'Insert a valid email'],
}

export const PersonInfo = ({ setIsValidPersonInfo, formSubmitted }) => {

  const [phoneNumber, setPhoneNumber] = useState('+39 312 123 1233')
  const dispatch = useDispatch()
  const { name, surname, email, onInputChange, isFormValid, nameValid, surnameValid, emailValid} = useForm(formData, formValidations)

  useEffect(() => {
    if (isFormValid && phoneNumber > 4) {
      return setIsValidPersonInfo(true)
    }

    setIsValidPersonInfo(false)
  }, [isFormValid, phoneNumber])
  

  useEffect(() => {
    let phone = ''
    if (phoneNumber > 0) {
      phone = phoneNumber.slice(1)
    }

    dispatch(setholderBook({name, surname, email, phone}))
  }, [name, surname, email, phoneNumber, dispatch])
  

  return (
    <section >

      <div className='recordatory'>
        <img src={passport} alt="passport" />

        <div className='info-recordatory'>
          <h3>Remember to check the details</h3>
          <span>
            Make sure the information you enter is identical to the 
            information on the travelers ID card or passport.
          </span>
        </div>
      </div>

      <div className='formPerson-container'>
        <span>Who's booking?</span>
        
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id='name'
              name='name'
              value={name}
              onChange={onInputChange}
            />
            {(nameValid && formSubmitted ) &&
              <span className='errorMessage'>{nameValid}</span>
            }
          </div>
          <div>
            <label htmlFor="surname">Surname</label>
            <input 
              type="text" 
              id='surname'
              name='surname'
              value={surname}
              onChange={onInputChange}
            />
            {(surnameValid && formSubmitted ) &&
              <span className='errorMessage'>{surnameValid}</span>
            }
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <span>We will send confirmation of the reservation to this address.</span>
            <input 
              type="email" 
              id='email'
              name='email'
              value={email}
              onChange={onInputChange}
            />
            {(emailValid && formSubmitted) &&
              <span className='errorMessage'>{emailValid}</span>
            }
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <span>We will only contact you if there are any updates on your trip.</span>
            <PhoneInput
              defaultCountry="IT"
              id='phone'
              name='phone'
              value={phoneNumber}
              onChange={setPhoneNumber}
            />
          </div>
        </form>
      </div>

    </section>
  )
}
