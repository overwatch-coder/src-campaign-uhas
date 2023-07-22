import React from 'react'
import heroBg from '../../assets/contact-hero.jpg'
import ContactIntro from '@/components/contact/ContactIntro'
import ContactSection from '@/components/contact/ContactSection'
import HeroComponent from '@/components/HeroComponent'

export const metadata = {
  title: 'Contact Us | VaMiDzo'
}

const ContactUs = () => {
  return (
    <section>
       <HeroComponent 
        image={heroBg}
        route='Contact Us'
      >
        <span>Contact</span>
        <span className='text-yellow-600'>VaMiDzo</span>
      </HeroComponent>
      <ContactIntro />
      <ContactSection />
    </section>
  )
}

export default ContactUs