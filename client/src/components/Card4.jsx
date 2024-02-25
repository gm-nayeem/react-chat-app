import React from 'react'

const Card4 = ({ title, type, handleCard, className }) => {
    return (
        <div
            className='w-[200px] bg-orange-500 text-white py-4 flex justify-center rounded-[32px] shadow-md'
            style={{ cursor: className && 'pointer' }}
            onClick={() => handleCard(type)}
        >
            {title}
        </div>
    )
}

export default Card4