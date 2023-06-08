import React from 'react'
import heroImg from '../../assets/johnson.png'
import Image from 'next/image'
import Button from '../components/Button'

const Hero = () => {
  return (
    <section className='flex flex-col-reverse justify-around w-screen px-10 pb-10 space-y-1 md:items-center md:flex-row md:space-y-0 bg-bg-primary'>

        <div data-aos="fade-right" className='flex flex-col items-center mx-auto space-y-4 md:space-y-6 md:items-start'>
            <h1 className='text-4xl font-semibold md:text-5xl lg:text-6xl text-[#19097E] font-oswald tracking-wide leading-[1.6] text-center md:text-left'>
                Johnson Eziel <br className='hidden lg:block' /> Fritz
            </h1>
            
            <p className='text-xl font-medium text-red-main'>Your Future SRC President</p>

            <div className='flex items-center space-x-3'>
                <Button 
                    path="/volunteer" 
                    text='Volunteer'
                    classes='bg-[#0E1A8D] text-white uppercase hover:bg-[#0E1A8D]/90 px-4 py-2 rounded'
                />

                <Button 
                    path="/" 
                    text='Donate'
                    classes='bg-red-main text-white uppercase hover:bg-red-800 px-4 py-2 rounded'
                />
            </div>
        </div>

        <Image 
            data-aos="fade-left"
            src={heroImg}
            width={500}
            height={500}
            alt='Hero Image'
            className='pt-10 md:pt-16 object-contain md:w-[400px] h-[400px] md:h-[500px] mx-auto w-fit'
        />
    </section>
  )
}

export default Hero