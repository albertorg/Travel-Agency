import React from 'react'
import './styles.css'
import logo from "../../../assets/logo.png"
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='container navbar-container'>
                <div className="brand">
                    <div className="brand-container">
                        <img src={logo} alt="logo funbook" />
                        funbook
                    </div>
                    <div className="toggle"></div>
                </div>

                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'about'}>About Us</Link>
                    </li>
                    <li>
                        <Link to={'contact'}>Contact</Link>
                    </li>
                </ul>
            </div>  
        </nav>
    )
}
