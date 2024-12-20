import React from 'react'
import IHPLogo from "@/public/assets/iplogo.svg";
import { Button } from '@/components/ui/button';
const Header = () => {
  return (
    <div className="bg-white w-full p-5 flex flex-row justify-between">
      <IHPLogo alt="logo" className="w-[94px]" />
      <div className="flex flex-row justify-between font-sans text-2xl text-gray-900 gap-10">
      <div>Home</div>
      <h4>Recent  Projects</h4>
      <div>About</div>
      <div>Contact</div>
      
      </div>
      <Button className=" rounded-full bg-bgpink hover:bg-dmagenta text-white font-sans font-light text-2xl" >Donate</Button>
    </div>
  )
}

export default Header
