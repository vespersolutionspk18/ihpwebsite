import { Button } from '@/components/ui/button'
import React from 'react'
import { CiCircleChevRight } from "react-icons/ci";
import Link from 'next/link';

const RecentProjects = () => {
  return (
    <div className="flex flex-col p-10 gap-10 font-sans w-full">
      <div className="w-full flex flex-row justify-between">
        <h3 className="text-5xl text-gray-800">Our Flagship <span className="font-medium text-bgpink">Projects</span></h3>
        <Button variant="outline" className="rounded-full font-light text-xl font-sans hover:text-white hover:border-0 hover:bg-bgpink">View More</Button>
      </div>
      <div className="flex flex-col gap-5">
      <div className="flex flex-col xl:flex-row gap-10"> 
      <div className="xl:w-[60%] bg-cover rounded-2xl h-[360px]" style={{backgroundImage: `url('/assets/education.jpg')`}}></div>
      <div className="xl:w-[40%] flex flex-col justify-between">
      <h4 className="font-sans font-light text-4xl text-gray-800">Integrating Generative AI for Enhanced Learning Outcomes in Public Schools</h4>
      <p className="font-sans font-light text-justify  text-xl text-gray-800">Addressing the unique challenges faced by Pakistan&apos;s public education system, IHP is exploring the potential of generative AI to create more engaging, accessible, and effective learning opportunities for students.</p>
      <Link href="/edubridge-ai">
      <div className="w-full flex flex-row justify-between hover:cursor-pointer group">
        <p className="font-sans text-md font-light text-gray-800 group-hover:font-medium">Learn More</p>
        <CiCircleChevRight className="w-8 h-8 text-gray-400 -rotate-45 group-hover:text-gray-600 group-hover:rotate-0"/>
            
      </div>
      </Link>
      </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-5">
      <div className="xl:w-1/3 flex flex-col gap-5">
      <div className="w-full h-[240px] bg-cover bg-center rounded-2xl" style={{backgroundImage: `url('/assets/greenmoto.jpeg')`}}></div>
      <h4 className="font-sans font-light text-3xl text-gray-800">A Critical Solution for Pakistan: Reducing Emissions Through GreenMoto Electric Motorbikes</h4>
      <Link href="/greenmoto-pakistan">
      <div className="w-full flex flex-row justify-between hover:cursor-pointer group">
        <p className="font-sans text-md font-light text-gray-800 group-hover:font-medium">Learn More</p>
        <CiCircleChevRight className="w-8 h-8 text-gray-400 -rotate-45 group-hover:text-gray-600 group-hover:rotate-0"/>
            
      </div>
      </Link>
      </div>
      <div className="xl:w-1/3 flex flex-col gap-5">
      <div className="w-full h-[240px] bg-cover bg-center rounded-2xl" style={{backgroundImage: `url('/assets/sehat.jpeg')`}}></div>
      <h4 className="font-sans font-light text-3xl text-gray-800">Sehat Sehara: Addressing HIV/AIDS in Pakistan & IHP&apos;s Response</h4>
      <Link href="/sehatsehara">
      <div className="w-full flex flex-row justify-between hover:cursor-pointer group">
        <p className="font-sans text-md font-light text-gray-800 group-hover:font-medium">Learn More</p>
        <CiCircleChevRight className="w-8 h-8 text-gray-400 -rotate-45 group-hover:text-gray-600 group-hover:rotate-0"/>
            
      </div>
      </Link>
      </div>
      <div className="xl:w-1/3 flex flex-col gap-5">
      <div className="w-full h-[240px] bg-cover bg-center rounded-2xl" style={{backgroundImage: `url('/assets/scholarshiphero.jpeg')`}}></div>
      <h4 className="font-sans font-light text-3xl text-gray-800">National Scholarship: An Initiative Dedicated to the Development of Young Minds</h4>
      <Link href="/scholarships">
      <div className="w-full flex flex-row justify-between hover:cursor-pointer group">
        <p className="font-sans text-md font-light text-gray-800 group-hover:font-medium">Learn More</p>
        <CiCircleChevRight className="w-8 h-8 text-gray-400 -rotate-45 group-hover:text-gray-600 group-hover:rotate-0"/>
            
      </div>
      </Link>
      </div>
      </div>
      </div>
    </div>
  )
}

export default RecentProjects