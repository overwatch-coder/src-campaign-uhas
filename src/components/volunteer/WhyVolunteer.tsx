import React from 'react'
import volunteer_group_img from '../../assets/volunteer-group.png'
import Image from 'next/image'

const WhyVolunteer = () => {
  return (
    <section 
      className='flex flex-col px-10 pt-10 pb-16 space-y-5 bg-white md:flex-row md:space-y-0 md:justify-between md:space-x-10 md:items-center'
    >
      <div 
        data-aos="fade-right"
        className='flex flex-col pt-10 space-y-5 md:pt-0'>
        <h2 className='text-xl font-semibold font- md:text-2xl hover:text-yellow-700 text-yellow-600'>Why Volunteer with Us?</h2>

        <li className='space-x-2 text-sm text-black/70 md:text-base'>
          <span className='font-medium hover:text-yellow-700 text-yellow-600'>Make an impact:</span> Your efforts as a volunteer can directly contribute to our campaign success and the positive change we aim to achieve.
        </li>

        <li className='space-x-2 text-sm text-black/70 md:text-base'>
          <span className='font-medium hover:text-yellow-700 text-yellow-600'>Engage with the community:</span> Connect with like-minded individuals, forge meaningful relationships, and be part of a supportive community of changemakers.
        </li>

        <li className='space-x-2 text-sm text-black/70 md:text-base'>
          <span className='font-medium hover:text-yellow-700 text-yellow-600'>Learn and grow:</span> Volunteering offers a valuable opportunity to gain new skills, expand your network, and develop a deeper understanding of grassroots movements.
        </li> 
      </div>
      
      <Image 
        data-aos="fade-left"
        src={volunteer_group_img}
        alt='Volunteering group picture'
        width={500}
        height={500}
        className='object-cover w-full mx-auto'
      />
    </section>
  )
}

export default WhyVolunteer