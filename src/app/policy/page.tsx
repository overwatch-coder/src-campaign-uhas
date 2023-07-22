import React from 'react'
import heroBg from '../../assets/policyhero.webp'
import HeroComponent from '@/components/HeroComponent'
import PolicyIntro from '@/components/policy/PolicyIntro'
import Policies from '@/components/policy/Policies'


export const metadata = {
  title: 'Our Policies | JFSRC'
}

const Policy = () => {
  return (
    <section>
      <HeroComponent 
        image={heroBg}
        route='Policy'
      >
        <span className='text-red-main'>VaMiDzo</span>
        <span>Policies</span>
      </HeroComponent>
      <PolicyIntro />
      <Policies />
    </section>
  )
}

export default Policy