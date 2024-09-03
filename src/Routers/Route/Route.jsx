import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Home from "../../Pages/Home/Home";
import Buy from "../../Pages/Buy/Buy";
import Sell from "../../Pages/Sell/Sell";


export const router = createBrowserRouter([
     {
        path: "/",
        element: <Main/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },{
                path: "/buy",
                element: <Buy/>
            },{
                path: '/sell',
                element: <Sell/>
            }
        ]
     }
])