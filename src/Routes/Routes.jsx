import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../allPages/Home/Home/Home";
import Error from "../allPages/Errorpage/Error";
import Login from "../allPages/Login/Login";
import Signup from "../allPages/SignUp/Signup";
import AddToys from "../allPages/AddToys/AddToys";
import AllToys from "../allPages/AllToys/AllToys";
import MyToys from "../allPages/MyToys/MyToys";
import SingleToy from "../allPages/SingleToy/SingleToy";
import Blog from "../allPages/Blog/Blog";

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
                path:'/allToys',
                element:<AllToys></AllToys>
            },
            {
                path:'/singleToy ',
                element:<SingleToy></SingleToy>,
            },
            {
                path:'/addToys',
                element:<AddToys></AddToys>
            },
            {
                path:'/myToys',
                element:<MyToys></MyToys>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    },
]);


export default router