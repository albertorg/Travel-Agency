import React from 'react'
import { IoIosLock } from 'react-icons/io'
import './styles.css'

export const Submit = () => {

  return (
    <section className='submit-container'>
      <button>Book now for 92.59 €</button>
      
      <div className='ssl-container'>
        <IoIosLock />
        <span>Data protected with <strong>SSL encryption</strong> </span>
      </div>
    </section>
  )
}
