import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../components/shared/navbar/Navbar"
import { HomeScreen } from "../components/screens/home/HomeScreen"
import { ContactScreen } from "../components/screens/contact/ContactScreen"
import { AboutScreen } from "../components/screens/about-as/AboutScreen"
import { Footer } from "../components/shared/footer/Footer"
import { Destinations } from "../components/screens/destinations/Destinations"
import { Blog } from "../components/screens/blog/Blog"

export const MainRoutes = () => {
  return (
      <>
          <Navbar />
          <Routes>
              {/* public routes with navbar */}
              <Route path="/" element={<HomeScreen />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/blog" element={<Blog />} />
              <Route path='/contact' element={<ContactScreen />} />
              <Route path='/about' element={<AboutScreen />} />
              <Route path="*" element={<Navigate to='/' />} />
          </Routes>
          <Footer />
      </>
  )
}
