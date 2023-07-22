import React from 'react'
import EducationCard from './EducationCard'

const EducationVoting = () => {
  const election_education = [
    {
      id: 1,
      title: 'Voter Eligibility & registration',
      description: [
        "Understand the eligibility criteria to ensure you meet the requirements for voting",
        "Learn how to register as a voter, including online registration options and registration deadlines"
      ]
    },
    {
      id: 2,
      title: 'Voting Methods',
      description: [
        "Familiarize yourself with the different voting methods available, such as in-person voting or mail-in absentee voting.",
      ]
    },
    {
      id: 3,
      title: 'Polling Locations',
      description: [
        "Find out where your designated polling locations are and their operating hours.",
      ]
    },
    {
      id: 4,
      title: 'Voter ID Requirements',
      description: [
        "Understand the identification documents or voter ID requirements needed to cast your vote.",
      ]
    },
    {
      id: 5,
      title: 'Election Day',
      description: [
        "Get prepared for election day by knowing what to expect, including any additional measures or procedures in place.",
      ]
    },
  ]

  return (
    <section 
      className='px-10 pt-10 pb-16 bg-bg-primary overflow-hidden'
      data-aos="fade-down"
    >
      <div className='flex flex-col items-center mx-auto space-y-4'>
        <h2 className='text-xl font-semibold text-center hover:text-yellow-700 text-yellow-600 md:text-2xl'>Education on How to Get Registered and Vote</h2>
        <p className='text-black/70 tracking-wide leading-[1.8] text-center text-sm md:text-base mx-auto md:max-w-4xl'>Your voice matters, and we want to make sure you can exercise your voting rights with ease. Our comprehensive voting guide will walk you through the registration and voting process.</p>
      </div>

      <div className='flex flex-col w-full pt-10 mx-auto space-y-4 md:max-w-3xl'>
        {election_education.map((edu, index) => (
          <EducationCard 
            key={index}
            edu={edu}
          />
        ))}
      </div>

    </section>
  )
}

export default EducationVoting