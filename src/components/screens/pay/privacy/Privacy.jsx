import React from 'react'
import { Checkbox } from '@mui/material';
import './styles.css'

export const Privacy = () => {

  const label = 'You consent, as per point 3. F. of the Privacy Policy, to receive personalized business proposals by mail, email, text message, telephone, or automatically processed online advertisements, including proposals and offers on products and services from us or selected third parties (with whom we do not share your information collected here). To revoke your consent, write to privacy.it@lastminutegroup.com. Show less'

  return (
    <section className='privacy-section'>
      <div className="acceptConditions-container styleCondition-container">
        <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
        
        <div className='label-check'>
          <span>Send me travel offers</span>
          <span>You consent, as per point 3. F. of the <button>Privacy Policy</button>.</span>
        </div>
      </div>

      <div className="linkConditions-container styleCondition-container">

        By clicking on "Book now for €{92.59}" you 
        proceed with payment and confirm that you have read and agree
        to the <button>Terms and Conditions</button> and the hotel's terms 
        and conditions regarding changes and cancellations, as well as 
        read the <button>Privacy Policy</button>. If you would like to opt out of receiving 
        our email newsletter regarding products and services similar to those you 
        are purchasing please write to support@funtravels.com
        
      </div>
    </section>
  )
}
