import React from 'react'
import { Root, List, Item, Trigger, Indicator } from '@radix-ui/react-navigation-menu'
import { Link } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'
import { HiMenuAlt3 } from 'react-icons/hi'
import { BiChevronDown } from 'react-icons/bi'
import { HiOutlineChevronDown } from'react-icons/hi'
// import logo from "../../../assets/logo.png"
import logo from '../../../assets/funtravels_logo_small.png'
import './styles.css'

export const Navbar = () => {
    return (
        <header>
            <div className="header-area container">
                <div className="brand">
                    <div className="brand-container">
                        <img src={logo} alt="logo funbook" />
                        
                     </div>  
                </div>

                <div className='nav-container'>
                    <div className='navbar-main'>
                        <Root className='menu-root'>
                            <List className='menu-list'>
                                <Item>
                                    <Link to='/'> Home </Link>
                                </Item>
                                <Item>
                                    <Link to='/'> Destinations </Link>
                                </Item>
                                <Item>
                                    <Link to='/'> Offers </Link>
                                </Item>
                                <Item>
                                    <Link to='/about'> About us </Link>
                                </Item>
                                <Item>
                                    <Link to='/contact'> Contact </Link>
                                </Item>
                                <Indicator className="menuIndicator" />
                            </List>
                        </Root>

                        <div className="icons-container">
                            <div className='user-icon icons-styles'>
                                <AiOutlineUser />
                            </div>

                            <div className="menu-icon icons-styles">
                                <HiMenuAlt3 />
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </header>
    )
}


