import { Button } from '@/components/ui/button'
import React from 'react'
import { CiCircleChevRight } from "react-icons/ci";

const RecentProjects = () => {
  return (
    <div className="flex flex-col p-10 gap-10 font-sans w-full">
      <div className="w-full flex flex-row justify-between">
        <h3 className="text-5xl text-gray-800">Our Flagship <span className="font-medium text-bgpink">Projects</span></h3>
        <Button variant="outline" className="rounded-full font-light text-xl font-sans hover:text-white hover:border-0 hover:bg-bgpink">View More</Button>
      </div>
      <div className="flex flex-col gap-5">
      <div className="flex flex-row gap-10"> 
      <div className="w-[60%] bg-cover rounded-2xl h-[360px]" style={{backgroundImage: `url('/assets/education.jpg')`}}></div>
      <div className="w-[40%] flex flex-col justify-between">
      <h4 className="font-sans font-light text-4xl text-gray-800">Integrating Generative AI for Enhanced Learning Outcomes in Public Schools</h4>
      <p className="font-sans font-light text-justify  text-xl text-gray-800">Addressing the unique challenges faced by Pakistan&apos;s public education system, IHP is exploring the potential of generative AI to create more engaging, accessible, and effective learning opportunities for students.</p>
      <div className="w-full flex flex-row justify-between hover:cursor-pointer group">
        <p className="font-sans text-md font-light text-gray-800 group-hover:font-medium">Learn More</p>
        <CiCircleChevRight className="w-8 h-8 text-gray-400 -rotate-45 group-hover:text-gray-600 group-hover:rotate-0"/>
            
      </div>
      </div>
      </div>
      <div className="flex flex-row gap-5">
      <div className="w-1/3 flex flex-col gap-5">
      <div className="w-full h-[240px] bg-cover bg-center rounded-2xl" style={{backgroundImage: `url('/assets/education.jpg')`}}></div>
      <h4 className="font-sans font-light text-3xl text-gray-800">Integrating Generative AI for Enhanced Learning Outcomes in Public Schools</h4>
      <div className="w-full flex flex-row justify-between">
        <p className="font-sans text-md font-light text-gray-800">5 May 2023 &bull; 7 Minute Read</p>
        <CiCircleChevRight className="w-8 h-8 text-gray-400 -rotate-45 hover:text-gray-600 hover:rotate-0"/>
            
      </div>
      </div>
      <div className="w-1/3 flex flex-col gap-5">
      <div className="w-full h-[240px] bg-cover bg-center rounded-2xl" style={{backgroundImage: `url('/assets/education.jpg')`}}></div>
      <h4 className="font-sans font-light text-3xl text-gray-800">Driving Sustainable Change: IHP&apos;s Electric Motorcycle Initiative</h4>
      <div className="w-full flex flex-row justify-between">
        <p className="font-sans text-md font-light text-gray-800">5 May 2023 &bull; 7 Minute Read</p>
        <CiCircleChevRight className="w-8 h-8 text-gray-400 -rotate-45 hover:text-gray-600 hover:rotate-0"/>
            
      </div>
      </div>
      <div className="w-1/3 flex flex-col gap-5">
      <div className="w-full h-[240px] bg-cover bg-center rounded-2xl" style={{backgroundImage: `url('/assets/education.jpg')`}}></div>
      <h4 className="font-sans font-light text-3xl text-gray-800">Integrating Generative AI for Enhanced Learning Outcomes in Public Schools</h4>
      <div className="w-full flex flex-row justify-between">
        <p className="font-sans text-md font-light text-gray-800">5 May 2023 &bull; 7 Minute Read</p>
        <CiCircleChevRight className="w-8 h-8 text-gray-400 -rotate-45 hover:text-gray-600 hover:rotate-0"/>
            
      </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default RecentProjects