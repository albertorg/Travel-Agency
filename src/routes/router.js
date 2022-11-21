import { createBrowserRouter } from "react-router-dom";
import { ErrorScreen } from "../components/screens/404/ErrorScreen";
import { AboutScreen } from "../components/screens/about-as/AboutScreen";
import { ContactScreen } from "../components/screens/contact/ContactScreen";
import { HomeScreen } from "../components/screens/home/HomeScreen";
import { SearchScreen } from "../components/screens/search/SerachScreen";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeScreen />,
        errorElement: <ErrorScreen />
    },
    {
        path: "/search",
        element: <SearchScreen />
    },
    {
        path: "/contact",
        element: <ContactScreen />
    },
    {
        path: "/about",
        element: <AboutScreen />
    },
])