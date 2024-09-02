import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../../SheardComponents/Navbar/NavBar';
import Fotter from '../../SheardComponents/Navbar/Fotter/Fotter';

const Main = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Fotter/>
        </div>
    );
};

export default Main;