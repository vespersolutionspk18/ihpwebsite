import React from 'react'
import Header from '../Header'
import Faqsection from '../Faqsection'
import Footer from '../Footer'
import Scholarshiphero from './Scholarshiphero'
import ScholarshipBody from './ScholarshipBody'
import ScholarshipSelectionProcess from './ScholarshipSelectionProcess'

const page = () => {
  return (
    <>
    <Header />
    <Scholarshiphero />
    <ScholarshipBody />
    <ScholarshipSelectionProcess />
    <Faqsection />
    <Footer />
    </>
  )
}

export default page