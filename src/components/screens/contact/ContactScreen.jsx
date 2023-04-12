import React from 'react'
// import { BsFillTelephoneFill } from 'react-icons/bs'
// import { IoMdMail } from 'react-icons/io'
// import { ImLocation } from 'react-icons/im'
import { HeroPage } from '../../shared/hero-page/HeroPage'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import './styles.css'


export const ContactScreen = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
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
                />
              </fieldset>

              <fieldset className='fieldset-container'>
                <label htmlFor="full-name">Email address</label>
                <input
                  type="email" 
                  name="email" 
                  id="email" 
                />
              </fieldset>

              <fieldset className='fieldset-container'>
                <label htmlFor="message">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  cols="30" 
                  rows="8" 
                />
              </fieldset>

              <button type="submit" name='submit'>
                Send Message
              </button>
            </form>
          </div>
        </section>

        <section className='cards-contact-container'>
          {/* TODO: Make Cards of contact info */}
        </section>
      </main>
    </>
  )
}
