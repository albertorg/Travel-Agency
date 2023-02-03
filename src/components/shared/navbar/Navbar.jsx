import React from 'react'
import logo from "../../../assets/logo.png"
import { Link } from 'react-router-dom'
import './styles.css'

export const Navbar = () => {
    return (
        <header>
            <div className="header-area container">
                <div className="brand">
                    <div className="brand-container">
                         <img src={logo} alt="logo funbook" />
                        funtravels
                     </div>
                    <div className="toggle"></div>
                </div>

                <div className='nav-container'>
                    <nav>
                        <div className='list'>

                        </div>

                        <div className='icons-container'>

                        </div>
                    </nav>
                </div>
            </div>
        </header>
        // <nav className='navbar'>
        //     <div className='container navbar-container'>
        //         <div className="brand">
        //             <div className="brand-container">
        //                 <img src={logo} alt="logo funbook" />
        //                 funtravels
        //             </div>
        //             <div className="toggle"></div>
        //         </div>

        //         <ul>
        //             <li>
        //                 <Link to={'/'}>Home</Link>
        //             </li>
        //             <li>
        //                 <Link to={'about'}>About Us</Link>
        //             </li>
        //             <li>
        //                 <Link to={'contact'}>Contact</Link>
        //             </li>
        //         </ul>
        //     </div>  
        // </nav>
    )
}
