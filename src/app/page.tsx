import React from 'react'
import Hero from './home/Hero'
import Intro from './home/Intro'
import WhatWeDo from './home/WhatWeDo'
import ElectionTimeline from './home/ElectionTimeline'
import LatestNews from './home/LatestNews'
import ContactUsHome from './home/ContactUs'

const Home = () => {
  return (
    <section>
      <Hero />
      <Intro />
      <WhatWeDo />
      <ElectionTimeline />
      <LatestNews />
      <ContactUsHome />
    </section>
  )
}

export default Home