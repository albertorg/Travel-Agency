import React from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import { HomeScreen } from '../components/screens/home/HomeScreen';
import { SearchScreen } from '../components/screens/search/SerachScreen';
import { ContactScreen } from '../components/screens/contact/ContactScreen';
import { AboutScreen } from '../components/screens/about-as/AboutScreen';
import { HotelDetails } from '../components/screens/hotel-details/HotelDetails';
import { Navbar } from '../components/shared/navbar/Navbar';
import { Pay } from '../components/screens/pay/Pay';
import { PayDone } from '../components/screens/pay-done/PayDone';
import { Account } from '../components/screens/account/Account';
import { useCheckAuth } from '../hooks/useCheckAuth';
import { BookingRoutes } from './BookingRoutes';
import { MainRoutes } from './MainRoutes';

export const AppRouter = () => {
    
    useCheckAuth()

    return (
        <>
            <Routes>
                {/* routes public with navbar */}
                <Route path='/*' element={<MainRoutes />} />

                {/* routes public with secundary-navbar */}
                <Route path='/booking/*' element={<BookingRoutes />} />
                
                {/* routes private with secundary-navbar */}
                <Route path="/account" element={<Account />} />

            

                <Route path="*" element={<Navigate to='/'/>} />
            </Routes>

        </>
    )
}
