import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <nav className='w-11/12 mx-auto'>
            <Navbar></Navbar>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;