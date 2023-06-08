import React from 'react'
import HeroComponent from '../components/HeroComponent'
import heroBg from '../../assets/policyhero.webp'

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
        <span className='text-red-main'>JFSRC</span>
        <span>Policies</span>
      </HeroComponent>
    </section>
  )
}

export default Policy