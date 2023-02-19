import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../assets/funtravels_logo_transparent_small.png'
import { FaFacebookF } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { IoMdMail } from 'react-icons/io'
import { ImLocation } from 'react-icons/im'
// import { useTranslation } from 'react-i18next';
import './styles.css'

export const Footer = () => {

  // const { t } = useTranslation('global')

  return (
    <footer id='footer'>
      <div className='container footer-container'>
        <div className='sections-container'>

          <div className='footer-list-container'>
            <div>
              <img src={logo} alt="funtravels logo" />

              <p>
                We are an online travel agency specialized in booking hotels in Cuba.
                We guarantee the best prices of the market.
              </p>
            </div>
          </div>

          <div className='footer-list-container'>
            <div >
              <h3>Links of interest</h3>
              <ul>
                <li>
                  <Link to='/'>Destinations</Link>
                </li>
                <li>
                  <Link to='/'>Offers</Link>
                </li>
                <li>
                  <Link to='/'>About us</Link>
                </li>
                <li>
                  <Link to='/'>Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='footer-list-container'>
            <div>
              <h3>Use Policy</h3>
              <ul>
                <li>
                  <Link to='/'>Privacy Policy</Link>
                </li>
                <li>
                  <Link to='/'>Cookies Policy</Link>
                </li>
                <li>
                  <Link to='/'>Conditions of use</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='footer-list-container' id='contact'>
            <div>
              <h3>Contact Us</h3>
              <ul>
                <li >
                  <BsFillTelephoneFill className='icons-contact-footer' />
                  <span>+48 517 665 9644</span>
                </li>
                <li >
                  <IoMdMail className='icons-contact-footer' />
                  <span>support@funtravel.com</span>
                </li>
                <li >
                  <ImLocation className='icons-contact-footer' />
                  <span>Wierzbięcice 33, 61-559, Poznań, Poland</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className='copy-container'>
          <span>&copy; 2023 Fun Travels</span>
          <div className='social-icons'>
            <FaFacebookF className='icon' />
            <BsTwitter className='icon' />
            <BsLinkedin className='icon' />
          </div>
        </div>

      </div>
    </footer>
  )
}
