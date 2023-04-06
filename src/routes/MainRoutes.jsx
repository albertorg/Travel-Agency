import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/shared/navbar/Navbar"
import { HomeScreen } from "../components/screens/home/HomeScreen"
import { ContactScreen } from "../components/screens/contact/ContactScreen"
import { AboutScreen } from "../components/screens/about-as/AboutScreen"
import { Footer } from "../components/shared/footer/Footer"

export const MainRoutes = () => {
  return (
      <>
          <Navbar />
          <Routes>
              {/* public routes with navbar */}
              <Route path="/" element={<HomeScreen />} />
              <Route path='/contact' element={<ContactScreen />} />
              <Route path='/about' element={<AboutScreen />} />
              <Route path="*" element={<Navigate to='/' />} />
          </Routes>
          <Footer />
      </>
  )
}
