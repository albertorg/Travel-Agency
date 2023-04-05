import React, { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomeScreen } from '../components/screens/home/HomeScreen';
import { SearchScreen } from '../components/screens/search/SerachScreen';
import { ContactScreen } from '../components/screens/contact/ContactScreen';
import { AboutScreen } from '../components/screens/about-as/AboutScreen';
import { HotelDetails } from '../components/screens/hotel-details/HotelDetails';
import { Navbar } from '../components/shared/navbar/Navbar';
import { Pay } from '../components/screens/pay/Pay';
import { PayDone } from '../components/screens/pay-done/PayDone';
import { Account } from '../components/screens/account/Account';
import { useDispatch, useSelector } from 'react-redux';
import { account } from '../appwrite/config';
import { login, logout } from '../store/slices/auth-slice';

export const AppRouter = () => {

    const { status } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    
    useEffect(() => {

        const getAccount =async() => {
            try {
                const resp = await account.get()
                console.log(resp) 
                dispatch(login(resp))
            } catch (error) {
                console.log(error)
                dispatch(logout(error.message)) 
            }
            
        }
        
        getAccount()
    }, [])
    
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path='/search' element={<SearchScreen />} />
                <Route path='/contact' element={<ContactScreen />} />
                <Route path='/about' element={<AboutScreen />} />
                <Route path="/hotel-details/:hotelCode" element={<HotelDetails />} />
                <Route path="/pay" element={<Pay />} />
                <Route path="/pay-done" element={<PayDone />} />
                <Route path="/account" element={<Account />} />

                <Route path="*" element={<Navigate to='/'/>} />
            </Routes>

        </BrowserRouter>
    )
}
