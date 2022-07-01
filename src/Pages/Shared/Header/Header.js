import React from 'react';
import Munubar from '../Menubar/Munubar';
import './Header.css'

const Header = () => {
    return (
        <div id='header' className='header-container sticky top-0 z-10 border-b-2 border-slate-50'>
            <div className='bg-primary empty-container'>

            </div>
            <div className='bg-primary'>
                <Munubar></Munubar>
            </div>
        </div>
    );
};

export default Header;