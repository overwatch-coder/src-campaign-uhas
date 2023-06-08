import Hero from '../components/Home/Hero'
import Intro from '../components/Home/Intro'
import WhatWeDo from '../components/Home/WhatWeDo'
import ElectionTimeline from '../components/Home/ElectionTimeline'
import ContactUsHome from '../components/Home/ContactUs'
import HomeNews from '../components/Home/HomeNews'

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