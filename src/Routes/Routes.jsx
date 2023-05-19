import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../allPages/Home/Home/Home";
import Error from "../allPages/Errorpage/Error";
import Login from "../allPages/Login/Login";
import Signup from "../allPages/SignUp/Signup";
import AddToys from "../allPages/AddToys/AddToys";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signUp',
                element:<Signup></Signup>
            },
            {
                path:'/addToys',
                element:<AddToys></AddToys>
            }
        ]
    },
]);


export default router