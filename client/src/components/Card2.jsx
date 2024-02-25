import React from 'react';
import Logo from './Logo';

const Card2 = ({ text, text2, text3, className }) => {
    return (
        <div className='flex gap-5 items-end'>
            <Logo />
            <div className='flex flex-col bg-[#ffffff] py-4 px-8 rounded-[32px] shadow-md'>
                <span>{text}</span>
                {text2 && <span className={className}>{text2}</span>}
                {text3 && <span className='text-sm'>{text3}</span>}
            </div>
        </div>
    )
}

export default Card2;