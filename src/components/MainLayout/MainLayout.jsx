import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


const MainLayout = () => {
    return (
        <div>
            <Toaster></Toaster>
            <nav className='w-11/12 mx-auto'>
            <Navbar></Navbar>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;