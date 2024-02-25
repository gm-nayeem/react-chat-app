import React from 'react';
import Logo from '../assets/Logo.webp';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='w-full bg-black pl-[6rem]'>
            <Link to='/'>
                <img
                    src={Logo}
                    alt="Logo"
                    className='w-[60px] h-[60px] object-contain rounded-full cursor-pointer'
                />
            </Link>
        </div>
    )
}

export default Navbar;