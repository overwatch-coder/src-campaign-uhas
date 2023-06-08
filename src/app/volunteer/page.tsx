import React from 'react'
import HeroComponent from '../components/HeroComponent'
import heroBg from '../../assets/volunteer-hero.jpeg'
import WhyVolunteer from './WhyVolunteer'
import WhatCanYouDo from './WhatCanYouDo'
import JoinCampaignTeam from './JoinCampaignTeam'

export const metadata = {
  title: 'Volunteering | JFSRC'
}

const Volunteer = () => {
  return (
    <section>
       <HeroComponent 
        image={heroBg}
        route='Volunteer'
      >
        <span>Volunteer</span>
        <span className='text-red-main'>JFSRC</span>
      </HeroComponent>
      <WhyVolunteer />
      <WhatCanYouDo />
      <JoinCampaignTeam />
    </section>
  )
}

export default Volunteer