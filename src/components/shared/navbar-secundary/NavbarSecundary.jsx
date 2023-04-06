import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'
import { AuthForm } from '../authForm/AuthForm'
import { ProfileMenu } from '../profile-menu/ProfileMenu'
import logo from '../../../assets/funtravels_logo_small-white.png'
import { useSelector } from 'react-redux'
import './styles.css'


export const NavbarSecundary = () => {

    const [showLoginWindow, setShowLoginWindow] = useState(false)

    const { status } = useSelector(state => state.auth) 

    const onUserIconClick = () => {
        setShowLoginWindow(!showLoginWindow)
    } 

    return (
        <header className='secondary-navbar-container'>
            <nav className="header-area container">

                <Link to='/' className="brand-container">
                    <img src={logo} alt="funtravels logo"/>
                </Link>

                <div className='nav-container'>
                    <div className='navbar-main'>

                        <div className="icons-container">
                            <div className='user-icon icons-styles' >
                                {status === 'authenticated'
                                    ? <ProfileMenu />
                                    : <AiOutlineUser role='button' onClick={onUserIconClick} />
                                }                                
                            </div>
                        </div>

                        <AuthForm open={showLoginWindow} setOpen={setShowLoginWindow} />
                    </div>
                </div>
            </nav>
        </header>
    )
}


