import React from 'react'

const Endorsement = () => {
  return (
    <section 
        className='flex flex-col px-10 pt-10 pb-16 mx-auto space-y-4 bg-white md:max-w-4xl overflow-hidden'
    >
        <h2 className='text-3xl font-semibold md:text-center md:text-4xl hover:text-yellow-700 text-yellow-600 font-'>Endorsements</h2>
        <div className='text-black/70 md:text-center'>
            <p className='leading-[1.7]'>
                The Johnson-Mensah led administration is honored to have received endorsements from respected faculty members, student organizations, and influential individuals. These endorsements highlight the confidence and trust placed in thne leadership abilities of Johnson and his dedication to the betterment of the student community. 
                Some notable endorsements include support from the: 
            </p>
            <p className='flex flex-col justify-center pt-3 md:flex-row md:space-x-3 md:items-center'>
                <li className='font-semibold'>Faculty Association</li>
                <li className='font-semibold'>Environmental Club</li>
                <li className='font-semibold'>Student Government President</li>
            </p>
        </div>
    </section>
  )
}

export default Endorsement