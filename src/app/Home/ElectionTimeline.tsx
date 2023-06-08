/* eslint-disable react/no-unescaped-entities */
'use client'

import React from 'react'
import Countdown from 'react-countdown';
import RenderTime from './RenderTime';

const ElectionTimeline = () => {
  return (
    <section className="relative px-10 py-5 bg-black election_bg h-[50vh]">
        <div className='absolute top-0 bottom-0 left-0 right-0 w-screen h-full bg-black/20'></div>

        <div className='space-y-2 text-center'>
            <h2 className='text-2xl font-semibold text-red-main md:text-3xl font-oswald'
            >
                Elections Start Timeline
            </h2>
            <p className='text-sm font-medium text-white md:text-base'
            >
                Charting the Path to Student Democracy.
            </p>
        </div>
        
        <div className='text-center mt-7'>
            <Countdown
                date={'2023-07-25T00:00:00'}
                renderer={RenderTime}
                autoStart={true}
            />
        </div>
    </section>
  )
}

export default ElectionTimeline