import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'

const Aboutsection = () => {
  return (
    <div className="px-16 py-20 flex flex-col xl:flex-row gap-10 xl:gap-[336px] justify-between font-sans font-light">
        
            <h4 className="text-gray-800 text-4xl font-normal">About <span className="font-medium text-bgpink">Us</span></h4>
        <div className="flex flex-col gap-5">
        <p className="text-xl text-gray-800 text-justify">
        IHP was founded in 2012 as a non-profit aiming to usher Pakistan into the 21st Century.  Since our inception, we have spearheaded numerous national-level projects introducing cutting-edge ideas and technologies from around the globe to local communities. Our commitment to innovation in social enterprise has established IHP as a leader in driving transformative change and advancing social work in Pakistan.
        </p>
        <div><Link href="/about"><Button className=" w-auto rounded-full font-normal text-lg hover:text-white hover:border-0 hover:bg-bgpink" variant="outline">Learn More</Button></Link></div>
        </div>
    </div>
  )
}

export default Aboutsection