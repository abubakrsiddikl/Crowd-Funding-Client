import React from 'react';
import Banner from '../Banner/Banner';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Banner></Banner>
        </div>
    );
};

export default Home;