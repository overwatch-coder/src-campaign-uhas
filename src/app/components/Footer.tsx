/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React from 'react'
import {AiFillFacebook, AiOutlineWhatsApp, AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='grid w-screen grid-cols-2 gap-10 px-10 pt-10 pb-5 text-white md:grid-cols-2 bg-blue-main md:place-items-center'>
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
          <div className='flex items-center space-x-5'>
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
            <h1 className='text-5xl md:text-7xl font-oswald text-red-main'>JFSRC</h1>

            <p className='text-xs tracking-wide md:text-sm'>Together, let's build a stronger student community."</p>
          </div>
        </div>

        <div className='w-full col-span-2 mt-5 text-center border-t-2 border-t-white/60'>
          <p className='mt-6 text-sm'>Copyright © {new Date().getFullYear()} JFSRC  All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer