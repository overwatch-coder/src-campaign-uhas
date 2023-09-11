import React from 'react'
import { MdEmail, MdLocationPin, MdPhoneAndroid } from 'react-icons/md'

const ContactSection = () => {
  return (
    <section className='grid grid-cols-1 gap-10 px-10 pt-10 pb-16 md:grid-cols-2 bg-bg-primary overflow-hidden'>
      <div data-aos="fade-up" className='flex flex-col space-y-5'>
        <p className='text-sm text-black md:text-base leading-[1.7] text-justify mb-5'>Feel free to reach out to us using any of the contact methods provided. We are excited to connect with you and work together towards our shared goals.</p>

        <div className='flex items-start p-3 space-x-4 bg-white rounded-xl shadow-lg'>
            <MdLocationPin size={30} color='black' />
            <div className='flex flex-col space-y-3'>
                <h3 className='font-medium text-black/90 md:text-lg'>Office Address</h3>
                <address className='flex flex-col space-y-2'>
                    <p className='text-sm text-black/70'>University of Health and Allied Science</p>
                    <p className='text-sm text-black/70'>Ho, Ghana</p>
                </address>
            </div>
        </div>

        <div className='flex items-start p-3 space-x-4 bg-white rounded-xl shadow-lg'>
            <MdPhoneAndroid size={30} color='black' />
            <div className='flex flex-col space-y-3'>
                <h3 className='font-medium text-black/90 md:text-lg'>Phone Number</h3>
                <div className='flex flex-col space-y-2'>
                    <p className='text-sm text-black/70'> +233 54 403 8175</p>
                </div>
            </div>
        </div>

        <div className='flex items-start p-3 space-x-4 bg-white rounded-xl shadow-lg'>
            <MdEmail size={30} color='black' />
            <div className='flex flex-col space-y-3'>
                <h3 className='font-medium text-black/90 md:text-lg'>Email Address</h3>
                <div className='flex flex-col space-y-2'>
                    <p className='text-sm text-black/70'>ezieljohnson@gmail.com</p>
                </div>
            </div>
        </div>
      </div>

      <form className='w-full py-5 space-y-6 bg-blue-main px-7 rounded-xl'>
        <div className='flex flex-col space-y-4'>
          <label htmlFor="name" className='text-white'>Name</label>
          <input 
            type="text" 
            placeholder='your full name...' 
            className='w-full px-4 py-3 bg-white rounded-xl outline-none placeholder:text-black'
            required={true}
            name='name'
          />
        </div>

        <div className='flex flex-col space-y-4'>
          <label htmlFor="email" className='text-white'>Email</label>
          <input 
            type="email" 
            placeholder='your email address...' 
            className='w-full px-4 py-3 bg-white rounded-xl outline-none placeholder:text-black'
            required={true}
            name='email'
          />
        </div>

        <div className='flex flex-col space-y-4'>
          <label htmlFor="subject" className='text-white'>Subject</label>
          <input 
            type="subject" 
            placeholder='enter your subject...' 
            className='w-full px-4 py-3 bg-white rounded-xl outline-none placeholder:text-black'
            required={true}
            name='subject'
          />
        </div>

        <div className='flex flex-col space-y-4'>
          <label htmlFor="help" className='text-white'>How will you help?</label>
          <textarea 
            name="message" 
            id="message" 
            rows={10}
            placeholder='your message...'
            className='w-full px-4 py-3 bg-white rounded-xl outline-none placeholder:text-black'
            required={true}
        />
        </div>
        <button className='w-full px-4 py-3 text-center text-white uppercase rounded-xl bg-yellow-600 hover:bg-yellow-700'>Send Message</button>
      </form>
    </section>
  )
}

export default ContactSection