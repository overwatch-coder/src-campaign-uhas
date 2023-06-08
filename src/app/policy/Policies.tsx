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
          title: 'Promoting transparency and accountability',
          description: 'Promoting transparency and accountability in the student government.'
        },
        {
          title: 'Advocating for student representation',
          description: 'Advocating for student representation in administrative decision-making processes.'
        },
        {
          title: 'Streamlining administrative procedures',
          description: 'Streamlining administrative procedures to improve efficiency and responsiveness.'
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
          title: 'Enhancing campus safety measures',
          description: 'Enhancing campus safety measures and promoting a secure environment for all students.'
        },
        {
          title: 'Implementing safety awareness campaigns',
          description: 'Implementing safety awareness campaigns and educational programs.'
        },
        {
          title: 'Establishing partnerships with local law enforcement',
          description: 'Establishing partnerships with local law enforcement agencies to ensure prompt response to any security concerns.'
        }
      ],
      title: 'Security & Safety'
    },
    {
      id: 4,
      categories: [
        {
          title: 'Supporting career development initiatives',
          description: 'Supporting career development initiatives and internship opportunities.'
        },
        {
          title: 'Encouraging professional growth',
          description: 'Encouraging professional growth through workshops, seminars, and mentorship programs.'
        },
        {
          title: 'Fostering a supportive and inclusive environment',
          description: 'Fostering a supportive and inclusive environment for all students, regardless of background or abilities.'
        }
      ],
      title: 'Human Resource Development'
    },
    {
      id: 5,
      categories: [
        {
          title: 'Advocating for curriculum enhancements',
          description: 'Advocating for curriculum enhancements and interdisciplinary learning opportunities.'
        },
        {
          title: 'Promoting collaboration between faculty and students',
          description: 'Promoting collaboration between faculty and students to improve teaching and learning experiences.'
        },
        {
          title: 'Enhancing academic support services',
          description: 'Enhancing academic support services, such as tutoring programs and study groups.'
        }
      ],
      title: 'Academics'
    },
    {
      id: 6,
      categories: [
        {
          title: 'Respecting and accommodating diverse religious beliefs',
          description: 'Respecting and accommodating diverse religious beliefs and practices on campus.'
        },
        {
          title: 'Collaborating with faith-based organizations',
          description: "Collaborating with faith-based organizations to provide resources and support for students' spiritual well-being."
        },
        {
          title: 'Promoting interfaith dialogue',
          description: 'Promoting interfaith dialogue and fostering a culture of respect and understanding.'
        }
      ],
      title: 'Faith Based Policies'
    },
    {
      id: 7,
      categories: [
        {
          title: 'Addressing transportation challenges',
          description: 'Addressing transportation challenges to ensure accessibility and convenience for students.'
        },
        {
          title: 'Advocating for improved public transportation',
          description: 'Advocating for improved public transportation options.'
        },
        {
          title: 'Exploring eco-friendly transportation initiatives',
          description: 'Exploring eco-friendly transportation initiatives to reduce the carbon footprint of commuting.'
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
            data-aos="fade-down"
            className={`rounded  px-3 py-3  text-sm ${index+1 !== currentPolicy ? "bg-white text-black/80" : "bg-red-main text-white"}`
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
            <div data-aos="fade-up" key={index} className='flex flex-col space-y-5'>

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