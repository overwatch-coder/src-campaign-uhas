import EducationCard from '@/components/election-hub/EducationCard';
import React from 'react'


const WhatCanYouDo = () => {
  const how_to_help = [
    {
      id: 1,
      title: 'Volunteer your Time and Skills',
      description: [
        "Assist with campaign events and rallies.",
        "Engage in door-to-door canvassing and phone banking.",
        "Help with data entry and administrative tasks.",
        "Utilize your design or writing skills for campaign materials.",
        "Provide technical support for our digital initiatives."
      ]
    },
    {
      id: 2,
      title: 'Spread The Word',
      description: [
        "Share our campaign messages and updates on social media.",
        "Distribute campaign flyers and promotional materials.",
        "Organize and host community gatherings or information sessions.",
        "Encourage friends, family, and colleagues to support our cause."
      ]
    },
    {
      id: 3,
      title: 'Support Fundraising Efforts',
      description: [
        "Help organize fundraising events and initiatives.",
        "Reach out to potential donors and sponsors.",
        "Assist in managing online fundraising platforms.",
        "Explore creative ways to raise funds and generate support."
      ]
    },
    {
      id: 4,
      title: 'Become a Campaign Ambassador',
      description: [
        "Represent our campaign at local events and community meetings.",
        "Engage in discussions and debates, advocating for our platform.",
        "Connect with student organizations and clubs to foster support.",
        "Collaborate with other volunteers to maximize our outreach."
      ]
    },

  ];
  
  return (
    <section 
    data-aos="fade-down"
      className='px-10 pt-10 pb-10 bg-bg-primary'
    >
      <div className='flex flex-col items-center mx-auto space-y-4'>
        <h2 className='text-xl font-semibold text-center hover:text-yellow-700 text-yellow-600 md:text-2xl'>What Can You Do To Help?</h2>
        <p className='text-black/70 tracking-wide leading-[1.8] text-center text-sm md:text-base mx-auto md:max-w-4xl'>
          We believe that everyone has something valuable to contribute. 
          There are numerous ways you can get involved and make a difference in our campaign.
        </p>
      </div>

      <div className='flex flex-col w-full pt-10 mx-auto space-y-4 md:max-w-3xl'>
        {how_to_help.map((help, index) => (
          <EducationCard 
            key={index}
            edu={help}
          />
        ))}
      </div>

      <p data-aos="zoom-out" className='text-sm text-center text-black/70 md:text-base pt-7'>
        Every effort, no matter how big or small, can contribute to our collective success. We appreciate your willingness to help and invite you to join us in creating positive change.
      </p>
    </section>
  )
}

export default WhatCanYouDo