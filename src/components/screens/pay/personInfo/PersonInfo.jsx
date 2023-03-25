import React from 'react'
import passport from '../../../../assets/payment/Blue_Passport.svg'
// import {Box, TextField} from '@mui/material'

import './styles.css'

export const PersonInfo = () => {
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
            <input type="text" id='name'/>
          </div>
          <div>
            <label htmlFor="surname">Surname</label>
            <input type="text" id='surname'/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <span>We will send confirmation of the reservation to this address.</span>
            <input type="email" id='email'/>
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <span>We will only contact you if there are any updates on your trip.</span>
            <input type="email" id='phone' />
          </div>
        </form>
      </div>

    </section>
  )
}
