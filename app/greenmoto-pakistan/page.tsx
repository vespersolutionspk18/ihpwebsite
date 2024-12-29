import React from 'react'
import Header from '../Header'
import GetinTouch from '../GetinTouch'
import Faqsection from '../Faqsection'
import Footer from '../Footer'
import Greenmoto from './Greenmotohero'
import Greenmotobody from './Greenmotobody'

const page = () => {
  return (
    <>
    <Header />
  <Greenmoto />
  <Greenmotobody    />
    <Faqsection />

    <Footer />
    </>
  )
}

export default page