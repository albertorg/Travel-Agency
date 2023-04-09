import { Route, Routes } from "react-router-dom"
import { NavbarSecondary } from "../components/shared/navbar-secondary/NavbarSecondary"
import { AccountNav } from "../components/screens/account/account-nav/AccountNav"
import { Profile } from "../components/screens/account/profile/Profile"
import { Bookings } from "../components/screens/account/bookings/Bookings"
import { Settings } from "../components/screens/account/settings/Settings"
import { InfoFooter } from "../components/screens/account/info-footer/InfoFooter"


export const AccountRouters = () => {
  return (
      <>
          <NavbarSecondary />
          <AccountNav />
          <Routes>
              <Route path='/profile' element={<Profile />} />
              <Route path='/bookings' element={<Bookings />} />
              <Route path='/settings' element={<Settings />} />
          </Routes>
          <InfoFooter />
      </>
  )
}
