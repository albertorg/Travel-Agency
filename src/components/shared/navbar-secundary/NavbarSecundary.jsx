import React, { useState } from 'react'
import { Root, List, Item, Link as LinkUi } from '@radix-ui/react-navigation-menu'
import { Link } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'
import { HiMenuAlt3 } from 'react-icons/hi'
import { MobileMenu } from './mobile-menu/MobileMenu'
import { AuthForm } from '../authForm/AuthForm'
import { ProfileMenu } from '../profile-menu/ProfileMenu'
import logo from '../../../assets/funtravels_logo_small.png'
import { useSelector } from 'react-redux'
import './styles.css'


export const NavbarSecundary = () => {

    const [activeMobileMenu, setActiveMobileMenu] = useState(false)
    const [showLoginWindow, setShowLoginWindow] = useState(false)

    const { status } = useSelector(state => state.auth) 

    const handleMobileMenu = (e) => {
        e.preventDefault()
        setActiveMobileMenu(!activeMobileMenu)
    }

    const onUserIconClick = () => {
        setShowLoginWindow(!showLoginWindow)
    } 

    return (
        <header>
            <div className="header-area container">

                <Link to='/' className="brand-container">
                    <img src={logo} alt="funtravels logo"/>
                </Link>


                <div className='nav-container'>
                    <div className='navbar-main'>
                        <Root className='menu-root'>
                            <List className='menu-list'>
                                <Item>
                                    <LinkUi asChild className='activeLink'>
                                        <Link to='/'> Home </Link>
                                    </LinkUi>
                                </Item>
                                <Item>
                                    <LinkUi asChild className='activeLink'>
                                        <Link to='/'> Destinations </Link>
                                    </LinkUi>
                                </Item>
                                <Item>
                                    <LinkUi asChild className='activeLink'>
                                        <Link to='/'> Offers </Link>
                                    </LinkUi>
                                </Item>
                                <Item>
                                    <LinkUi asChild className='activeLink'>
                                        <Link to='/about'> About us </Link>
                                    </LinkUi>
                                </Item>
                                <Item>
                                    <LinkUi asChild className='activeLink'>
                                        <Link to='/about'> Blog </Link>
                                    </LinkUi>
                                </Item>
                                <Item>
                                    <LinkUi asChild className='activeLink'>
                                        <Link to='/contact'> Contact </Link>
                                    </LinkUi>
                                </Item>
                            </List>
                        </Root>

                        <div className="icons-container">
                            <div className='user-icon icons-styles' >
                                {status === 'authenticated'
                                    ? <ProfileMenu />
                                    : <AiOutlineUser role='button' onClick={onUserIconClick} />
                                }                                
                            </div>

                            <div className="menu-icon icons-styles" onClick={handleMobileMenu}>
                                <HiMenuAlt3 />
                            </div>
                        </div>

                        {
                            activeMobileMenu && 
                                <MobileMenu 
                                    active={activeMobileMenu}
                                    setActive={setActiveMobileMenu}
                                />
                        }

                        <AuthForm open={showLoginWindow} setOpen={setShowLoginWindow} />
                        
                    </div>
                </div>
            </div>
        </header>
    )
}


