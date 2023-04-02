import React from 'react'
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


export const ProfileMenu = () => {

    const menu = useMenuState({ gutter: 15, placement: 'bottom' });
    console.log(menu)

    return (
        <>
            <MenuButton state={menu} className="profile-button">
                M
            </MenuButton>
            <Menu state={menu} className="profileMenu" style={{zIndex: 1}}>
                <MenuItem className="menu-item">
                    <CiUser />
                    Account
                </MenuItem>
                <MenuItem className="menu-item">
                    <HiOutlineClipboardList/>
                    My bookings
                </MenuItem>
                <MenuItem className="menu-item">
                    <SlSettings />
                    Settings
                </MenuItem>
                <MenuSeparator className="separator-item" />
                <MenuItem className="menu-item">
                    <CiLogout />
                    Log out
                </MenuItem>
            </Menu>
        </>
    )
}

