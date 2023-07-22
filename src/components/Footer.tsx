import Link from 'next/link'
import React from 'react'
import {AiFillFacebook, AiOutlineWhatsApp, AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'
import Image from 'next/image'
import { footprint } from '@/assets'
const Footer = () => {
  return (
    <footer className='z-50 grid w-screen grid-cols-2 px-5 pt-10 pb-5 text-white gap-7 md:grid-cols-2 bg-blue-main md:place-items-center relative'>
        <Image 
          data-aos="fade-left"
          src={footprint}
          width={200}
          height={200}
          alt='Hero Image'
          className='absolute -z-10 right-0 bottom-5'
        />
      
      <div className='flex flex-col gap-y-7'>
        <h2 className='border-b-2 border-b-white w-fit'>Useful Links</h2>

        <Link href={'/about'} className='hover:text-red-main w-fit hover:scale-105'>About Us</Link>
        <Link href={'/policy'} className='hover:text-red-main w-fit hover:scale-105'>Our Policies</Link>
        <Link href={'/election-hub'} className='hover:text-red-main w-fit hover:scale-105'>Election Hub</Link>
        <Link href={'/volunteer'} className='hover:text-red-main w-fit hover:scale-105'>Volunteer</Link>
        <Link href={'/'} className='hover:text-red-main w-fit'>Privacy Policy</Link>
      </div>
        
        <div className='flex flex-col gap-y-7'>
          <h2 className='border-b-2 border-b-white w-fit'>Our Socials</h2>
          <div className='flex items-center space-x-3'>
            <a href={'/'} target='_blank' className='hover:text-white/70 hover:scale-125'>
              <AiFillFacebook size={28} />
            </a>
            <a href={'/'} target='_blank' className='hover:text-white/70 hover:scale-125'>
              <AiOutlineTwitter size={28} />
            </a>
            <a href={'/'} target='_blank' className='hover:text-white/70 hover:scale-125'>
              <AiOutlineInstagram size={28} />
            </a>
            <a href={'/'} target='_blank' className='hover:text-white/70 hover:scale-125'>
              <AiOutlineWhatsApp size={28} />
            </a>
          </div>

          <div className='flex flex-col mt-5 space-y-3'> 
            <h1 className='text-5xl md:text-7xl font-oswald text-red-main'>VaMiDzo</h1>

            <p className='text-xs tracking-wide md:text-sm'>Together, let us build a stronger student community.</p>
          </div>
        </div>

        <div className='w-full col-span-2 mt-5 text-center border-t-2 border-t-white/60'>
          <p className='mt-6 text-sm'>Copyright © {new Date().getFullYear()} VaMiDzo  All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer