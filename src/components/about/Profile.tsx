import React from 'react'
import johnsonImage from '../../assets/johnson.png';
import Image from 'next/image';
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai';

const Profile = () => {
  return (
    <section 
        className='flex flex-col items-center px-10 pb-12 mx-auto space-y-5 bg-white md:flex-row md:justify-between md:space-y-0 pt-7 md:space-x-16'
    >
        <Image 
            src={johnsonImage}
            alt='profile picture - about us page'
            className='object-contain w-[400px] md:w-full md:h-[400px] mx-auto'
            width={500}
            height={500}
        />

        <div className='flex flex-col items-center pt-10 space-y-3 md:max-w-2xl md:items-start md:pt-0 md:place-items-center'>
            <h2 className='text-base font-semibold md:text-lg text-red-main'>Profile</h2>
            <h3 className='flex items-center space-x-2 text-2xl font-semibold md:text-3xl font-oswald'>
                <span>Why Choose</span>
                <span className='text-red-main'>Johnson</span>
            </h3>

            <p className='text-base text-center md:text-justify text-black/70 leading-[1.6] pt-3'>
                John Smith is a dedicated and passionate individual running for the position of SRC President. With a strong commitment to serving the student community, John brings a wealth of experience and leadership qualities to the table. Known for their excellent communication skills and ability to collaborate effectively, John is determined to make a positive impact and represent the interests of all students.
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