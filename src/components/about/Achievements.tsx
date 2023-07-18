import Image from 'next/image'
import React from 'react'
import achievementBg from '../../assets/achievement.png'
import AchievementCard from './AchievementCard'

const Achievements = () => {
  return (
    <section
        className='px-10 pt-10 bg-bg-primary'
    >
        <div className='flex flex-col max-w-3xl mx-auto space-y-3 text-center'>
            <h2 className='text-3xl font-semibold text-blue-main font-oswald md:text-4xl'>Achievements</h2>
            <p className='text-black/70 text-sm tracking-wide leading-[1.6]'>Throughout his academic journey, John has actively engaged in various extracurricular activities and demonstrated a strong track record of accomplishments.</p>
        </div>

        <div 
            className='flex flex-col mt-10 space-y-5 lg:space-y-0 lg:space-x-10 lg:flex-row lg:justify-between'
        >
            <Image 
                src={achievementBg}
                alt='Achievement image'
                width={500}
                height={500}
                className='object-cover w-full md:h-[500px] lg:h-full'
            />

            <div className='flex flex-col justify-center pt-10 space-y-5 md:pt-0'>
                <AchievementCard
                    title='Charity Event Success'
                    description='Successfully organized a charity event that raised $10,000 for a local youth education initiative.'
                />

                <AchievementCard 
                    title='Sustainability Campaign Coordinator'
                    description='Coordinated a campus-wide sustainability campaign, resulting in a significant reduction of waste and increased awareness of eco-friendly practices.'
                />

                <AchievementCard 
                    title='Community Service Advocate'
                    description='Led a volunteer team in organizing a series of community service projects, benefiting local organizations and making a positive impact in the surrounding community.'
                />

                <AchievementCard 
                    title='Debate Club Leadership'
                    description='Demonstrated leadership as the president of the Debate Club, fostering critical thinking and communication skills among students.'
                  />  
            </div>
        </div>
    </section>
  )
}

export default Achievements