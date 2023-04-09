import React, { useEffect, useRef, useState } from 'react'
import { Root, List, Item, Link as LinkUi } from '@radix-ui/react-navigation-menu'
import { NavLink } from 'react-router-dom'
import { useFixedNav } from '../../../../hooks/useFixedNav'
import './styles.css'


export const AccountNav = () => {

    const { fixedNavbar, navbarRef} = useFixedNav()

    return (
        <header className={`navbar-account-container ${fixedNavbar ? 'navbar-fixed-top' : ''}`} ref={navbarRef}>
            <Root className='navbar-root main_container'>
                <List className='nav-account-list'>
                    <Item>
                        <LinkUi asChild className='show-activeLink'>
                            <NavLink to='/account/bookings'> My bookings </NavLink>
                        </LinkUi>
                    </Item>
                    <Item>
                        <LinkUi asChild className='show-activeLink'>
                            <NavLink to='/account/profile'> Account </NavLink>
                        </LinkUi>
                    </Item>
                    <Item>
                        <LinkUi asChild className='show-activeLink'>
                            <NavLink to='/account/settings' >
                                Settings
                            </NavLink>
                        </LinkUi>
                    </Item>

                </List>
            </Root>
        </header>
    )
}
