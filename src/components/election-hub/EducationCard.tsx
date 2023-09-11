'use client'

import React, {useState} from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

type EducationCardProps = {
  edu: {
    id: number;
    title: string;
    description: string[];
  }
}

const EducationCard = ({edu}: EducationCardProps) => {
  const [openEduCategory, setOpenEduCategory] = useState<number | null>(null);

  const handleToggleDescription = (idx: number) => {
    setOpenEduCategory(prev => prev === idx ? null : idx);
  }

  return (
    <section data-aos="fade-down" className='flex flex-col space-y-3 bg-white shadow rounded-xl overflow-hidden'>
      <button 
        onClick={() => handleToggleDescription(edu.id)}
        className='flex items-center justify-between w-full px-4 py-2 bg-blue-main rounded-xl'
      >
        <h3 className='text-white uppercase'>
          {edu.title}
        </h3>
        {!openEduCategory || openEduCategory !== edu.id ? 
        <BsChevronDown size={30} color='white' /> :
        <BsChevronUp size={30} color='white' />
        }
      </button>

      {openEduCategory !== null && openEduCategory === edu.id &&  
        <div className={`flex-col px-4 pb-4 space-y-3`}>
          {edu.description.map((desc, index) => (
            <li key={index} className='text-sm text-black/70 md:text-base'>{desc}</li>
          ))}
        </div>
      }
    </section>
  )
}

export default EducationCard