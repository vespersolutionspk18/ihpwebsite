import React from 'react'
import { Button } from "@/components/ui/button"


const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row p-10 font-sans leading-tight tracking-tight mt-16 mb-16 gap-10 ">
      <div className="flex flex-col w-full lg:w-[40%] justify-between">
        <h1 className="text-4xl lg:text-6xl font-light text-gray-800 lg:mr-2 ">Initiative for Human <span className="font-medium text-blue-800">Prosperity</span></h1>
        <p className="text-xl mt-5 xl:mt-0 font-light text-black lg:mr-2 text-justify tracking-tight">
        Euroconsult Pakistan is a global, state-of-the-art service provider organization actively engaged in water resources and energy, agriculture, infrastructure, environment, oil and gas, mass transit, light rail, motorways, highways, institutional capacity building, financial management, rural and urban development, and management.
        </p>
        <div className="flex flex-row gap-4 mt-5 xl:mt-0">
        <Button className="font-sans font-white bg-blue-800 font-light text-lg">About Us</Button>
        <Button className="font-sans border-gray-300 font-light text-lg" variant="outline" >Donate Now</Button>
        </div>
      </div>
      <div className="flex lg:w-[60%] h-[380px] rounded-3xl bg-cover bg-center" style={{backgroundImage: `url('/assets/hero.jpg')`}}>
    
      </div>
    </div>
  )
}

export default HeroSection
