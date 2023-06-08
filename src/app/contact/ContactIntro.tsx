/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const ContactIntro = () => {
  return (
    <section
      data-aos="fade-down"
        className='flex flex-col px-10 pt-10 pb-16 mx-auto space-y-5 bg-white'
    >
        <h2 className='text-2xl font-semibold text-center font-oswald text-red-main md:text-3xl'>Get In Touch</h2>
        <p className='text-black/70 tracking-wide leading-[1.8] text-center text-sm md:text-base'>
        We value your feedback, questions, and support. If you have any inquiries or would like to connect with our campaign team, we invite you to get in touch with us. Here's how you can reach us:
        </p>
    </section>
  )
}

export default ContactIntro