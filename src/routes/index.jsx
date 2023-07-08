import {
    createBrowserRouter,
} from "react-router-dom";
import '../App.css';

import Home from "../pages/home";
import Pembayaran from "../pages/pembayaran";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/pembayaran",
        element: <Pembayaran />,
    },
]);

export default router;