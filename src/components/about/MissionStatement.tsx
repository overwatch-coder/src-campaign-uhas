import React from 'react'
import Button from '../../components/Button'

const MissionStatement = () => {
  return (
    <section className='flex flex-col px-10 pb-16 space-y-5 text-justify md:text-center md:mx-auto lg:items-center bg-bg-primary pt-7'
    >
        <h2 className='text-lg font-medium uppercase text-red-main md:text-xl lg:max-w-3xl'>Mission Statement</h2>

        <p className='text-sm text-black/70 md:text-base leading-[1.7] lg:max-w-3xl tracking-wide'>The mission of John campaign is to empower students and build a strong sense of community. They envision a student council that actively listens to students concerns, advocates for their rights, and provides support and resources to help them thrive academically, socially, and emotionally. Through transparent communication and collaborative initiatives, John aims to make a positive difference in the lives of all students.</p>

        <div className='flex items-center space-x-4 md:mx-auto lg:max-w-3xl'>
            <Button
                text='Volunteer'
                path='/volunteer'
                classes='bg-red-main hover:bg-red-800 rounded px-4 py-2 text-white text-center uppercase w-fit' 
            />

            <Button
                text='Donate'
                path='/'
                classes='bg-transparent border-2 border-black/70 hover:bg-black rounded px-2 py-2 text-black hover:text-white text-center uppercase w-fit' 
            />
        </div>
    </section>
  )
}

export default MissionStatement