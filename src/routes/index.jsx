import {
    createBrowserRouter,
} from "react-router-dom";
import '../App.css';

import Home from "../pages/home";
import Pembayaran from "../pages/pembayaran";
import Register from "../pages/register";
import Masuk from "../pages/register/masuk";






const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/pembayaran",
        element: <Pembayaran />,
    },
    {
        path:"/register",
        element: <Register/>,
    },
    {
        path:"/masuk",
        element: <Masuk/>,
    },
    
   
]);

export default router;