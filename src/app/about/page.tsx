import React from 'react'
import heroBg from '../../assets/about-hero.jpeg'
import HeroComponent from '../../components/HeroComponent'
import Profile from '@/components/about/Profile'
import MissionStatement from '@/components/about/MissionStatement'
import GuidingPrinciple from '@/components/about/GuidingPrinciple'
import Achievements from '@/components/about/Achievements'
import Endorsement from '@/components/about/Endorsement'

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
        <span className='text-red-main'>JFSRC</span>
      </HeroComponent>
      <Profile />
      <MissionStatement />
      <GuidingPrinciple />
      <Achievements />
      <Endorsement />
    </section>
  )
}

export default AboutUs