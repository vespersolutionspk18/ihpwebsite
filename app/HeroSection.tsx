"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CiCircleChevRight } from "react-icons/ci";
import { useRouter } from 'next/navigation'; // Use the correct router import

const HeroSection = () => {
  const router = useRouter(); // Initialize the router

  const handleDonateNowClick = () => {
    router.push('/contact#donations'); // Navigate to the target route with the hash
  };

  return (
    <div
      className="pb-20 w-full flex p-16 flex-col xl:flex-row items-end h-[820px] xl:h-screen bg-cover bg-bottom bg-black/30 bg-blend-multiply"
      style={{ backgroundImage: `url('/assets/hero.jpg')` }}
    >
      <div className="xl:w-[40%] font-sans font-light flex flex-col gap-5">
        <h1 className="text-white text-7xl">Finding Value in Novelty</h1>
        <p className="text-white text-xl">
          Development cannot occur without institutions of change. By fostering empathy and understanding, we tackle challenges and create positive change.
        </p>
        <div className="flex flex-row gap-5">
          <Button
            onClick={handleDonateNowClick} // Add the onClick handler
            className="rounded-full font-sans font-light text-xl bg-bgpink hover:bg-dmagenta text-white"
          >
            Donate Now
          </Button>
        </div>
      </div>
      <div className="xl:w-[60%] my-10 xl:my-0 flex flex-col items-end justify-end">
        <div className="px-7 py-10 bg-white rounded-2xl flex flex-col gap-5 font-sans">
          <h2 className="text-3xl font-light">
            Help Children have a safe and <br />
            secure life
          </h2>
          <Progress value={83} />
          <p className="font-light text-xl text-gray-500">$7,050,982 Raised</p>
          <div className="w-full flex flex-row justify-between items-center">
            <p className="font-light text-lg text-gray-500">32 Donors</p>
            <CiCircleChevRight className="w-10 h-10 text-gray-400 -rotate-45 hover:text-gray-600 hover:rotate-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
