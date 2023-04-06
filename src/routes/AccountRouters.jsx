import { Route, Routes } from "react-router-dom"
import { NavbarSecundary } from "../components/shared/navbar-secundary/NavbarSecundary"
import { Account } from "../components/screens/account/Account"


export const AccountRouters = () => {
  return (
      <>
          <NavbarSecundary />
          <Routes>
              <Route path='/profile' element={<Account />} />
              
          </Routes>

      </>
  )
}
