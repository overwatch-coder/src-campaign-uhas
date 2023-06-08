'use client'

import React, {useState} from 'react'
import AchievementCard from '../about/AchievementCard'
import {BsChevronDown, BsChevronUp} from 'react-icons/bs'

const Policies = () => {
  const [currentPolicy, setCurrentPolicy] = useState(1);
  const [showPolicyCategory, setShowPolicyCategory] = useState(true);

  const policies = [
    {
      id: 1,
      categories: [
        {
          title: 'Expanding and diversifying facilities',
          description: 'Expanding and diversifying sports and recreational facilities to cater to a wide range of interests.'
        },
        {
          title: 'Engaging Events and Tournaments',
          description: 'Organizing engaging events, tournaments, and cultural activities to foster a vibrant campus community.'
        },
        {
          title: 'Cultural Activities and Entertainment',
          description: 'Collaborating with student clubs and organizations to provide a rich and varied entertainment experience.'
        }
      ],
      title: 'Administration & Government',
    },
    {
      id: 2,
      categories: [
        {
          title: 'Expanding and diversifying facilities',
          description: 'Expanding and diversifying sports and recreational facilities to cater to a wide range of interests.'
        },
        {
          title: 'Engaging Events and Tournaments',
          description: 'Remember, every vote counts, and your participation is crucial in shaping the future. Stay engaged, exercise your right to vote, and make a difference.'
        },
        {
          title: 'Cultural Activities and Entertainment',
          description: 'Collaborating with student clubs and organizations to provide a rich and varied entertainment experience.'
        }
      ],
      title: 'Sports, Entertainment & Recreation'
    },
    {
      id: 3,
      categories: [
        {
          title: 'Expanding and diversifying facilities',
          description: 'By empowering you with the necessary information and step-by-step guidance, we aim to ensure that you can participate in the electoral process confidently and make your voice heard.'
        },
        {
          title: 'Engaging Events and Tournaments',
          description: 'Organizing engaging events, tournaments, and cultural activities to foster a vibrant campus community.'
        },
        {
          title: 'Cultural Activities and Entertainment',
          description: 'For more detailed information and resources, please explore the specific sections under the Voting Guide or reach out to our team for any further assistance.'
        }
      ],
      title: 'Security & Safety'
    },
    {
      id: 4,
      categories: [
        {
          title: 'Expanding and diversifying facilities',
          description: 'Expanding and diversifying sports and recreational facilities to cater to a wide range of interests.'
        },
        {
          title: 'Engaging Events and Tournaments',
          description: 'Organizing engaging events, tournaments, and cultural activities to foster a vibrant campus community.'
        },
        {
          title: 'Cultural Activities and Entertainment',
          description: 'Collaborating with student clubs and organizations to provide a rich and varied entertainment experience.'
        }
      ],
      title: 'Human Resource Development'
    },
    {
      id: 5,
      categories: [
        {
          title: 'Expanding and diversifying facilities',
          description: 'Expanding and diversifying sports and recreational facilities to cater to a wide range of interests.'
        },
        {
          title: 'Engaging Events and Tournaments',
          description: 'Organizing engaging events, tournaments, and cultural activities to foster a vibrant campus community.'
        },
        {
          title: 'Cultural Activities and Entertainment',
          description: 'Collaborating with student clubs and organizations to provide a rich and varied entertainment experience.'
        }
      ],
      title: 'Academics'
    },
    {
      id: 6,
      categories: [
        {
          title: 'Expanding and diversifying facilities',
          description: 'Expanding and diversifying sports and recreational facilities to cater to a wide range of interests.'
        },
        {
          title: 'Engaging Events and Tournaments',
          description: 'Organizing engaging events, tournaments, and cultural activities to foster a vibrant campus community.'
        },
        {
          title: 'Cultural Activities and Entertainment',
          description: 'Collaborating with student clubs and organizations to provide a rich and varied entertainment experience.'
        }
      ],
      title: 'Faith Based Policies'
    },
    {
      id: 7,
      categories: [
        {
          title: 'Expanding and diversifying facilities',
          description: 'Expanding and diversifying sports and recreational facilities to cater to a wide range of interests.'
        },
        {
          title: 'Engaging Events and Tournaments',
          description: 'Organizing engaging events, tournaments, and cultural activities to foster a vibrant campus community.'
        },
        {
          title: 'Cultural Activities and Entertainment',
          description: 'Collaborating with student clubs and organizations to provide a rich and varied entertainment experience.'
        }
      ],
      title: 'Transport'
    }
  ]

  return (
    <section 
        className='relative flex flex-col justify-between pt-5 pb-20 md:flex-row'
    >
      {/* Policy Sidebar */}
        <aside
            className={`bg-blue-main w-full md:w-[300px] text-white px-7 flex flex-col space-y-5 ${showPolicyCategory ? "py-7" : "md:h-fit py-3"}`}
        >
         <button 
          onClick={() => setShowPolicyCategory(prev => !prev)}
          className='flex items-center justify-between'>
            <h2 className='text-xl font-semibold text-white font-poppins md:text-2xl'
            >
              Our Policies
            </h2> 
            <div
            >
              {!showPolicyCategory ? 
              <BsChevronDown size={25} color='white' />:
              <BsChevronUp size={25} color='white' />
              }
            </div>
          </button> 
         
         {showPolicyCategory && policies.map((policy, index) => (
          <button 
            key={index}
            className={`rounded  px-3 py-2  text-sm ${index+1 !== currentPolicy ? "bg-white text-black/80" : "bg-red-main text-white"}`
          }
          onClick={() => {setCurrentPolicy(index + 1); setShowPolicyCategory(false)}}
          >
            {policy.title}
          </button>
         ))} 
        </aside>

        {/* Policies Based On User Click */}
        <div className='flex-1 px-10'>
          {policies.filter(policy => policy.id === currentPolicy).map((policy, index) => (
            <div key={index} className='flex flex-col space-y-5'>

              <h3 className='pt-6 text-xl font-semibold text-red-main md:text-2xl md:pt-0'>{policy.title}</h3>

              <div className='flex flex-col space-y-6'>
                {policy.categories.map((cat, index) => (
                  <AchievementCard 
                    key={index}
                    title={cat.title}
                    description={cat.description}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Policies