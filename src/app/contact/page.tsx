import React from 'react'
import HeroComponent from '../components/HeroComponent'
import heroBg from '../../assets/contact-hero.jpg'
import ContactIntro from './ContactIntro'
import ContactSection from './ContactSection'

export const metadata = {
  title: 'Contact Us | JFSRC'
}

const ContactUs = () => {
  return (
    <section>
       <HeroComponent 
        image={heroBg}
        route='Contact Us'
      >
        <span>Contact</span>
        <span className='text-red-main'>JFSRC</span>
      </HeroComponent>
      <ContactIntro />
      <ContactSection />
    </section>
  )
}

export default ContactUs