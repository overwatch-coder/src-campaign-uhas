import React from 'react'
import { background, heroImg } from '@/assets'
import Image from 'next/image'
import Button from '../Button'
import { footprint } from '@/assets'

const Hero = () => {

  return (
    <section className='flex flex-col-reverse justify-around w-screen px-10 pt-20 space-y-1 md:items-center md:flex-row md:space-y-0 bg-my_bg_image bg-right-top md:h-[100vh] overflow-hidden'>

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
          <h1 className=' text-4xl font-extrabold md:text-6xl lg:text-7xl text-[#ffffff] tracking-wide leading-[1.6] text-center md:text-left'>
              Johnson Eziel <br className='hidden lg:block' />Weitzmann
          </h1>
          
      


          <p className='text-xl sm:text-2xl md:text-3xl font-extrabold hover:text-yellow-700 text-yellow-600'>Your Next SRC President</p>

          <div className='flex items-center  space-x-3 pb-10'>
            <Button 
              path="/volunteer" 
              text='Volunteer'
              classes='bg-[#0E1A8D] text-white font-bold border-2 border-yellow-600 uppercase hover:bg-[#0E1A8D]/90 px-4 py-2 rounded-xl'
            />
          </div>
      </div>

      <Image 
        data-aos="fade-left"
        src={heroImg}
        // width={500}
        // height={500}
        alt='Hero Image'
        className='mt-50 md:pt-16 object-cover object-top sm:w-[400px] sm:h-[300px] md:w-[500px] md:h-[400px] lg:w-[600px] h-[250px] lg:h-[650px] mx-auto w-[240px]'
      />
    </section>
  )
}

export default Hero