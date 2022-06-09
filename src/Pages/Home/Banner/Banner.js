import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='bg-secondary lg:h-screen md:h-screen'>
                <h2>Hello How are you</h2>
            </div>
            <div className='bg-primary lg:h-screen md:h-screen'>
                <h2>This is for testing purpose</h2>
            </div>
        </div>
    );
};

export default Banner;