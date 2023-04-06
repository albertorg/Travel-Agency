import { Route, Routes } from "react-router-dom"
import { NavbarSecundary } from "../components/shared/navbar-secundary/NavbarSecundary"
import { SearchScreen } from "../components/screens/search/SerachScreen"
import { HotelDetails } from "../components/screens/hotel-details/HotelDetails"
import { Pay } from "../components/screens/pay/Pay"
import { PayDone } from "../components/screens/pay-done/PayDone"


export const BookingRoutes = () => {
    return (
        <>
            <NavbarSecundary />
            <Routes>
                <Route path='/search' element={<SearchScreen />} />
                <Route path="/hotel-details/:hotelCode" element={<HotelDetails />} />
                <Route path="/pay" element={<Pay />} />
                <Route path="/pay-done" element={<PayDone />} />
            </Routes>
            
        </>
    )
}
