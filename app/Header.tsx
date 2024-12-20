import React from 'react'
import IHPLogo from "@/public/assets/iplogo.svg";
import { Button } from '@/components/ui/button';
const Header = () => {
  return (
    <div className="bg-white w-full p-5 flex flex-row justify-between">
      <IHPLogo alt="logo" className="w-[94px]" />
      <div className="flex flex-row justify-between font-sans font-light text-2xl text-gray-900 gap-7">
      <div>Home</div>
      <h4>Recent  Projects</h4>
      <div>About</div>
      <Button className="w-auto rounded-full bg-bgpink hover:bg-dmagenta text-white font-sans font-light text-2xl" >Contact</Button>
      </div>
    </div>
  )
}

export default Header
