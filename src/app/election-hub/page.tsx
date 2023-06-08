import React from 'react'
import heroBg from '../../assets/electionhero.webp'
import HeroComponent from '@/components/HeroComponent'
import ElectionIntro from '@/components/election-hub/ElectionIntro'
import EducationVoting from '@/components/election-hub/EducationVoting'
import ElectionTimeline from '@/components/Home/ElectionTimeline'


export const metadata = {
  title: 'Election Hub | JFSRC'
}

const ElectionHub = () => {
  return (
    <section>
      <HeroComponent 
        image={heroBg}
        route='Election Hub'
      >
        <span className='text-red-main'>JFSRC</span>
        <span className=''>Elections</span>
      </HeroComponent>
      <ElectionIntro />
      <EducationVoting />

      <div className='flex flex-col px-10 py-10 space-y-4 bg-white'>
        <p className='text-sm text-black/70 md:text-base'>By empowering you with the necessary information and step-by-step guidance, we aim to ensure that you can participate in the electoral process confidently and make your voice heard.</p>

        <p className='text-sm text-black/70 md:text-base'>Remember, every vote counts, and your participation is crucial in shaping the future. Stay engaged, exercise your right to vote, and make a difference.</p>

        <p className='text-sm text-black/70 md:text-base'>For more detailed information and resources, please explore the specific sections under the Voting Guide or reach out to our team for any further assistance</p>
      </div>
      <ElectionTimeline />
    </section>
  )
}

export default ElectionHub