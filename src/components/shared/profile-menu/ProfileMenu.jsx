import React from 'react'
import { useDispatch } from 'react-redux'
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuSeparator,
    useMenuState,
} from "ariakit/menu";
import { CiLogout, CiUser } from 'react-icons/ci'
import { SlSettings } from 'react-icons/sl'
import { HiOutlineClipboardList } from 'react-icons/hi'
import './styles.css'
import { startLogout } from '../../../store/thunks/auth-thunks';
import { useNavigate } from 'react-router-dom';


export const ProfileMenu = () => {

    const menu = useMenuState({ gutter: 15, placement: 'bottom' });
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleAccountClick = () => {
        navigate('/account/profile')
    }

    const handleLogoutClick = () => {
        dispatch(startLogout())
    }

    const handleBookingClick = () => {
        navigate('/account/bookings')
    }

    const handleSettingsClick = () => {
        navigate('/account/settings')
    }

    return (
        <>
            <MenuButton state={menu} className="profile-button">
                M
            </MenuButton>
            <Menu state={menu} className="profileMenu" style={{zIndex: 1}}>
                <MenuItem className="menu-item" onClick={handleAccountClick}>
                    <CiUser />
                    Account
                </MenuItem>
                <MenuItem className="menu-item" onClick={handleBookingClick}>
                    <HiOutlineClipboardList/>
                    My bookings
                </MenuItem>
                <MenuItem className="menu-item" onClick={handleSettingsClick}>
                    <SlSettings />
                    Settings
                </MenuItem>
                <MenuSeparator className="separator-item" />
                <MenuItem className="menu-item" onClick={handleLogoutClick}>
                    <CiLogout />
                    Log out
                </MenuItem>
            </Menu>
        </>
    )
}

