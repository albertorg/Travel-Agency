import React from 'react'
import { Route, Routes } from "react-router-dom";
import { useCheckAuth } from '../hooks/useCheckAuth';
import { BookingRoutes } from './BookingRoutes';
import { MainRoutes } from './MainRoutes';
import { PrivateRoute } from './PrivateRoute';
import { AccountRouters } from './AccountRouters';

export const AppRouter = () => {
    
    useCheckAuth()

    return (
        <>
            <Routes>

                <Route path='/account/*' element={
                    <PrivateRoute>
                        <AccountRouters />
                    </PrivateRoute>
                } />

                <Route path='/*' element={<MainRoutes />} />
                
                <Route path='/booking/*' element={<BookingRoutes />} />

            </Routes>

        </>
    )
}
