import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ContentManagment from "../Pages/ContentManagment/ContentManagment";
import Contacts from "../Pages/ContentManagment/Contacts";
import LogOut from "../Pages/LogOut/LogOut";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <SignUp></SignUp>

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/contacts',
                element: <Contact></Contact>
            },
            {
                path: 'logout',
                element: <LogOut></LogOut>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><ContentManagment></ContentManagment></PrivateRoute>,
        children: [
            {
                path: 'contactManagment',
                element: <Contacts></Contacts>,
                loader: () => fetch('http://localhost:5000/contact')
            }
        ]
    }
]);

export default router;