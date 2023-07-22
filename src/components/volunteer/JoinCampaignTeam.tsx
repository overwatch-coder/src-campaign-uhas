import React from 'react'

const JoinCampaignTeam = () => {
  return (
    <section className='grid grid-cols-1 px-10 pt-10 pb-16 md:grid-cols-2'>
      <div className='flex flex-col space-y-5'>
        <h3 className='text-xl font-semibold hover:text-yellow-700 text-yellow-600 font- md:text-2xl'>Join The Campaign Team</h3>
        <p className='text-sm text-black/70 md:text-base'>Joining our campaign team as a volunteer is easy! Simply fill out our volunteer application form, and we will get in touch with you shortly. Whether you have a specific skill set or are eager to learn, there are various roles and tasks available to match your interests and availability.</p>
        <p className='font-medium'>Together, we can make a real difference!</p>
      </div>

      <form className='w-full py-5 space-y-6 bg-blue-main px-7 mt-7'>
        <div className='flex flex-col space-y-4'>
          <label htmlFor="name" className='text-white'>Name</label>
          <input 
            type="text" 
            placeholder='your full name' 
            className='w-full px-4 py-2 bg-white rounded outline-none placeholder:text-black'
            required={true}
            name='name'
          />
        </div>

        <div className='flex flex-col space-y-4'>
          <label htmlFor="email" className='text-white'>Email</label>
          <input 
            type="email" 
            placeholder='your email address' 
            className='w-full px-4 py-2 bg-white rounded outline-none placeholder:text-black'
            required={true}
            name='email'
          />
        </div>

        <div className='flex flex-col space-y-4'>
          <label htmlFor="phone" className='text-white'>Phone Number</label>
          <input 
            type="tel" 
            placeholder='your phone number' 
            className='w-full px-4 py-2 bg-white rounded outline-none placeholder:text-black'
            required={true}
            name='phone'
          />
        </div>

        <div className='flex flex-col space-y-4'>
          <label htmlFor="help" className='text-white'>How will you help?</label>
          <div className='flex items-center space-x-2'>
            <input 
              type="checkbox" 
              name='knocking' 
              value={'Door Knocking'}
            />
            <label htmlFor="knocking" className='text-white/60'>Door Knocking</label>
          </div>

          <div className='flex items-center space-x-2'>
            <input 
              type="checkbox" 
              name='texting'
              value={'Texting'} 
            />
            <label htmlFor="texting" className='text-white/60'>Texting</label>
          </div>

          <div className='flex items-center space-x-2'>
            <input 
              type="checkbox"  
              name='community'
              value={'Community Outreach'}
            />
            <label htmlFor="community" className='text-white/60'>Community Outreach</label>
          </div>

          <div className='flex items-center space-x-2'>
            <input 
              type="checkbox"  
              value={'Mutual Aid'}
              name='aid'
            />
            <label htmlFor="aid" className='text-white/60'>Mutual Aid</label>
          </div>

          <div className='flex items-center space-x-2'>
            <input 
              type="checkbox"  
              name='events'
              value={'Events'}
            />
            <label htmlFor="events" className='text-white/60'>Events</label>
          </div>
        </div>
        <button className='w-full px-4 py-3 text-center text-white uppercase rounded bg-yellow-600 hover:bg-yellow-700'>I am In</button>
      </form>
    </section>
  )
}

export default JoinCampaignTeam