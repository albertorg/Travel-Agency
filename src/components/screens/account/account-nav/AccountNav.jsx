import React, { useEffect, useRef, useState } from 'react'
import { Root, List, Item, Link as LinkUi } from '@radix-ui/react-navigation-menu'
import { NavLink } from 'react-router-dom'
import './styles.css'

export const AccountNav = () => {

    const [fixedNavbar, setFixedNavbar] = useState(false);
    const navbarRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > navbarRef.current.offsetTop) {
                setFixedNavbar(true);
            } else {
                setFixedNavbar(false);
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    useEffect(() => {
        const navbarHeight = navbarRef.current.clientHeight;
        const content = document.querySelector('.content');
        if (fixedNavbar) {
            content.style.marginTop = `${navbarHeight + 32}px`;
        } else {
            content.style.marginTop = '2rem';
        }
    }, [fixedNavbar]);

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
