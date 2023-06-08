/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const Intro = () => {
  return (
    <section className='flex flex-col px-10 space-y-4 text-center bg-white py-7 md:py-12'>
        <h2 className='text-[#1E1E1E] font-medium text-xl md:text-2xl tracking-wide'>Welcome to the campaign website of <span className='font-semibold text-red-main'>Johnson Eziel Fritz</span>.</h2>

        <p className='text-sm font-medium tracking-wide text-gray-600 md:text-base'>Together, let's build a stronger student community.</p>
    </section>
  )
}

export default Intro