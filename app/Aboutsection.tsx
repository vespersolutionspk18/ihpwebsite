import { Button } from '@/components/ui/button'
import React from 'react'

const Aboutsection = () => {
  return (
    <div className="px-16 py-20 flex flex-row gap-[336px] justify-between font-sans font-light">
        
            <h4 className="text-gray-800 text-4xl font-normal">About Us</h4>
        <div className="flex flex-col gap-5">
        <p className="text-xl text-gray-800 text-justify">
        IHP was founded in 2012 as a non-profit aiming to usher Pakistan into the 21st Century.  Since our inception, we have spearheaded numerous national-level projects introducing cutting-edge ideas and technologies from around the globe to local communities. Our commitment to innovation in social enterprise has established IHP as a leader in driving transformative change and advancing social work in Pakistan.
        </p>
        <div><Button className=" w-auto rounded-full font-normal text-lg" variant="outline">Donate Now</Button></div>
        </div>
    </div>
  )
}

export default Aboutsection