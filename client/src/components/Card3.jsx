import React from 'react';

const Card3 = ({ title, text1, text2, type, handleCard, className }) => {
    return (
        <div className='w-[180px] flex flex-col justify-center items-center bg-orange-500 text-white py-[1rem] rounded-[24px]'
            style={className ? { cursor: 'pointer' } : { width: '240px', alignItems: 'start', paddingLeft: '2rem', gap: '4px' }}
            onClick={() => handleCard(type)}
        >
            <h1 className='text-xl'>{title}</h1>
            <p className='text-sm'>{text1}</p>
            {
                text2 && <p className='text-sm'>{text2}</p>
            }
        </div>
    )
}

export default Card3