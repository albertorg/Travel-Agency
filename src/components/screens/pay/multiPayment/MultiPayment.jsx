import React from 'react'
import { Radio, RadioGroup, useRadioState } from "ariakit/radio";
import geoTrust from '../../../../assets/payment/geotrust_secure.svg'
import visa from '../../../../assets/payment/visa.svg'
import mastercard from '../../../../assets/payment/mastercard.svg'
import amex from '../../../../assets/payment/amex.svg'
import diners from '../../../../assets/payment/diners.svg'
import jcb from '../../../../assets/payment/jcb.svg'
import mastercardSec from '../../../../assets/payment/mastercard_securitycode.svg'
import visaVerified from '../../../../assets/payment/visa_secure.svg'
import amexSafekey from '../../../../assets/payment/amex_safekey.png'
import { usePaymentInputs } from 'react-payment-inputs'
import { useForm } from '../../../../hooks/useForm';
import './styles.css'

export const MultiPayment = () => {

  const [values, handleInputChange] = useForm({
    name: '',
    cardNumber: '',
    expiryDate: '',
    cvc: ''
  })
  const { name, cardNumber, expiryDate, cvc } = values
  const radio = useRadioState()
  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs()
  console.log(meta)

  return (
    <section className='payment-section'>
      <div className='header-method-payment'>
        <h3>How do you prefer to pay?</h3>
        <img src={geoTrust} alt="geoTrust" />
      </div>

      <RadioGroup state={radio}>
        <div className='creditCard-container'>
          <Radio value='creditCard' checked/>

          <div className='creditCard'>
            <div className='creditDebit'>
              <span>Credit/debit card</span>
              <div className='creditCards-images'>
                <img src={visa} alt="visa" />
                <img src={mastercard} alt="mastercard" />
                <img src={amex} alt="amex" />
                <img src={diners} alt="diners" />
                <img src={jcb} alt="jcb" />
              </div>
            </div>

            <input value={name} name='name' onChange={handleInputChange} className='bigInput'/>
            <input {...getCardNumberProps({ onChange: handleInputChange })} value={cardNumber} className='bigInput'/>
            <input {...getExpiryDateProps({ onChange: handleInputChange })} value={expiryDate} className='expiry' />
            <input {...getCVCProps({ onChange: handleInputChange })} value={cvc} className='cvc' />
            {meta.isTouched && meta.error && <span>Error: {meta.error}</span>}

            <div className='secure-images'>
              <img src={mastercardSec} alt="mastercard_sec" />
              <img src={visaVerified} alt="visa_verified" />
              <img src={amexSafekey} alt="amex_safekey" />
            </div>

          </div> 
        </div>
      </RadioGroup>
    </section>
  )
}
