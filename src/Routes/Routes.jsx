import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../allPages/Home/Home/Home";
import Error from "../allPages/Errorpage/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
]);


export default router