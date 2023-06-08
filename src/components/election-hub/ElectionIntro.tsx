import React from 'react'

const ElectionIntro = () => {
  return (
    <section
        className='flex flex-col px-10 pt-10 pb-16 mx-auto space-y-5 bg-white'
    >
        <h2 className='text-2xl font-semibold text-center text-red-main md:text-3xl'>Updates About Electoral Processes</h2>
        <p className='text-black/70 tracking-wide leading-[1.8] text-center text-sm md:text-base'>
            Stay informed about the latest updates and developments in the electoral process. We provide timely information on important dates, procedures, and requirements. Check back regularly for announcements regarding nominations, voting methods, and any changes to the electoral process.
        </p>
    </section>
  )
}

export default ElectionIntro