import React from 'react'
import WWDCard from './WWDCard'
import abouticon from '../../assets/about-icon.png'
import policyicon from '../../assets/policy-icon.png'
import electionicon from '../../assets/election-icon.png'
import volunteericon from '../../assets/volunteer-icon.png'
import { footprint } from '@/assets'
import Image from 'next/image'

const WhatWeDo = () => {
  return (
      <section className='flex flex-col px-10 pt-10 pb-16 space-y-10 bg-primary'>
        <div data-aos="fade-down" className='flex flex-col space-y-3'>
            <h2 className='text-2xl font-semibold text-center text-white md:text-3xl'>What We Are About</h2>
            
            <p className='text-xs text-center text-white/80 md:text-base'>Empowering students through advocacy, support, and positive change.</p>
        </div>

        <div data-aos="fade-down" className='grid grid-cols-1 gap-10 mx-auto md:max-w-4xl md:grid-cols-2 relative'>
          <Image 
                data-aos="fade-left"
                src={footprint}
                width={200}
                height={200}
                alt='Hero Image'
                className='absolute -z-10 -left-11 -top-11'
          />
          <Image 
                data-aos="fade-left"
                src={footprint}
                width={200}
                height={200}
                alt='Hero Image'
                className='absolute -z-10 -right-40 -top-11'
            />  
            
            <WWDCard 
                title='About Us'
                excerpt="The mission of John's campaign is to empower students and build a strong sense of community. They envision a student council that actively listens to students' concerns, advocates for their rights, and "
                path='/about'
                img={abouticon}
            />

            <WWDCard 
                title='Our Policies'
                excerpt='Our campaign will encompass a range of policies to address key areas that impact the student body. These policies are designed to enhance the overall student experience and create a thriving and inclusive'
                path='/policy'
                img={policyicon}
            />

            <WWDCard 
                title='Elections'
                excerpt='Stay informed about the latest updates and developments in the electoral process. We provide timely information on important dates, procedures, and requirements. Check back regularly for announcements regarding nominations, voting methods'
                path='/election-hub'
                img={electionicon}
            />

            <WWDCard 
                title='Volunteering'
                excerpt='We believe that everyone has something valuable to contribute. 
                There are numerous ways you can get involved and make a difference in our campaign. Every effort, no matter how big or small, can contribute to our collective success. We appreciate your willingness to help and'
                path='/volunteer'
                img={volunteericon}
            />
        </div>
    </section>
  )
}

export default WhatWeDo