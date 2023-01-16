import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../layout/Main";
import SignUp from "../SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[

            {
                path:'/',
                element:<Home></Home>
            },
           {
            path:'/signUp',
            element:<SignUp></SignUp>
           }
        ]
    }
])