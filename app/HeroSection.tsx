import React from 'react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CiCircleChevRight } from "react-icons/ci";


const HeroSection = () => {
  return (
    <div className="pb-20 w-full flex p-16 flex-row items-end h-screen bg-cover bg-bottom bg-black/30 bg-blend-multiply" style={{backgroundImage: `url('/assets/hero.jpg')`}}>
      <div className=" w-[40%] font-sans font-light flex flex-col gap-5" >
        <h1 className="text-white text-7xl">Uniting Hearts for a Better Tomorrow</h1>
        <p className="text-white text-xl">By bringing together people from all walks of life, it fosters empathy and understanding to tackle challenges and create positive changes.</p>
        <div className="flex flex-row gap-5">
          <Button className="rounded-full font-sans font-light text-xl bg-bgpink hover:bg-dmagenta text-white">Donate Now</Button>
        </div>
      </div>
      <div className="w-[60%] flex flex-col items-end justify-end">
    <div className="px-7 py-10 bg-white rounded-2xl flex flex-col gap-5 font-sans ">
    <h2 className="text-3xl font-light">Help Children have a safe and <br></br>secure life</h2>
    <Progress value={83} />
    <p className="font-light text-xl text-gray-500">$2,000,982 Raised</p>
    <div className="w-full flex flex-row justify-between">
    <p className="font-light text-xl text-gray-500">18.2K Donation</p>
    <CiCircleChevRight className="w-10 h-10 text-gray-400 -rotate-45 hover:text-gray-600 hover:rotate-0"/>
    
    </div>
    </div>
      </div>
    </div>
  )
}

export default HeroSection
