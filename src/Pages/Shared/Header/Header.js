import React from 'react';
import Munubar from '../Menubar/Munubar';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='bg-secondary empty-container'>

            </div>
            <div className='bg-primary'>
                <Munubar></Munubar>
            </div>
        </div>
    );
};

export default Header;