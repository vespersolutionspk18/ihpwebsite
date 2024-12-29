import React from 'react'
import IHPLogo from "@/public/assets/iplogo.svg";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
const Header = () => {
  return (
    <div className="bg-white w-full p-5 flex flex-row justify-between">
      <Link href="/"><IHPLogo alt="logo" className="w-[94px]" /></Link>
      <div className="flex flex-row justify-between font-sans text-2xl text-gray-900 gap-10">
      <Link href="/"><div>Home</div></Link>
      <h4>Recent  Projects</h4>
      <Link href="/about"><div>About</div></Link>
      <Link href="/contact"><div>Contact</div></Link>
      
      </div>
      <Button className=" rounded-full bg-bgpink hover:bg-dmagenta text-white font-sans font-light text-2xl" >Donate</Button>
    </div>
  )
}

export default Header
