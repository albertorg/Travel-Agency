import { Route, Routes } from "react-router-dom"
import { Account } from "../components/screens/account/Account"
import { NavbarSecondary } from "../components/shared/navbar-secondary/NavbarSecondary"


export const AccountRouters = () => {
  return (
      <>
          <NavbarSecondary />
          <Routes>
              <Route path='/profile' element={<Account />} />
              <Route path='/bookings' element={<Account />} />
              <Route path='/settings' element={<Account />} />
          </Routes>
      </>
  )
}
