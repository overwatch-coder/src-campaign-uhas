import React from 'react'
import { heroImg } from '@/assets'
import Image from 'next/image'
import Button from '../Button'
import { footprint } from '@/assets'

const Hero = () => {

  return (
    <section className='flex flex-col-reverse justify-around w-screen px-10 pt-5 space-y-1 md:items-center md:flex-row md:space-y-0 bg-bg-primary overflow-hidden'>

          <div data-aos="fade-right" className='flex flex-col items-center mx-auto space-y-4 md:space-y-6 md:items-start'>
            <Image 
                data-aos="fade-left"
                src={footprint}
                width={200}
                height={200}
                alt='Hero Image'
                className='absolute -z-10 -right-10 -top-10'
              />  
                <Image 
                data-aos="fade-left"
                src={footprint}
                width={250}
                height={250}
                alt='Hero Image'
                className='absolute -z-10 -left-10 -bottom-10'
            />    
            <h1 className='text-4xl font-semibold md:text-5xl lg:text-6xl text-[#19097E] tracking-wide leading-[1.6] text-center md:text-left'>
                Johnson Eziel <br className='hidden lg:block' />Weitzmann
            </h1>
            
        


            <p className='text-xl font-medium hover:text-yellow-700 text-yellow-600'>Your Future SRC President</p>

            <div className='flex items-center space-x-3'>
                <Button 
                    path="/volunteer" 
                    text='Volunteer'
                    classes='bg-[#0E1A8D] text-white uppercase hover:bg-[#0E1A8D]/90 px-4 py-2 rounded'
                />

                <Button 
                    path="/" 
                    text='Donate'
                    classes='bg-yellow-600 text-white uppercase hover:bg-yellow-700 px-4 py-2 rounded'
                />
            </div>
        </div>

        <Image 
            data-aos="fade-left"
            src={heroImg}
            width={500}
            alt='Hero Image'
            className='pt-10 md:pt-16 object-cover object-top md:w-[400px] h-[500px] md:h-[500px] mx-auto w-fit'
        />
    </section>
  )
}

export default Hero