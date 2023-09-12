import React from 'react'
import Button from '../../components/Button'

const MissionStatement = () => {
  return (
    <section className='flex flex-col px-10 pb-16 space-y-5 text-justify md:text-center md:mx-auto lg:items-center bg-bg-primary pt-7 overflow-hidden'
    >
        <h2 className='text-lg font-medium uppercase hover:text-yellow-700 text-yellow-600 md:text-xl lg:max-w-3xl'>Mission Statement</h2>

      <p className='text-sm text-black/70 md:text-base leading-[1.7] lg:max-w-3xl tracking-wide'>
      At the heart of our mission is the unwavering commitment to promote the academic and social welfare of students. We strive to foster a strong and collaborative relationship with all sections of the University, while ensuring that every structure of the SRC is functioning optimally.
      </p>

        <div className='flex items-center space-x-4 md:mx-auto lg:max-w-3xl'>
            <Button
                text='Volunteer'
                path='/volunteer'
                classes='bg-yellow-600 hover:bg-yellow-700 rounded-xl px-4 py-2 text-white text-center uppercase w-fit' 
            />
        </div>
    </section>
  )
}

export default MissionStatement