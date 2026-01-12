import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Testimonials from './components/Testimonals/Testimonals'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPLayer from './components/VideoPlayer/VideoPlayer'
import { useState } from 'react'

const App = () => {

  const [showVideo, setShowVideo] = useState(false)

  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subtitle="Our Programs" title="What We Offer" />
        <Programs />
        <About setShowVideo={setShowVideo} />
        <Title subtitle="Gallery" title="Campus Photos" />
        <Gallery />
        <Title subtitle="TESTIMONIALS" title="What Our Students Say" />
        <Testimonials />
        <Title subtitle="Contact US" title="Get In Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPLayer showVideo={showVideo} setShowVideo={setShowVideo} />
    </div>
  )
}

export default App