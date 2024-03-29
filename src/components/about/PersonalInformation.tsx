import React from 'react'

const PersonalInformation = () => {
  return (
    <section 
        className='flex flex-col w-full px-10 pt-8 pb-16 space-y-5 lg:mx-auto lg:px-24 bg-bg-primary overflow-hidden'
    >
        <h2 className='text-3xl font-semibold text-blue-main lg:mx-auto lg:text-4xl lg:max-w-3xl'>Personal Background</h2>
      <div className='p-4 w-full lg:w-3/4  bg-white mx-auto rounded-xl shadow-md border-l-[10px] border-l-primary space-y-7'>
        
        <div className='flex justify-between flex-wrap'>
          <h2 className='font-medium md:text-xl text-primary'>Programme of Study:</h2>
          <div>
            <p className='md:text-lg'>Doctor of Pharmacy</p>
          </div>
        </div>
        
      </div>
      <div className='p-4 w-full lg:w-3/4 bg-white mx-auto rounded-xl shadow-md border-l-[10px] border-l-primary space-y-7'>
        <div className='flex justify-between flex-wrap'>
          <h2 className='font-medium md:text-xl text-primary'>Level: </h2>
          <div>
            <p className='md:text-lg'> 500</p>
          </div>
        </div>
      </div> 
      <div className='p-4 w-full lg:w-3/4 bg-white mx-auto rounded-xl shadow-md border-l-[10px] border-l-primary space-y-7'>
        <div className='flex justify-between flex-wrap'>
          <h2 className='font-medium md:text-xl text-primary'>Alma Mater:</h2>
          <div className='text-right'>
            <p className='md:text-lg'>Koforidua Secondary Technical School.</p>
            <p className='md:text-lg'>St. Paul Methodist JHS, Tema</p>
            <p className='md:text-lg'> Queen Esther School, Tema</p>
            <p className='md:text-lg'> Creator Schools, Tema</p>
          </div>  
        </div>
      </div>
      <div className='p-4 w-full lg:w-3/4 bg-white mx-auto rounded-xl shadow-md border-l-[10px] border-l-primary space-y-7'>
        <div className='flex justify-between flex-wrap'>
          <h2 className='font-medium md:text-xl text-primary'>Hometown:</h2>
          <div>
            <p className='md:text-lg'>Cape-Coast</p>
          </div>  
        </div>
      </div>
      <div className='p-4 w-full lg:w-3/4 bg-white mx-auto rounded-xl shadow-md border-l-[10px] border-l-primary space-y-7'>
        <div className='flex justify-between flex-wrap'>
          <h2 className='font-medium md:text-xl text-primary'>Residence:</h2>
          <div>
            <p className='md:text-lg'>Community 22-annex, Tema</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PersonalInformation