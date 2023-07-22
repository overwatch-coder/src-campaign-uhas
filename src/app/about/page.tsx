import React from 'react'
import heroBg from '../../assets/about-hero.jpeg'
import HeroComponent from '../../components/HeroComponent'
import Profile from '@/components/about/Profile'
import MissionStatement from '@/components/about/MissionStatement'
import GuidingPrinciple from '@/components/about/GuidingPrinciple'
import Achievements from '@/components/about/Achievements'
import Endorsement from '@/components/about/Endorsement'
import Leadership from '@/components/about/Leadership'
import AdditionalAchievements from '@/components/about/AdditonalAchievements'
import PersonalInformation from '@/components/about/PersonalInformation'

export const metadata = {
  title: 'About JFSRC'
}

const AboutUs = () => {
  return (
    <section>
      <HeroComponent 
        image={heroBg}
        route='About'
      >
        <span>About</span>
        <span className='text-yellow-600'>VaMiDzo</span>
      </HeroComponent>
      <Profile />
      <MissionStatement />
      <GuidingPrinciple />
      <PersonalInformation />
      <Leadership />
      <Achievements />
      <AdditionalAchievements />
      <Endorsement />
    </section>
  )
}

export default AboutUs