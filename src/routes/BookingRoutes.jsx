import { Route, Routes } from "react-router-dom"
import { SearchScreen } from "../components/screens/search/SerachScreen"
import { HotelDetails } from "../components/screens/hotel-details/HotelDetails"
import { Pay } from "../components/screens/pay/Pay"
import { PayDone } from "../components/screens/pay-done/PayDone"
import { NavbarSecondary } from "../components/shared/navbar-secondary/NavbarSecondary"


export const BookingRoutes = () => {
    return (
        <>
            <NavbarSecondary />
            <Routes>
                <Route path='/search' element={<SearchScreen />} />
                <Route path="/hotel-details/:hotelCode" element={<HotelDetails />} />
                <Route path="/pay" element={<Pay />} />
                <Route path="/pay-done" element={<PayDone />} />
            </Routes> 
        </>
    )
}
