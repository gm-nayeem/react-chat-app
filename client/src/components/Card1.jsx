import React from 'react'
import Logo from './Logo';

const Card1 = () => {
    return (
        <div className='flex gap-5 items-end'>
            <Logo />
            <div className='flex flex-col bg-[#ffffff] py-4 px-8 rounded-[24px] shadow-md'>
                <p className='text-base font-semibold'>👉 Last days of promotion!</p>
                <span className='text-lg font-normal'>ONLINE EXCLUSIVE</span>
            </div>
        </div>
    )
}

export default Card1;