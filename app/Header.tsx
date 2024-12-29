"use client";

import React, { useState } from "react";
import IHPLogo from "@/public/assets/iplogo.svg";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  const handleLinkClick = (path: string) => {
    router.push(path);
    setIsDropdownVisible(false); // Close the dropdown after navigation
  };

  return (
    <div className="relative">
      {/* Main Header */}
      <div className="bg-white w-full p-5 flex flex-row justify-between items-center">
        <Link href="/">
          <IHPLogo alt="logo" className="w-[94px]" />
        </Link>
        <div
          className="bg-bgpink p-1 rounded-xl hover:cursor-pointer"
          onClick={toggleDropdown}
        >
          {/* Transition icon */}
          {isDropdownVisible ? (
            <RxCross1
              className="h-10 w-10 text-white transition-transform transform duration-500 ease-in-out"
            />
          ) : (
            <IoMenu
              className="h-10 w-10 stroke-white transition-transform transform duration-500 ease-in-out"
            />
          )}
        </div>
      </div>

      {/* Dropdown */}
      <div
        className={`absolute border-t-[1px] border-t-gray-200 top-full left-0 w-full bg-white z-50 shadow-lg transition-all ease-in-out duration-500 ${
          isDropdownVisible ? "h-[720px] xl:h-[220px] opacity-100" : "h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="xl:px-10 bg-white flex flex-col">
          <div className="w-full gap-4 lg:gap-0 flex flex-col xl:flex-row justify-between p-10 font-sans font-regular text-xl xl:text-2xl text-gray-700">
            <div>
              Navigation
              <ul className="text-gray-800 font-light text-lg xl:text-xl mt-5">
                <li onClick={() => handleLinkClick("/")}>Home</li>
                <li onClick={() => handleLinkClick("/about")}>About</li>
                <li onClick={() => handleLinkClick("/contact")}>Contact</li>
              </ul>
            </div>
            <div>
              Recent Projects
              <ul className="text-gray-800 font-light text-xl mt-5">
                <li onClick={() => handleLinkClick("/edubridge-ai")}>
                  Edubridge AI
                </li>
                <li onClick={() => handleLinkClick("/sehatsehara")}>
                  Sehat Sehara
                </li>
                <li onClick={() => handleLinkClick("/greenmoto-pakistan")}>
                  GreenMoto Pakistan
                </li>
              </ul>
            </div>
            <div>
              Organisation
              <ul className="text-gray-800 font-light text-xl mt-5">
                <li onClick={() => handleLinkClick("/about")}>About IHP</li>
                <li onClick={() => handleLinkClick("/#clientcarousel")}>
                  Donors
                </li>
                <li onClick={() => handleLinkClick("/about")}>History</li>
              </ul>
            </div>
            <div>
              Contact
              <ul className="text-gray-800 font-light text-xl mt-5">
                <li onClick={() => handleLinkClick("/contact#getintouch")}>
                  Get in Touch
                </li>
                <li onClick={() => handleLinkClick("/contact#donations")}>
                  Donations
                </li>
                <li onClick={() => handleLinkClick("/scholarships")}>
                  Scholarships
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
