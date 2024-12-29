import { Button } from '@/components/ui/button'

import React from 'react'
import IHPLogo from "@/public/assets/iplogo.svg";
import IHPLogopink from "@/public/assets/ihplogopink.svg";
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="w-full mt-10 flex flex-col">
        <div className="p-10 px-10 bg-cover flex flex-row items-center bg-center w-full h-screen bg-black/30 bg-blend-multiply" style={{ backgroundImage: `url('/assets/footchild.jpg')` }}>
        <div className="w-1/2 flex"></div>
        <div className="w-1/2">
        <div className="w-3/4 flex flex-col justify-between gap-10 bg-white p-8 rounded-2xl">
            <IHPLogo alt="logo" className="w-20" />
            <h4 className="font-sans font-medium text-gray-800 text-5xl">Joining Hands for a Better Tomorrow</h4>
            <div><Link href="/about"><Button className="w-auto rounded-full bg-bgpink hover:bg-dmagenta text-white font-sans font-light text-xl" >Learn More</Button></Link></div>
        </div>
        </div>
        </div>
        <div className="pt-10 px-10 bg-dmagenta flex flex-col">
            <div className="w-full flex flex-row justify-between p-10 font-sans font-light text-2xl text-pink-100">
            <div>
                Navigation
                <ul className="text-pink-200 text-xl mt-5">
                    <li>Home</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
            Recent Projects
                <ul className="text-pink-200 text-xl mt-5">
                    <li>GenAI</li>
                    <li>Women</li>
                    <li>Aids</li>
                    <li>E-Transport</li>
                </ul>
            </div>
            <div>
            Organisation
                <ul className="text-pink-200 text-xl mt-5">
                    <li>About IHP</li>
                    <li>Donors</li>
                    <li>History</li>
                    <li>Board of Directors</li>
                </ul>
            </div>
            <div>
            Contact
                <ul className="text-pink-200 text-xl mt-5">
                    <li>Get in Touch</li>
                    <li>Donations</li>
                    <li>Careers</li>
                    <li>Scholarships</li>
                </ul>
            </div>
            </div>
            <div>

            </div>
            <div className="w-full items-center justify-center flex mt-24"><IHPLogopink alt="logo" className="w-[320px] flex items-center justify-center" /></div>
            <Separator className="bg-lbpink w-full mt-8" />
            <div className="flex flex-row justify-between py-3 font-sans font-light text-lg text-pink-200">
            <div>Copyright IHP. All Rights Reserved</div>
            <div className="flex flex-row gap-5">
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer