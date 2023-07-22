import React from 'react'
import johnsonImage from '../../assets/johnson.png';
import { aboutProfileImage } from '@/assets';
import Image from 'next/image';
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai';

const Profile = () => {
  return (
    <section 
        className='flex flex-col items-center px-10 pb-12 mx-auto space-y-5 bg-white md:flex-row md:justify-between md:space-y-0 pt-7 md:space-x-16'
    >
        <Image 
            src={aboutProfileImage}
            alt='profile picture - about us page'
            className='object-contain w-[500px] md:w-full md:h-[500px] mx-auto'
        />

        <div className='flex flex-col items-center pt-10 space-y-3 md:max-w-2xl md:items-start md:pt-0 md:place-items-center'>
            <h2 className='text-base font-semibold md:text-lg text-red-main'>Profile</h2>
            <h3 className='flex items-center space-x-2 text-2xl font-semibold md:text-3xl font-oswald'>
                <span>Why Choose</span>
                <span className='text-red-main'>Johnson</span>
            </h3>

            <p className='text-base text-center md:text-justify text-black/70 leading-[1.6] pt-3'>
                Our vision is to elevate the status of the SRC as a highly respected and influential stakeholder within the University community, whose voice is not only heard but also valued and acted upon. The pivot of this journey is premised on HOPE, CHANGE and ACTION.
            </p>

            <section className='flex flex-col pt-2 space-y-3'>
                <h3 className='font-medium text-red-main'>Follow My Campaign Journey</h3>
                
                <div className='flex items-center mx-auto space-x-5 md:mx-0'>
                    <a href={'/'} target='_blank' className='hover:text-red-700 hover:scale-125'>
                        <AiFillFacebook size={28} />
                    </a>
                    <a href={'/'} target='_blank' className='hover:text-red-700 hover:scale-125'>
                        <AiOutlineTwitter size={28} />
                    </a>
                    <a href={'/'} target='_blank' className='hover:text-red-700 hover:scale-125'>
                        <AiOutlineInstagram size={28} />
                    </a>
                    <a href={'/'} target='_blank' className='hover:text-red-700 hover:scale-125'>
                        <AiOutlineWhatsApp size={28} />
                    </a>
                </div>
            </section>
        </div>
    </section>
  )
}

export default Profile