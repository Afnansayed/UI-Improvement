import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import Home from "../../Pages/Home/Home";
import Buy from "../../Pages/Buy/Buy";
import Sell from "../../Pages/Sell/Sell";
import Managerents from "../../Pages/ManageRents/Managerents";
import Services from "../../Pages/Services/Services";


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
            },{
                path: '/manage',
                element: <Managerents/>
            }
            ,{
                path: '/services',
                element: <Services/>
            }
        ]
     }
])