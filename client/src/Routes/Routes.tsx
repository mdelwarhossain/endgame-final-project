import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Login from "../Login/Login";
import About from "../Pages/Home/AboutUs/About";
import SignUp from "../SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },

        ]
    }
]);
export default router;