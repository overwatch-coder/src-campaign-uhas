import React from 'react'
import heroBg from '../../assets/about-hero.jpeg'
import HeroComponent from '../components/HeroComponent'
import Profile from './Profile'
import MissionStatement from './MissionStatement'
import GuidingPrinciple from './GuidingPrinciple'
import Endorsement from './Endorsement'
import Achievements from './Achievements'

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