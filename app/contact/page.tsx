import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ContactHero from './ContactHero'
import Contactprehero from './Contactprehero'
import Donations from './Donations'

const page = () => {
  return (
    <div>
        <Header />
        <Contactprehero />
        <ContactHero />
        <Donations />
        <Footer />
    </div>
  )
}

export default page