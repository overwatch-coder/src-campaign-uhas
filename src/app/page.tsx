import React from 'react'
import Hero from './Home/Hero'
import Intro from './Home/Intro'
import WhatWeDo from './Home/WhatWeDo'
import ElectionTimeline from './Home/ElectionTimeline'
import LatestNews from './Home/LatestNews'
import ContactUsHome from './Home/ContactUs'

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