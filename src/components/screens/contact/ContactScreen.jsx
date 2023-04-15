import React, { useState } from 'react'
import { SlPhone } from 'react-icons/sl'
import { TfiEmail } from 'react-icons/tfi'
import { BsPinMap } from 'react-icons/bs'
import { HeroPage } from '../../shared/hero-page/HeroPage'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { execFunctionSendEmail } from '../../../appwrite/providers'
import { useForm } from '../../../hooks/useForm'
import './styles.css'


const formData = {
  name: '',
  email: '',
  message: ''
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const formValidations = {
  name: [(value) => value.length > 6, 'Insert full name'],
  email: [(value) => emailRegex.test(value), 'Insert a valid email'],
  message: [(value) => value.length > 2, 'Empty message']
}

export const ContactScreen = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const {
    name,
    email,
    message,
    nameValid,
    emailValid,
    messageValid,
    isFormValid,
    onInputChange,
    onResetForm
  } = useForm(formData, formValidations)

  const handleSubmit = async(e) => {
    e.preventDefault()
    setFormSubmitted(true)

    if (!isFormValid) return

    await execFunctionSendEmail(JSON.stringify({name, email, message}))
    console.log('submit') 
  }

  return (
    <>
      <HeroPage title='Contact Us' />

      <main className='contact-main-container main_container'>
        <section className='contact-container'>
          <div className='contact-info-container'>
            <h3>Get In Touch</h3>
            <p>
              Feel free to contact us by telephone or email and
              we will be sure to get back to you as soon as possible.
            </p>
            <div className='socials-container'>
              <a href="https://facebook.com"> 
                <FaFacebookF /> 
              </a>
              <a href="https://instagram.com"> 
                <AiFillInstagram /> 
              </a>
              <a href="https://twitter.com"> 
                <AiOutlineTwitter /> 
              </a>
            </div>
          </div>

          <div className='contact-form-container'>
            <h3>Contact Us</h3>
            <form className='contact-form' onSubmit={handleSubmit}>
              <fieldset className='fieldset-container'>
                <label htmlFor="full-name">Full name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="full-name" 
                  value={name}
                  onChange={onInputChange}
                />
                {(nameValid && formSubmitted) &&
                  <span className='formErrorMessage'>{nameValid}</span>
                }
              </fieldset>

              <fieldset className='fieldset-container'>
                <label htmlFor="full-name">Email address</label>
                <input
                  type="email" 
                  name="email" 
                  id="email"
                  value={email}
                  onChange={onInputChange} 
                />
                {(emailValid && formSubmitted) &&
                  <span className='formErrorMessage'>{emailValid}</span>
                }
              </fieldset>

              <fieldset className='fieldset-container'>
                <label htmlFor="message">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  cols="30" 
                  rows="8" 
                  value={message}
                  onChange={onInputChange}
                />
                {(messageValid && formSubmitted) &&
                  <span className='formErrorMessage'>{messageValid}</span>
                }
              </fieldset>

              <button type="submit" name='submit'>
                Send Message
              </button>
            </form>
          </div>
        </section>

        <section className='cards-contact-container'>
          <div className="card-contact">
            <div className='favicon-contact'>
              <BsPinMap />
            </div>
            <div className='info-card-contact'>
              <h3>Address</h3>
              <p>Wierzbięcice 33, 61-559, Poznań, Poland</p>
            </div>
          </div>

          <div className="card-contact">
            <div className='favicon-contact'>
              <TfiEmail />
            </div>
            <div className='info-card-contact'>
              <h3>Email</h3>
              <p>support@funtravel.com</p>
            </div>
          </div>

          <div className="card-contact">
            <div className='favicon-contact'>
              <SlPhone />
            </div>
            <div className='info-card-contact'>
              <h3>Phone</h3>
              <p>+48 517 665 9644</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
