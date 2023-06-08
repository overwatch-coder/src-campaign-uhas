import Hero from './Home/Hero'
import Intro from './Home/Intro'
import WhatWeDo from './Home/WhatWeDo'
import ElectionTimeline from './Home/ElectionTimeline'
import ContactUsHome from './Home/ContactUs'
import HomeNews from './Home/HomeNews'

const Home = () => {
  return (
    <>
      <Hero />
      <Intro />
      <HomeNews />
      <WhatWeDo />
      <ElectionTimeline />
      <ContactUsHome />
    </>
  )
}

export default Home