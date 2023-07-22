import React from 'react'
import {MdLocationPin, MdLocalPhone, MdEmail} from 'react-icons/md'

const ContactUsHome = () => {
  return (
    <section 
        className='flex flex-col px-10 pt-10 pb-16 space-y-4 bg-bg-primary'
    >
        <div className='flex flex-col items-center mb-5 space-y-2 text-center'>
            <h2 className='text-2xl font-semibold sm:text-3xl md:text-4xl font-oswald'>Contact Us</h2>

            <p className='text-sm md:text-base text-black/70'>Reach Out and Let Your Voice Be Heard</p>
              
          </div>

        <div className='flex flex-col justify-around space-y-5 sm:flex-row sm:space-y-0'>
            <div className='flex flex-col items-center space-y-3 text-center'>
                <MdLocationPin size={35} color='black' />
                <address className='space-y-1'>
                    <p className='text-sm text-black/80'>Collins StreetVictoria,</p> 
                    <p className='text-sm text-black/80'>NewYork, USA</p>
                </address>
            </div>

            <div className='flex flex-col items-center space-y-3 text-center'>
                <MdLocalPhone size={35} color='black' />
                <div className='space-y-1'>
                    <p className='text-sm text-black/80'>+33 6 94 445 516</p> 
                    <p className='text-sm text-black/80'>+25 4 85 665 441</p>
                </div>
            </div>

            <div className='flex flex-col items-center space-y-3 text-center'>
                <MdEmail size={35} color='black' />
                <div className='space-y-1'>
                    <p className='text-sm text-black/80'>astute@example.com</p> 
                    <p className='text-sm text-black/80'>demo@example.com</p>
                </div>
            </div>
        </div>

        <form className='flex flex-col max-w-3xl mx-auto space-y-6 pt-7 w-full md:w-[700px]'>
            <div className='flex flex-col w-full space-y-2'>
                <label htmlFor="name">Full name</label>
                <input 
                    type="text" 
                    name='name' 
                    placeholder='your name' 
                    className='w-full px-4 py-3 bg-transparent border-[1px] focus:border-2 outline-none border-black/70 rounded'
                    required={true}
                />
            </div>

            <div className='flex flex-col w-full space-y-2'>
                <label htmlFor="email">Email address</label>
                <input 
                    type="email" 
                    name='email' 
                    placeholder='your email' 
                    className='w-full px-4 py-3 bg-transparent border-[1px] focus:border-2 outline-none border-black/70 rounded'
                    required={true}
                />
            </div>

            <div className='flex flex-col w-full space-y-2'>
                <label htmlFor="comment">Comment/Message</label>
                <textarea 
                    name="comment"
                    placeholder='your comment/question'
                    className='w-full px-4 py-3 bg-transparent border-[1px] focus:border-2 outline-none border-black/70 rounded'
                    rows={10}
                    required={true}
                ></textarea>
            </div>
            
            <button className='px-10 py-3 mx-auto text-center text-white rounded-full hover:bg-red-800 bg-red-main w-fit'>Submit</button>
        </form>
    </section>
  )
}

export default ContactUsHome