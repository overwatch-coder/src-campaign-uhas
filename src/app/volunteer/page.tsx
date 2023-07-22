import React from 'react'
import heroBg from '../../assets/volunteer-hero.jpeg'
import HeroComponent from '@/components/HeroComponent'
import WhyVolunteer from '@/components/volunteer/WhyVolunteer'
import WhatCanYouDo from '@/components/volunteer/WhatCanYouDo'
import JoinCampaignTeam from '@/components/volunteer/JoinCampaignTeam'

export const metadata = {
  title: 'Volunteering | VaMiDzo'
}

const Volunteer = () => {
  return (
    <section>
       <HeroComponent 
        image={heroBg}
        route='Volunteer'
      >
        <span>Volunteer</span>
        <span className='text-yellow-600'>VaMiDzo</span>
      </HeroComponent>
      <WhyVolunteer />
      <WhatCanYouDo />
      <JoinCampaignTeam />
    </section>
  )
}

export default Volunteer