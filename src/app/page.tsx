import React from 'react'
import Hero from './Home/Hero'
import Intro from './Home/Intro'
import WhatWeDo from './Home/WhatWeDo'
import ElectionTimeline from './Home/ElectionTimeline'
import ContactUsHome from './Home/ContactUs'
import HomeNews from './Home/HomeNews'

const Home = () => {
  return (
    <section>
      <Hero />
      <Intro />
      {/* @ts-expect-error Server Component */}
      <HomeNews />
      <WhatWeDo />
      <ElectionTimeline />
      <ContactUsHome />
    </section>
  )
}

export default Home