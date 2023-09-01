import Image from 'next/image'
import React from 'react'
import { gallery12, gallery18 } from '@/assets'
import AchievementCard from './AchievementCard'

const Achievements = () => {
  return (
    <section
        className='px-10 pt-10 bg-bg-primary overflow-hidden'
    >
        <div className='flex flex-col max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl font-semibold text-blue-main font- md:text-4xl'>Achievements</h2>
            <p className='text-black/70 text-sm tracking-wide leading-[1.6]'>Throughout his academic journey, John has actively engaged in various extracurricular activities and demonstrated a strong track record of accomplishments.</p>
        </div>

        <div 
            className='flex flex-col mt-3 md:mt-0 space-y-5 lg:space-y-0 lg:space-x-10 lg:flex-row lg:justify-between'
        >
            <Image 
                src={gallery18}
                alt='Achievement image'
                width={500}
                className=' object-contain w-full md:w-[500px] lg:w-[700px] md:h-[400px] lg:h-[700px]'
            />

            <div className='flex flex-col justify-center pt-10 space-y-5 md:pt-0'>
                <AchievementCard 
                    title='Champion'
                    description='SRC Volleyball Championship 2018'
                />

                <AchievementCard 
                    title='Champion'
                    description='Kumasi Debate Championship 2022'
                />

                <AchievementCard 
                    title='Champion'
                    description='Summer Wars Debate Championship 2021'
                  />
                <AchievementCard 
                    title='Grande Final Best Speaker'
                    description='Pre- Word War Invitational Championship 2022'
                  />  
                <AchievementCard 
                    title='2nd Runner Up'
                    description='Patient Counselling Competition 2021'
                  /> 
            </div>
        </div>
    </section>
  )
}

export default Achievements