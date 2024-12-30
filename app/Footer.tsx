'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation'; // Use 'next/navigation' instead of 'next/router'
import React from 'react';
import IHPLogo from "@/public/assets/iplogo.svg";
import IHPLogopink from "@/public/assets/ihplogopink.svg";
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

const Footer = () => {
  const router = useRouter();

  const handleLinkClick = (path: string) => {
    router.push(path); // This remains the same
  };

  return (
    <div className="w-full mt-10 flex flex-col">
      <div
        className="p-10 xl:px-10 bg-cover flex flex-row items-center bg-center w-full h-screen bg-black/30 bg-blend-multiply"
        style={{ backgroundImage: `url('/assets/footchild.jpg')` }}
      >
        <div className="w-1/2 flex"></div>
        <div className="w-1/2">
          <div className="w-3/4 flex flex-col justify-between gap-10 bg-white p-8 rounded-2xl">
            <IHPLogo alt="logo" className="w-20" />
            <h4 className="font-sans font-medium text-gray-800 text-2xl xl:text-5xl">
              Joining Hands for a Better Tomorrow
            </h4>
            <div>
              <Link href="/about">
                <Button className="w-auto rounded-full bg-bgpink hover:bg-dmagenta text-white font-sans font-light text-xl">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10  xl:px-10 bg-dmagenta flex flex-col">
        <div className="w-full gap-4 lg:gap-0 flex flex-row justify-between p-10 font-sans font-light text-xl xl:text-2xl text-pink-100">
          <div>
            Navigation
            <ul className="text-pink-200 text-lg xl:text-xl mt-5 hover:cursor-pointer">
              <li onClick={() => handleLinkClick('/')}>Home</li>
              <li onClick={() => handleLinkClick('/about')}>About</li>
              <li onClick={() => handleLinkClick('/contact')}>Contact</li>
            </ul>
          </div>
          <div>
            Recent Projects
            <ul className="text-pink-200 text-xl mt-5 hover:cursor-pointer">
              <li onClick={() => handleLinkClick('/edubridge-ai')}>Edubridge AI</li>
              <li onClick={() => handleLinkClick('/sehatsehara')}>Sehat Sehara</li>
              <li onClick={() => handleLinkClick('/greenmoto-pakistan')}>GreenMoto Pakistan</li>
              <li onClick={() => handleLinkClick('/scholarships')}>National Scholarship</li>
            </ul>
          </div>
          <div>
            Organisation
            <ul className="text-pink-200 text-xl mt-5 hover:cursor-pointer">
              <li onClick={() => handleLinkClick('/about')}>About IHP</li>
              <li onClick={() => handleLinkClick('/#clientcarousel')}>Donors</li>
              <li onClick={() => handleLinkClick('/about')}>History</li>
            </ul>
          </div>
          <div>
            Contact
            <ul className="text-pink-200 text-xl mt-5 hover:cursor-pointer">
              <li onClick={() => handleLinkClick('/contact#getintouch')}>Get in Touch</li>
              <li onClick={() => handleLinkClick('/contact#donations')}>Donations</li>
              <li onClick={() => handleLinkClick('/about#methodology')}>Methodology</li>
            </ul>
          </div>
        </div>
        <div></div>
        <div
          onClick={() => handleLinkClick('/')}
          className="w-full items-center justify-center flex mt-24"
        >
          <IHPLogopink alt="logo" className="w-[320px] flex items-center justify-center" />
        </div>
        <Separator className="bg-lbpink w-full mt-8" />
        <div className="flex flex-row justify-between py-3 px-3 xl:px-0 font-sans font-light text-md xl:text-lg text-pink-200">
          <div>Copyright IHP. All Rights Reserved</div>
          <div className="flex flex-row gap-5">
            <p onClick={() => handleLinkClick('/terms')}>Terms of Service</p>
            <p onClick={() => handleLinkClick('/privacy')}>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
