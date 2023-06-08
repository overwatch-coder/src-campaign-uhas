/* eslint-disable react/no-unescaped-entities */
'use client'

import React from 'react'

type CountdownProps = {
    days?: number
    hours?: number,
    minutes?: number,
    seconds?: number,
    completed?: boolean
}

const RenderTime = ({ days, hours, minutes, seconds, completed }: CountdownProps) => {
    // Renderer callback with condition
        if (completed) {
        // Render a completed state
        return <h1 className='text-4xl font-medium text-center text-white'>It's voting day!</h1>;
        } else {
        // Render a countdown
        return (
            <div className='flex items-center justify-center space-x-3 md:space-x-7'>

                <div className='flex flex-col p-3 space-y-3 text-center text-white rounded bg-red-main'>
                    <p className='text-3xl font-semibold md:text-5xl font-oswald'
                    >
                        {days}
                    </p>
                    <span className='text-xs font-medium md:text-sm'>Days</span>
                </div>

                <span className='text-xl font-bold text-white'>:</span>

                <div className='flex flex-col p-3 space-y-3 text-center text-white rounded bg-red-main'>
                    <p className='text-3xl font-semibold md:text-5xl font-oswald'
                    >
                        {hours}
                    </p>
                    <span className='text-xs font-medium md:text-sm'>Hours</span>
                </div>

                <span className='text-xl font-bold text-white'>:</span>

                <div className='flex flex-col p-3 space-y-3 text-center text-white rounded bg-red-main'>
                    <p className='text-3xl font-semibold md:text-5xl font-oswald'
                    >
                        {minutes}
                    </p>
                    <span className='text-xs font-medium md:text-sm'>Minutes</span>
                </div>

                <span className='text-xl font-bold text-white'>:</span>
                
                <div className='flex flex-col p-3 space-y-3 text-center text-white rounded bg-red-main'>
                    <div className='text-3xl font-semibold md:text-5xl font-oswald'
                    >
                        {seconds}
                    </div>
                    <span className='text-xs font-medium md:text-sm'>Seconds</span>
                </div>
            </div>
        );
    }
};

export default RenderTime