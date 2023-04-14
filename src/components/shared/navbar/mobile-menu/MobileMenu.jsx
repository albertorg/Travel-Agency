import React from 'react'
import { Root, List, Item, Link as LinkUi } from '@radix-ui/react-navigation-menu'
import { Link } from 'react-router-dom'
import logo from '../../../../assets/funtravels_logo_transparent_small.png'
import { MdOutlineClose } from 'react-icons/md'
import { IoMdMail } from 'react-icons/io'
import { BsTelephoneFill } from 'react-icons/bs'
import './styles.css'

export const MobileMenu = ({ active, setActive }) => {

  const handleActive = () => {
    setActive(false)
  }

  return (
    <div className='mobile-nav-container'>

      <div className="off-screen" onClick={handleActive}></div>

      <Root className='navbarMobile-container'>
        <List className='list-mobileMenu'>

          <Item className='logo-item border-list'>
            <div className="logo-mobile-nav">
              <img src={logo} alt="funtravels logo" />
            </div>

            <div className="close-icon" onClick={handleActive}>
              <MdOutlineClose />
            </div>
          </Item>
          <Item className='border-list'>
            <LinkUi asChild className='activeLink'>
              <Link to='/' onClick={handleActive}> Home </Link>
            </LinkUi>
          </Item>
          <Item className='border-list'>
            <LinkUi asChild className='activeLink'>
              <Link to='/' onClick={handleActive}> Destinations </Link>
            </LinkUi>
          </Item>
          <Item className='border-list'>
            <LinkUi asChild className='activeLink'>
              <Link to='/' onClick={handleActive}> Offers </Link>
            </LinkUi>
          </Item>
          <Item className='border-list'>
            <LinkUi asChild className='activeLink'>
              <Link to='/about' onClick={handleActive}> About us </Link>
            </LinkUi>
          </Item>
          <Item className='border-list'>
            <LinkUi asChild className='activeLink'>
              <Link to='/about' onClick={handleActive}> Blog </Link>
            </LinkUi>
          </Item>
          <Item className='border-list'>
            <LinkUi asChild className='activeLink'>
              <Link to='/contact' onClick={handleActive}> Contact </Link>
            </LinkUi>
          </Item>

        </List>

        <List className='contact-list'>

          <Item className='contact-items'>
            <div className='contact-icons'>
              <IoMdMail />
            </div>
            <span>support@funtravels.com</span>
          </Item>
          <Item className='contact-items'>
            <div className='contact-icons'>
              <BsTelephoneFill />
            </div>
            <span>+38 311 665 9673</span>
          </Item>

        </List>
      </Root>

    </div>
  )
}
