import React from 'react'
import Header from '../Header'
import Faqsection from '../Faqsection'
import Footer from '../Footer'
import Abouthero from './Abouthero'
import AboutMission from './AboutMission'
import AboutHistory from './AboutHistory'

const page = () => {
  return (
    <div>
        <Header />
        <Abouthero />
        
        <AboutHistory />
        <AboutMission   />
      
        <Footer />
    </div>
  )
}

export default page