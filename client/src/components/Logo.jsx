import React from 'react';
import LogoImg from '../assets/Logo.webp';

const Logo = () => {
    return (
        <img
            src={LogoImg}
            alt="Logo"
            className='w-[40px] h-[40px] bg-black object-contain rounded-full'
        />
    )
}

export default Logo;